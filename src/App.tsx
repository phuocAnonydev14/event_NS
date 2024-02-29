import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import HeartBeat from "./components/HeartBeat.tsx";
import ListGirl from "./components/ListGirls.tsx";
import {ImageGallery} from "./components/ImageGallery";
import Header from "./components/Header";

function App() {
	
	useEffect(() => {
		AOS.init({
			duration:400,
			delay:200,
		});
	}, [])
	
	
	return (
		<>
			<div style={{maxWidth:"1200px",margin:'0 auto'}} data-aos={"fade-left"} >
				<Header />
				<ImageGallery />
				<ListGirl />
				<HeartBeat />
			</div>
		</>
	)
}

export default App
