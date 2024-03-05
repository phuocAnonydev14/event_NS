
import './ChatBox.css'
import {faMinus, faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useChatContext} from "../../providers/ChatProvider.tsx";
import {Button, Input} from "antd";
import {useEffect, useRef, useState} from "react";
import {toast} from "react-toastify";
import {useMessaging} from "../../utils/firebase.utils.ts";
import moment from "moment";
import {useDeviceContext} from "../../providers/DeviceProvider.tsx";
// @ts-ignore
import ScrollToBottom from 'react-scroll-to-bottom';

export default function ChatBox() {
	
	
	const {chatList} = useChatContext()
	const chatRef = useRef<any>(null)
	const [chatVal,setChatVal] = useState('')
	const {sendNotification} = useMessaging()
	const [currentAccount,setCurrentAccount] = useState<string | null>('');
	const {deviceId} = useDeviceContext()
	const contentRef = useRef<HTMLDivElement>(null)
	
	const handleSendMessage = () => {
		const name = localStorage.getItem('username-8/3-ns')
		if(!name) {
			toast.error("Vui lòng nhập tên trước khi chat")
			return
		}
		const payload = {
			name,
			type: 'chat',
			content:  chatVal
		} as const
		setChatVal('')
		sendNotification(payload)
	}
	
	useEffect(() => {
		const name = localStorage.getItem('username-8/3-ns')
		setCurrentAccount(name)
	}, [deviceId]);
	
	useEffect(() => {
		const scrollToBottom = () => {
			contentRef?.current?.scrollIntoView({ behavior: 'smooth' });
		};
		
		scrollToBottom()
	}, [chatList]);
	
	console.log(chatList)
	
	
	return <div style={{position:"fixed",right:"20px",top:"34dvh",height:"max-content",backgroundColor:"#fff",display:"inline-block"}}>
		<div className='chatBox' style={{width:"350px",minHeight:"450px"}}>
			<div className="header" style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px",backgroundColor:"#9195F6"}}>
				<h3>Chat box</h3>
				<div>
					<FontAwesomeIcon style={{cursor:"pointer"}} icon={faMinus} />
				</div>
			</div>
		<ScrollToBottom  ref={contentRef} className={'chatContent'}>
			{chatList?.map(({name,content,time}: any) => {
				return <div className={`chatItem ${name === currentAccount && 'right-dir'}`} key={time}>
					<h3 style={{marginBottom:"5px"}}>{name} <span style={{fontSize:"12px",color:"gray"}}>{moment(time).fromNow()}</span></h3>
					<p style={{padding:"5px 14px",borderRadius:"40px",backgroundColor:"#98ABEE",width:"max-content"}}>{content}</p>
				</div>
			})}
		</ScrollToBottom>
		<div className={"chatFooter"}>
			<Input onPressEnter={handleSendMessage} value={chatVal} onChange={(e) => setChatVal(e.target.value)} ref={chatRef}/>
			<Button onClick={handleSendMessage} type={"text"} icon={<FontAwesomeIcon icon={faPaperPlane} />}></Button>
		</div>
		</div>
	</div>
}