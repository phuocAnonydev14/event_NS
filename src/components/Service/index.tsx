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
	</div>
}