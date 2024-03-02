import { useState } from 'react'
import './Service.css'
import { Avatar, Button, Flex, Modal, Select, Tooltip, Typography } from 'antd';
import { toast } from 'react-toastify';


const menus = [{
	name: 'Tẩm quất',
	image: '/gift.jpg',
}, {
	name: 'Mát xa',
	image: '/gift.jpg',
}, {
	image: '/gift.jpg',
	name: 'Đưa đi đón về',
}, {
	image: '/gift.jpg',
	name: 'Seo phi'
}
]
const man = [
	{
		image:'../../../public/avatar/Nhân.jpg', 
		name: 'Nguyễn Anh Nhân'
	}, {
		image:'../../../public/avatar/LXNgoc.JPG', 
		name: 'Lê Xuân Ngọc'
	}, {
		image:'../../../public/avatar/tien.jpg', 
		name: 'Nguyễn Duy Tiến'
	}, {
		image:'../../../public/avatar/ngoc.jpg', 
		name: 'Phạm Đức Ngọc'
	}, {
		image:'../../../public/avatar/CA.PNG', 
		name: 'Cao Thế Anh'
	}, {
		image:'../../../public/avatar/quyet.JPG', 
		name: 'Nguyễn Văn Quyết'
	}, {
		image:'../../../public/avatar/Dũng.jpg', 
		name: 'Hoàng Ngọc Dũng'
	}, {
		image:'../../../public/avatar/hieu.JPG', 
		name: 'Phan Anh Hiếu'
	}, {
		image:'../../../public/avatar/mduc.HEIC', 
		name: 'Nguyễn Minh Đức'
	}, {
		image:'../../../public/avatar/phuoc.JPG', 
		name: 'Hồ Hữu Phước'
	}, {
		image:'../../../public/avatar/manhtuan.jpg', 
		name: 'Nguyễn Mạnh Tuấn'
	}, {
		image:'../../../public/avatar/tam.JPG', 
		name: 'Nguyễn Hữu Tâm'
	},
	{
		image:'../../../public/avatar/tien.jpg', 
		name: 'Nguyễn Phú Tín'
	}, {
		image:'../../../public/avatar/tuananh.jpg', 
		name: 'Nguyễn Tuấn Anh'
	},
	{
		image:'../../../public/avatar/quaan hoang.JPG', 
		name: 'Quân Hoàng'
	}
]
// const man = [
// 	'Nguyễn Anh Nhân',
// 	'Lê Xuân Ngọc',
// 	'Nguyễn Duy Tiến',
// 	'Phạm Đức Ngọc',
// 	'Cao Thế Anh',
// 	'Nguyễn Văn Quyết',
// 	'Hoàng Ngọc Dũng',
// 	'Phan Anh Hiếu',
// 	'Nguyễn Minh Đức',
// 	'Nguyễn Văn Đức',
// 	'Hồ Hữu Phước',
// 	'Nguyễn Mạnh Tuấn',
// 	'Nguyễn Hữu Tâm',
// 	'Nguyễn Phú Tín',
// ]

export const ServiceOrder = ({ setSelectedService, selectedService }: any) => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [selectedMan, setSelectedMan] = useState('')
	const handleOpenModal = () => {
		setIsOpenModal(true);
	}

	return <div style={{ textAlign: "center", marginBlock: 100 }}>
		<h4>Xin mời lady order nước</h4>
		<h1 style={{ marginBottom: "40px" }}>NS 6 packs boy service 💪</h1>

		<div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 50, marginBottom: 20 }}>
			{menus.map(({ name, image }, index) => <div onClick={() => {
				handleOpenModal();
				setSelectedService(name)
			}} className={`card ${selectedService === name && 'card-selected'}`} style={{ width: "20%" }}>
				<img style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }} src={image} alt="" />
			</div>)}
		</div>

		<div className="flip-card">
			<div className="flip-card-inner">
				<div className="flip-card-front">
					<p className="heading_8264">MASTERCARD</p>
					<svg className="logo" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0 0 48 48">
						<path fill="#ff9800" d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"></path><path fill="#d50000" d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"></path><path fill="#ff3d00" d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"></path>
					</svg>
					<p className="number">9759 2484 5269 6576</p>
					<p className="valid_thru">VALID THRU</p>
					<p className="date_8264">1 2 / 2 4</p>
					<p className="name">BRUCE WAYNE</p>
				</div>
				<div className="flip-card-back">
					<div className="strip"></div>
					<div className="mstrip"></div>
					<div className="sstrip">
						<p className="code">***</p>
					</div>
				</div>
			</div>
		</div>
		<Modal
			open={isOpenModal}
			footer={null}
			onCancel={() => setIsOpenModal(false)}
			centered
			closable={false}
		// cancelButtonProps={false}
		>
			<Typography.Title level={3} style={{ margin: '0 auto', textAlign: 'center' }}>{selectedService}</Typography.Title>
			<div style={{ margin: '20px 0' }}>
				<p style={{ textAlign: 'center', marginBottom: 20 }}>Bạn muốn ai sẽ thực hiện dịch vụ này</p>
				<Flex align='center' justify='center' style={{ flexWrap: 'wrap', gap: 20 }}>
					{
						man.map((item) => (
							<Tooltip title={item.name}>
								<Avatar
									onClick={() => setSelectedMan(item.name)}
									className={`avatar ${selectedMan === item.name && 'man-select'}`}
									style={{
										width: 100,
										height: 100,
										borderRadius: "100%"
									}}
									src={item.image}
									alt={item.name}
								/>
							</Tooltip>
						))
					}
				</Flex>
			</div>
			<div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
				<Button
					onClick={() => setIsOpenModal(false)}
				>
					Hủy
				</Button>
				<Button
					type='primary'
					onClick={() => {
						setIsOpenModal(false);
						toast(`${selectedMan} sẽ thực hiện dịch vụ ${selectedService} cho bạn`, { type: 'success' });
					}}
				>
					Lưu
				</Button>
			</div>
		</Modal>
	</div>
}