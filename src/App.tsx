import {useEffect, useState} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import ListGirl from "./components/ListGirls.tsx";
import {ImageGallery} from "./components/ImageGallery";

import SendLove from "./components/SendLove";
import 'animate.css';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {WaterOrder} from "./components/WaterOrder";
import {ServiceOrder} from "./components/Service";
import HeartBeat from "./components/HeartBeat.tsx";
import Header from "./components/Header";


function App() {
	const [selectedPerson,setSelectedPerson] = useState('')
	const [selectedOrder,setSelectedOrder] = useState('')
	const [selectedService,setSelectedService] = useState('')
	
	useEffect(() => {
		AOS.init({
			duration:400,
			delay:200,
		});
	}, [])
	
	
	return (
		<>

			<div className={'app'} style={{maxWidth:"1440px",margin:'0 auto',paddingTop:"20px",overflowX:"hidden"}} data-aos={"fade-left"} >
				<ToastContainer />
				<Header />
				<ImageGallery />
				<ListGirl />
				<SendLove />
				<WaterOrder selectedOrder={selectedOrder} setSelectedOrder={setSelectedOrder} />
				<ServiceOrder selectedService={selectedService} setSelectedService={setSelectedService} />
				<HeartBeat />
			</div>
		</>
	)
}

export default App
