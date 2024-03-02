import './Header.css'
import logo from '../../assets/logo.png';
import {Button, Input} from "antd";
import {toast} from "react-toastify";
import {useEffect, useState} from "react";

export default function Header() {
	
	const [val,setVal] = useState('')
	const [signedInName,setSignedInName] = useState<string | null>('')
	
	const handleScroll = () => {
		document.getElementById('gallery')?.scrollIntoView({
			behavior: 'smooth'
		});
	}
	
	const handleSubmitUsername = () => {
		localStorage.setItem('username-8/3-ns',val)
		toast('Tên xink như cậu vậy 🥰')
	}
	
	useEffect(() => {
		const currentUsername = localStorage.getItem('username-8/3-ns')
		setSignedInName(currentUsername)
	}, []);
	
	return (
		<div className={'header-container'}>
			<div className={'header-logo'}>
				<img src={logo} className={'logo-image'} alt={'logo'}/>
			</div>
			<div className='content-wrapper' style={{display: 'flex', flexDirection: 'column'}}>
				<div className={'header-content'}>
					<div className={'title'}>
            <span>
              Chúc mừng
            </span>
						<span>
              ngày quốc tế phụ nữ 8/3
            </span>
					</div>
				</div>
				<div style={{display: "flex", flexDirection: 'column', alignItems: 'center'}}>
					<div className={'des'}>
						Chúc cho các chị em nhà NorthStudio....
					</div>
					<div style={{marginBottom:"120px",display:"flex",gap:"10px"}}>
						{!signedInName ?
						<>	<Input onChange={(e) => setVal(e.target.value)} placeholder={'Xin hỏi username của cậu...'} className={'email-input'}
										 style={{background: "rgba(199,200,204,0.71)",minWidth:"200px"}}/>
							{val && <Button onClick={handleSubmitUsername} style={{background:"#DC84F3"}} type={'primary'}>Done</Button>}
						</>
						:
							<div style={{color:"#fff"}}>
							<h2 >
								Hello ladies <span style={{fontFamily:"'Roboto', cursive",fontSize:"35px"}}>{signedInName}</span>
							</h2>
								<span onClick={() => {
									localStorage.removeItem('username-8/3-ns')
									setSignedInName('')
								}} style={{textDecoration:"underline",cursor:"pointer",color:"#6895D2"}}>Use another username 👰‍♀️</span>
							</div>
						}
					</div>
					<button  className={'header-btn'} onClick={handleScroll}>
						Lướt xuống nào
					</button>
				</div>
			</div>
		</div>
	)
}