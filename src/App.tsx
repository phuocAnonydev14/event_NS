import {useEffect, useState} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import ListGirl from "./components/ListGirls.tsx";
import {ImageGallery} from "./components/ImageGallery";

import SendLove from "./components/SendLove";
import 'animate.css';
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {WaterOrder} from "./components/WaterOrder";
import {ServiceOrder} from "./components/Service";
import HeartBeat from "./components/HeartBeat.tsx";
import Header from "./components/Header";
import {getToken, onMessage} from "firebase/messaging";
import {messaging, useMessaging, useRealtimeDB} from "./utils/firebase.utils.ts";
import {Message} from "./components/MessageFB/Message.tsx";
import {SmoothScroll} from "./components/SmoothScroll.tsx";
import {useDeviceContext} from "./providers/deviceProvider.tsx";


function App() {
	const [selectedOrder, setSelectedOrder] = useState('');
	const [selectedService, setSelectedService] = useState<{ userAction: string, name: string }>({
		userAction: '',
		name: ''
	});
	const {addDevice, addService} = useRealtimeDB();
	const {setDeviceId, deviceId} = useDeviceContext()
	const {sendNotification} = useMessaging();
	
	useEffect(() => {
		const name = localStorage.getItem('username-8/3-ns')
		if (!name) {
			toast('tên của bạn trước khi order')
			return
		}
		addService({order: selectedOrder, name, service: selectedService}, deviceId)
		
		
	}, [selectedOrder, selectedService]);
	
	useEffect(() => {
		if (selectedService.name && selectedService.userAction)
			sendNotification(`Lady ${name} đã order`, ` ${selectedService.name} ${selectedService.userAction}`);
		
	}, [selectedService]);
	
	useEffect(() => {
		if (selectedOrder)
			sendNotification(`Lady ${name} đã order`, `${selectedOrder}`);
	}, [selectedOrder]);
	
	console.log(selectedService)
	
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
					<HeartBeat/>
				</div>
			</SmoothScroll>
		</>
	)
}

export default App
