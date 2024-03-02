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


function App() {
	const [selectedOrder, setSelectedOrder] = useState('');
	const [selectedService, setSelectedService] = useState('');
	const { addDevice, addService } = useRealtimeDB();

	useEffect(() => {
		AOS.init({
			duration: 400,
			delay: 200,
		});
		requestPermission();
	}, [])

	const { VITE_APP_VAPID_KEY } = import.meta.env;

	async function requestPermission() {
		const permission = await Notification.requestPermission();

		if (permission === "granted") {
			const deviceId = await getToken(messaging, {
				vapidKey: VITE_APP_VAPID_KEY,
			});
			if (deviceId) {
				addDevice(deviceId);
			}
		} else if (permission === "denied") {
			alert("You denied for the notification");
		}
	}

	onMessage(messaging, (payload) => {
		toast(<Message notification={payload.notification} />);
	});


	return (
		<>

			<div className={'app'} style={{ overflowX: "hidden" }} data-aos={"fade-left"} >
				<ToastContainer />
				<Header />
				<div style={{ maxWidth: "1440px", margin: '0 auto' }}>
					<ImageGallery />
					<ListGirl />
					<SendLove />
					<WaterOrder selectedOrder={selectedOrder} setSelectedOrder={setSelectedOrder} />
					<ServiceOrder selectedService={selectedService} setSelectedService={setSelectedService} />
				</div>
				<HeartBeat />
			</div>
		</>
	)
}

export default App
