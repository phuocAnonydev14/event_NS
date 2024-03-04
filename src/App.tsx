import {useEffect, useState} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import ListGirl from "./components/ListGirl";
import {ImageGallery} from "./components/ImageGallery";

import SendLove from "./components/SendLove";
import 'animate.css';
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {WaterOrder} from "./components/WaterOrder";
import {ServiceOrder} from "./components/Service";
import Index from "./components/HeartBeat";
import Header from "./components/Header";
import {getToken, onMessage} from "firebase/messaging";
import {messaging, useMessaging, useRealtimeDB} from "./utils/firebase.utils.ts";
import {Message} from "./components/MessageFB/Message.tsx";
import {SmoothScroll} from "./components/SmoothScroll.tsx";
import {useDeviceContext} from "./providers/deviceProvider.tsx";
import {Button} from "antd";


function App() {
	const [selectedOrder, setSelectedOrder] = useState('');
	const [selectedService, setSelectedService] = useState<{ userAction: string, name: string }>({
		userAction: '',
		name: ''
	});
	const {addDevice, addService} = useRealtimeDB();
	const {setDeviceId, deviceId} = useDeviceContext()
	const {sendNotification} = useMessaging();
	
	
	const handleAddFirebase = async () => {
		const name = localStorage.getItem('username-8/3-ns')
		if (!name || ((!selectedOrder) || (!selectedService.name || !selectedService.userAction))) {
			toast('Nhâp tên và order của bạn trước khi order')
			return
		}
		await addService({order: selectedOrder, name, service: selectedService}, deviceId)
		await sendNotification(`Lady ${name} đã order`, `${selectedOrder}, ${selectedService.name} từ anh ${selectedService.userAction} 🥰`);
	}
	
	useEffect(() => {
		AOS.init({
			duration: 400,
			delay: 200,
		});
		requestPermission();
	}, [])
	
	async function requestPermission() {
		const permission = await Notification.requestPermission();
		
		if (permission === "granted") {
			const deviceId = await getToken(messaging, {
				vapidKey: import.meta.env.VITE_APP_VAPID_KEY,
			});
			if (deviceId) {
				addDevice(deviceId);
				setDeviceId(deviceId);
			}
		} else if (permission === "denied") {
			alert("You denied for the notification");
		}
	}
	
	onMessage(messaging, (payload) => {
		console.log('Message received.', payload);
		toast(<Message notification={payload.notification}/>);
	});
	
	
	return (
		<>
			<ToastContainer/>
			<SmoothScroll>
				<div className={'app'} style={{overflowX: "hidden"}} data-aos={"fade-left"}>
					<Header/>
					<div style={{maxWidth: "1440px", margin: '0 auto'}}>
						<ImageGallery/>
						<ListGirl/>
						<SendLove/>
						<WaterOrder selectedOrder={selectedOrder} setSelectedOrder={setSelectedOrder}/>
						<ServiceOrder selectedService={selectedService} setSelectedService={setSelectedService}/>
					</div>
					<div style={{display:"flex", justifyContent:"center", alignItems:"center",marginBottom:"50px"}}>
						<Button className={"btn-submit"} size={"large"} type={"primary"} onClick={() => handleAddFirebase()}>Gửi yêu cầu của bạn</Button>
						
					</div>
					<Index/>
				</div>
			</SmoothScroll>
		</>
	)
}

export default App
