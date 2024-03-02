import "./SendLove.css"
import {useState} from "react";
import ConfettiExplosion from "react-confetti-explosion";
import {toast} from "react-toastify";
import {UrgeWithPleasureComponent} from "../TimerCoutdown.tsx";
import {Modal} from "antd";

const explosionProps = {
	force: 0.8,
	duration: 3000,
	particleCount: 450,
	width: 3000,
}

const celebList = ['Gavin Casalegno.webp', 'Gavin Casalegno Diễn viên.jpg', 'hieu-thu-hai.jpg', 'Hyun Bin.jpg', 'isaac.jpg',
	'Joseph Gordon.jpg', 'Justin Bieber.webp', 'Lee Min Ho.jpg', 'Lê Minh.png', 'Lưu Đức Hoa.jpg', 'MCK.webp', 'Mono(1).PNG', 'MTP.webp', 'noo-phuoc-thinh.jpg',
	'Shawn Mendes.webp', 'soobin-hoang-son.jpg', 'Timothée Chalamet.webp', 'V - BTS.webp']

const males = [
	{
		name: 'Nguyen Duy Tien',
		age: 23,
		image: '/a_tien_ns.jpg'
	}, {
		name: 'Nguyen Duy Tien',
		age: 23,
		image: '/a_tien_ns.jpg'
	}, {
		name: 'Nguyen Duy Tien',
		age: 23,
		image: '/a_tien_ns.jpg'
	}, {
		name: 'Nguyen Duy Tien',
		age: 23,
		image: '/a_dung_ns.jpg'
	}, {
		name: 'Nguyen Duy Tien',
		age: 23,
		image: '/a_tien_ns.jpg'
	}, {
		name: 'Nguyen Duy Tien',
		age: 23,
		image: '/a_tien_ns.jpg'
	}, {
		name: 'Nguyen Duy Tien',
		age: 23,
		image: '/a_dung_ns.jpg'
	}, {
		name: 'Nguyen Duy Tien',
		age: 23,
		image: '/a_tien_ns.jpg'
	}, {
		name: 'Nguyen Duy Tien',
		age: 23,
		image: '/a_dung_ns.jpg'
	}, {
		name: 'Nguyen Duy Tien',
		age: 23,
		image: '/a_dung_ns.jpg'
	},
]

export default function SendLove() {
	const [selectedName, setSelectedName] = useState('')
	
	
	return <div className={'sl-wrapper'}>
		<h1>Trao gửi yêu thương</h1>
		<p>Bạn muốn nhận lời chúc từ ai nhỉ?</p>
		<p>Hãy “ấn” vào người mà bạn muốn nhận lời chúc nhé</p>
		<div className={'sl-user-boxes'}>{males.map((item, index) => {
			return <div onClick={() => setTimeout(() => setSelectedName(item.name), 5500)} className={'sl-user-box'}>
				<UserBox
					index={index}
				key={index} name={item.name} age={item.age} image={item.image}/></div>
		})}</div>
		
		{selectedName && <VidLuvModal open={!!selectedName} onClose={() => setSelectedName('')} name={selectedName}/>}
	</div>
}

const UserBox = ({name, image,index}: any) => {
	const [isSelected, setIsSelected] = useState(false)
	const [isClicked, setIsClicked] = useState(false)
	const [contdownSuccess, setCountdownSuccess] = useState(false)
	return < >
		{isSelected
			?
			(
				contdownSuccess ?
					<img
						className={'animate__animated animate__rubberBand'}
						src={image}
						alt=""/>
					:
					<UrgeWithPleasureComponent/>
			)
			:
			<img style={{cursor: "pointer"}}
					 onClick={() => {
						 setIsClicked(true)
						 setIsSelected(true)
						 setTimeout(() => {
							 setCountdownSuccess(true)
							 setTimeout(() => setIsClicked(false), 2500)
							 toast(`Chúc mừng bạn đã nhận được lời chúc từ ${name} iu dấu 🥰!`, {type: "success"})
						 }, 2998)
					 }}
					 src={'/celeb/'+celebList[index]}
					 alt=""
			/>
		}
		{contdownSuccess && isClicked && <ConfettiExplosion {...explosionProps}  />}
	
	</>
}

const VidLuvModal = ({open, onClose, vidUrl, name}: any) => {
	return <Modal centered title={`Lơi chúc từ ${name} iu dấu 🩷`} open={open} onCancel={onClose}>
		<div style={{display: "flex", justifyContent: "center", paddingBottom: 10}}>
			<video autoPlay controls width="300" height="500">
				<source type="video/mp4" src="/vid_love/file_example_MP4_480_1_5MG.mp4"/>
			</video>
		</div>
	</Modal>
}