import {Modal, Table} from "antd";
import {useEffect, useState} from "react";
import {useRealtimeDB} from "../utils/firebase.utils.ts";

export const OrderedListModal = ({open, onClose}: any) => {
	const [orderList,setOrderList] = useState<any[]>([])
	const {getAllService} = useRealtimeDB()
	
	useEffect(() => {
		const fetchServices = async () => {
			const res = await getAllService()
			const formattedResponse = Object.values(res).map((item: any) => ({
			name: item.value.name,
			water: item.value.order,
				service: item.value.service.name,
				userAction: item.value.service.userAction
			}))
			setOrderList(formattedResponse)
		}
		fetchServices().finally()
	}, []);
	
	return <Modal width={800} open={open} onCancel={onClose} title="Ordered List" onOk={onClose}>
	<div>
		<Table
		columns={[
			{
				title:"Tên",
				key:'name',
				dataIndex:'name'
			},{
			title: "Nước",
				key: "water",
				dataIndex:"water"
			},{
			title: "Dịch vụ",
				key: "service",
				dataIndex: "service"
			},{
			title: "người thực hiện",
				key:"action",
				dataIndex:'userAction'
			}
		]}
		dataSource={orderList}
		/>
	</div>
	</Modal>
}