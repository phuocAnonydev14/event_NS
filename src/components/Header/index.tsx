import './Header.css'
import logo from '../../assets/logo.png';
import { Button, Input } from "antd";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import {useRealtimeDB} from '../../utils/firebase.utils';
import {useDeviceContext} from "../../providers/DeviceProvider.tsx";

export default function Header() {

  const [val, setVal] = useState('')
  const [signedInName, setSignedInName] = useState<string | null>('');
  const {addService} = useRealtimeDB()
  const {deviceId} = useDeviceContext()
  
  const handleSubmitUsername = () => {
    if (!val) return
    localStorage.setItem('username-8/3-ns', val)
    setSignedInName(val)
    addService({name: val},deviceId)
    toast('Tên xink như cậu vậy 🥰')
  }

  useEffect(() => {
    const currentUsername = localStorage.getItem('username-8/3-ns')
    setSignedInName(currentUsername)
  }, []);

  return (
    <div className={'header-container'}>
      <div className={'header-logo'}>
        <img src={logo} className={'logo-image'} alt={'logo'} />
      </div>
      <div className='content-wrapper' style={{ display: 'flex', flexDirection: 'column' }}>
        <div className={'header-content'}>
          <div className={'title'}>
            <span>
              Chúc mừng
            </span>
            <span>
              Ngày quốc tế phụ nữ 8/3
            </span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
          <div className={'des'}>
            Chúc cho các chị em nhà NorthStudio....
          </div>
          <div style={{ marginBottom: "120px", display: "flex", gap: "10px" }}>
            {!signedInName ?
              <>	<Input onChange={(e) => setVal(e.target.value)} placeholder={'Xin hỏi username của cậu...'} className={'email-input'}
                style={{ background: "rgba(0, 0, 0, 0.5)", minWidth: "200px", borderRadius: "12px" }} />
                <Button onClick={handleSubmitUsername} style={{ background: "rgba(255, 255, 255, 1)", color: 'rgba(23, 23, 23, 1)' }} type={'primary'}>Done</Button>
              </>
              :
              <div style={{ color: "#fff", textAlign: "center" }}>
                <h2 >
                  Hi lady <span style={{ fontFamily: "'Roboto', cursive" }}>{signedInName}</span>
                </h2>
                <span onClick={() => {
                  localStorage.removeItem('username-8/3-ns')
                  setSignedInName('')
                }} style={{ textDecoration: "underline", cursor: "pointer", color: 'gray' }}>Use another username 👰‍♀️</span>
              </div>
            }
          </div>
          {/*<button  className={'header-btn'} onClick={handleScroll}>*/}
          {/*	Lướt xuống nào*/}
          {/*</button>*/}
        </div>
      </div>
    </div>
  )
}