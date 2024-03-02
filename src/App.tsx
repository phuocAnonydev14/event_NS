import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import ListGirl from "./components/ListGirls.tsx";
import { ImageGallery } from "./components/ImageGallery";

import SendLove from "./components/SendLove";
import 'animate.css';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { WaterOrder } from "./components/WaterOrder";
import { ServiceOrder } from "./components/Service";
import HeartBeat from "./components/HeartBeat.tsx";
import Header from "./components/Header";
import { getToken, onMessage } from "firebase/messaging";
import { messaging, useRealtimeDB } from "./utils/firebase.utils.ts";
import { Message } from "./components/MessageFB/Message.tsx";
import { SmoothScroll } from "./components/SmoothScroll.tsx";


function App() {
	const [selectedOrder, setSelectedOrder] = useState('');
	const [selectedService, setSelectedService] = useState('');
	const { addDevice } = useRealtimeDB();
	const [deviceId, setDeviceId] = useState<string>();

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
		toast(<Message notification={payload.notification} />);
	});


	return (
		<>
			<ToastContainer />
			<SmoothScroll>
				<div className={'app'} style={{ overflowX: "hidden" }} data-aos={"fade-left"} >
					<Header/>
					<div style={{ maxWidth: "1440px", margin: '0 auto' }}>
						<ImageGallery />
						<ListGirl />
						<SendLove />
						<WaterOrder selectedOrder={selectedOrder} setSelectedOrder={setSelectedOrder} />
						<ServiceOrder selectedService={selectedService} setSelectedService={setSelectedService} />
					</div>
					<HeartBeat />
				</div>
			</SmoothScroll>
		</>
	)
}

export default App
