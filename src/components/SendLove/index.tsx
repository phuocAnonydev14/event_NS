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

const man = [
	{
		image: '/avatar/Nhân.jpg',
		name: 'Nguyễn Anh Nhân',
	}, {
		image: '/avatar/LXNgoc.JPG',
		name: 'Lê Xuân Ngọc',
		vid: '/vid_love/Lê Xuân Ngọc.MOV'
	}, {
		image: '/avatar/tien.jpg',
		name: 'Nguyễn Duy Tiến'
	}, {
		image: '/avatar/ngoc.jpg',
		name: 'Phạm Đức Ngọc'
	}, {
		image: '/avatar/CA.PNG',
		name: 'Cao Thế Anh'
	}, {
		image: '/avatar/quyet.JPG',
		name: 'Nguyễn Văn Quyết'
	}, {
		image: '/avatar/Dũng.jpg',
		name: 'Hoàng Ngọc Dũng'
	}, {
		image: '/avatar/hieu.JPG',
		name: 'Phan Anh Hiếu'
	}, {
		image: '/avatar/mduc.HEIC',
		name: 'Nguyễn Minh Đức'
	}, {
		image: '/avatar/phuoc.JPG',
		name: 'Hồ Hữu Phước'
	}, {
		image: '/avatar/manhtuan.jpg',
		name: 'Nguyễn Mạnh Tuấn'
	}, {
		image: '/avatar/tam.JPG',
		name: 'Nguyễn Hữu Tâm'
	},
	{
		image: '/avatar/tin.JPG',
		name: 'Nguyễn Phú Tín'
	}, {
		image: '/avatar/tuananh.jpg',
		name: 'Nguyễn Tuấn Anh'
	},
	{
		image: '/avatar/quaan hoang.JPG',
		name: 'Quân Hoàng'
	}
]

export default function SendLove() {
	const [selectedUser, setSelectedUser] = useState<any>(null)
	const [isCurrentSelected, setIsCurrentSelected] = useState(false)
	
	return <div className={'sl-wrapper'}>
		<h1>Trao gửi yêu thương</h1>
		<p>Bạn muốn nhận lời chúc từ ai nhỉ?</p>
		<p>Hãy “ấn” vào người mà bạn muốn nhận lời chúc nhé</p>
		<div className={'sl-user-boxes'}>{man.map((item, index) => {
			return <div onClick={() => {
				setIsCurrentSelected(true)
				setTimeout(() => {
					setIsCurrentSelected(false)
					setSelectedUser(item)
				}, 5500)
			}} className={'sl-user-box'}>
				<UserBox
					isCurrentSelected={isCurrentSelected}
					index={index}
					key={index} name={item.name} age={2} image={item.image}/></div>
		})}</div>
		
		{selectedUser && <VidLuvModal vid={selectedUser?.vid} open={!!selectedUser} onClose={() => setSelectedUser(null)} name={selectedUser.name}/>}
	</div>
}

const UserBox = ({name, image, index, isCurrentSelected}: any) => {
	const [isSelected, setIsSelected] = useState(false)
	const [isClicked, setIsClicked] = useState(false)
	const [contdownSuccess, setCountdownSuccess] = useState(false)
	return < >
		{isSelected
			?
			(
				contdownSuccess ?
					<img
						// className={'animate__animated animate__rubberBand'}
						 className={'animate__animated animate__rubberBand animate__wobble'}
						
						src={image}
						alt=""/>
					:
					<UrgeWithPleasureComponent/>
			)
			:
			<img style={{cursor: "pointer"}}
					 onClick={() => {
						 if (isCurrentSelected) return
						 setIsClicked(true)
						 setIsSelected(true)
						 setTimeout(() => {
							 setCountdownSuccess(true)
							 setTimeout(() => setIsClicked(false), 2500)
							 toast(`Chúc mừng bạn đã nhận được lời chúc từ ${name} iu dấu 🥰!`, {type: "success"})
						 }, 2998)
					 }}
					 src={'/celeb/' + celebList[index]}
					 alt=""
			/>
		}
		{contdownSuccess && isClicked && <ConfettiExplosion {...explosionProps}  />}
	
	</>
}

const VidLuvModal = ({open, onClose, vid, name}: any) => {
	return <Modal centered title={`Lơi chúc từ ${name} iu dấu 🩷`} open={open} onCancel={onClose}>
		<div style={{display: "flex", justifyContent: "center", paddingBottom: 10}}>
			<video autoPlay controls width="300" height="500">
				<source type="video/mp4" src={vid || "/vid_love/file_example_MP4_480_1_5MG.mp4"}/>
			</video>
		</div>
	</Modal>
}