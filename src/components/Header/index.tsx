import './Header.css'
import logo from '../../assets/logo.png';

export default function Header() {
  const handleScroll = () => {
    document.getElementById('gallery')?.scrollIntoView({
      behavior: 'smooth'
    });
  }
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
          <button className={'header-btn'} onClick={handleScroll}>
            Lướt xuống nào
          </button>
        </div>
      </div>
    </div>
  )
}