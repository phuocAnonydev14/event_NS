import "./ListGirl.css"

const demoList =
	[
		{
			"title": "Item 1",
			"description": "lorem skajdjasdsajksahdsahjksahjsa sa jsa hjksahdjksajksahdjksahjksah",
			images: ['https://images.unsplash.com/photo-1709038459415-8379ce8ae789?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
				'https://images.unsplash.com/photo-1709038459415-8379ce8ae789?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
				'https://images.unsplash.com/photo-1709038459415-8379ce8ae789?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
				'https://images.unsplash.com/photo-1709038459415-8379ce8ae789?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
			]
		},
		{
			"title": "Item 2",
			"description": "lorem skajdjasdsajksahdsahjksahjsa sa jsa hjksahdjksajksahdjksahjksah",
			images: ['https://images.unsplash.com/photo-1709038459415-8379ce8ae789?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
				'https://images.unsplash.com/photo-1709038459415-8379ce8ae789?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
				'https://images.unsplash.com/photo-1709038459415-8379ce8ae789?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
				'https://images.unsplash.com/photo-1709038459415-8379ce8ae789?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
			],
		},
		{
			"title": "Item 3",
			"description": "lorem skajdjasdsajksahdsahjksahjsa sa jsa hjksahdjksajksahdjksahjksah",
			images: ['https://images.unsplash.com/photo-1709038459415-8379ce8ae789?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
				'https://images.unsplash.com/photo-1709038459415-8379ce8ae789?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
				'https://images.unsplash.com/photo-1709038459415-8379ce8ae789?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
				'https://images.unsplash.com/photo-1709038459415-8379ce8ae789?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
			],
		},
		{
			"title": "Item 4",
			"description": "lorem skajdjasdsajksahdsahjksahjsa sa jsa hjksahdjksajksahdjksahjksah",
			images: ['https://images.unsplash.com/photo-1709038459415-8379ce8ae789?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
				'https://images.unsplash.com/photo-1709038459415-8379ce8ae789?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
				'https://images.unsplash.com/photo-1709038459415-8379ce8ae789?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
				'https://images.unsplash.com/photo-1709038459415-8379ce8ae789?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
			],
		},
		{
			"title": "Item 4",
			"description": "lorem skajdjasdsajksahdsahjksahjsa sa jsa hjksahdjksajksahdjksahjksah",
			images: ['https://images.unsplash.com/photo-1709038459415-8379ce8ae789?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
				'https://images.unsplash.com/photo-1709038459415-8379ce8ae789?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
				'https://images.unsplash.com/photo-1709038459415-8379ce8ae789?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
				'https://images.unsplash.com/photo-1709038459415-8379ce8ae789?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
			],
		},
		{
			"title": "Item 4",
			images: ['https://images.unsplash.com/photo-1709038459415-8379ce8ae789?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
				'https://images.unsplash.com/photo-1709038459415-8379ce8ae789?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
				'https://images.unsplash.com/photo-1709038459415-8379ce8ae789?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
				'https://images.unsplash.com/photo-1709038459415-8379ce8ae789?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
			],
			"description": "lorem skajdjasdsajksahdsahjksahjsa sa jsa hjksahdjksajksahdjksahjksah",
		},
		{
			"title": "Item 4",
			"description": "lorem skajdjasdsajksahdsahjksahjsa sa jsa hjksahdjksajksahdjksahjksah",
			images: ['https://images.unsplash.com/photo-1709038459415-8379ce8ae789?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
				'https://images.unsplash.com/photo-1709038459415-8379ce8ae789?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
				'https://images.unsplash.com/photo-1709038459415-8379ce8ae789?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
				'https://images.unsplash.com/photo-1709038459415-8379ce8ae789?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
			],
		}
	]

export default function ListGirl() {
	return (<div style={{marginBlock:"40px"}}>
			{demoList.map((list,index) => <Item images={list.images} aos={index % 2 !== 0 ? 'fade-left' : 'fade-right'} isReverse={index % 2 !== 0} key={index}/>)}
		
		</div>
	)
}


const Item = ({isReverse,aos,images}:any) => {
	return <div data-aos={aos} style={{marginBlock:"50px"}}>
		<div style={{marginBottom:"20px"}}  className={`box girl-item ${isReverse && 'flex-reverse'}`}>
			<div className={'girl-item-img'}>
				<img
					src={'https://images.unsplash.com/photo-1708443683300-fb5e64c59f93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3M3x8fGVufDB8fHx8fA%3D%3D'}/>
			</div>
			<div className={'girl-item-info'} style={{textAlign:isReverse ? "right" : "left",width:"60%"}}>
				<h1>Ho Huu Phuoc</h1>
				<p>Destructuring is a technique that allows you to unpack values from arrays or objects into separate variables.
					This process involves breaking down complex data structures into simpler parts, making it easier to work with
					them.</p>
			</div>
		</div>
		<div style={{display:"flex",gap:"30px",direction:isReverse ? "rtl" : 'ltr',marginInline:"50px"}}>
			{images.map(item => <img style={{width:"160px",borderRadius:"8px",objectFit:"cover"}} src={item} alt=""/>)}
		</div>
	</div>
}