import "./SendLove.css"
import {useState} from "react";
import ConfettiExplosion from "react-confetti-explosion";
import {toast} from "react-toastify";
const explosionProps = {
	force: 0.8,
	duration: 3000,
	particleCount: 250,
	width: 1600,
}

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
	},{
		name: 'Nguyen Duy Tien',
		age: 23,
		image: '/a_dung_ns.jpg'
	},{
		name: 'Nguyen Duy Tien',
		age: 23,
		image: '/a_tien_ns.jpg'
	},{
		name: 'Nguyen Duy Tien',
		age: 23,
		image: '/a_dung_ns.jpg'
	},{
		name: 'Nguyen Duy Tien',
		age: 23,
		image: '/a_dung_ns.jpg'
	},
]

export default function SendLove() {
	const [isClicked, setIsClicked] = useState(false)
	
	
	return <div className={'sl-wrapper'}>
		{isClicked && <ConfettiExplosion {...explosionProps}  />}
		<h1>Trao gửi yêu thương</h1>
		<p>Bạn muốn nhận lời chúc từ ai nhỉ?</p>
		<p>Hãy “ấn” vào người mà bạn muốn nhận lời chúc nhé</p>
		<div className={'sl-user-boxes'}>{males.map((item,index) => {
			return <UserBox key={index} name={item.name} age={item.age} image={item.image} setIsClicked={setIsClicked}/>
		})}</div>
	</div>
}

const UserBox = ({name, age, image,setIsClicked}: any) => {
		const [isSelected,setIsSelected] = useState(false)
	
	return <div className={'sl-user-box'}>
			{isSelected
			?
			<img
				className={'animate__animated animate__rubberBand'}
				src={image}
				alt=""/>
			:
				<img style={{cursor:"pointer"}}
					onClick={() => {
						console.log("clicked")
						toast(`Chúc mừng bạn đã nhận được lời chúc từ ${name} iu dấu 🥰!`,{type:"success"})
						setIsClicked(true)
						setIsSelected(true)
						setTimeout(() => setIsClicked(false),3000)
					}}
					 src="data:image/jpeg;base64,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"
					 alt=""
				/>
			}
		</div>
}