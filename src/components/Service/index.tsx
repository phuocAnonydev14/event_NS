import './Service.css'


const menus = [{
	name:'Tẩm quất',
	image:'/gift.jpg',
},{
	name: 'Mát xa',
	image:'/gift.jpg',
},{
	image:'/gift.jpg',
	name: 'Đưa đi đón về',
},{
	image:'/gift.jpg',
	name: 'Seo phi'
}
]

export const ServiceOrder = ({setSelectedService,selectedService}:any) => {
	
  return <div style={{textAlign:"center",marginBlock:100}}>
		<h4>Xin mời lady order nước</h4>
		<h1 style={{marginBottom:"40px"}}>NS 6 packs boy service 💪</h1>
		
		<div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:50}}>
			{menus.map(({name,image},index) => <div onClick={() => {
				setSelectedService(name)
			}} className={`card ${selectedService === name && 'card-selected'}`} style={{width:"20%"}}>
				<img style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"8px"}} src={image} alt=""/>
				<p>{name}</p>
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
	</div>
}