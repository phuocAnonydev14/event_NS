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
		image:'/avatar/Nhân.jpg',
		name: 'Nguyễn Anh Nhân'
	}, {
		image:'/avatar/LXNgoc.JPG',
		name: 'Lê Xuân Ngọc'
	}, {
		image:'/avatar/tien.jpg',
		name: 'Nguyễn Duy Tiến'
	}, {
		image:'/avatar/ngoc.jpg',
		name: 'Phạm Đức Ngọc'
	}, {
		image:'/avatar/CA.PNG',
		name: 'Cao Thế Anh'
	}, {
		image:'/avatar/quyet.JPG',
		name: 'Nguyễn Văn Quyết'
	}, {
		image:'/avatar/Dũng.jpg',
		name: 'Hoàng Ngọc Dũng'
	}, {
		image:'/avatar/hieu.JPG',
		name: 'Phan Anh Hiếu'
	}, {
		image:'/avatar/mduc.HEIC',
		name: 'Nguyễn Minh Đức'
	}, {
		image:'/avatar/phuoc.JPG',
		name: 'Hồ Hữu Phước'
	}, {
		image:'/avatar/manhtuan.jpg',
		name: 'Nguyễn Mạnh Tuấn'
	}, {
		image:'/avatar/tam.JPG',
		name: 'Nguyễn Hữu Tâm'
	},
	{
		image:'/avatar/tin.JPG',
		name: 'Nguyễn Phú Tín'
	}, {
		image:'/avatar/tuananh.jpg',
		name: 'Nguyễn Tuấn Anh'
	},
	{
		image:'/avatar/quaan hoang.JPG',
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