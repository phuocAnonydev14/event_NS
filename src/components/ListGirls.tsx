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
	return (<div style={{marginBlock: "40px"}}>
			<h1 style={{textAlign: "center"}}>My Northstudio's pretty girls</h1>
			{demoList.map((list, index) => <Item images={list.images} aos={index % 2 !== 0 ? 'fade-left' : 'fade-right'}
																					 isReverse={index % 2 !== 0} key={index}/>)}
		
		</div>
	)
}


const Item = ({isReverse, aos, images}: any) => {
	return <div data-aos={aos} style={{marginBlock: "50px"}}>
		<div style={{marginBottom: "20px"}} className={`box girl-item ${isReverse && 'flex-reverse'}`}>
			<div className={'girl-item-img'}>
				<img
					src={'https://images.unsplash.com/photo-1708443683300-fb5e64c59f93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3M3x8fGVufDB8fHx8fA%3D%3D'}/>
			</div>
			<div className={'girl-item-info'} style={{textAlign: isReverse ? "right" : "left", width: "60%"}}>
				<div style={{position: "relative", display: "inline-block"}}>
					<h1 style={{marginBottom: "15px"}}>Ho Huu Phuoc</h1>
					<div style={{position: "absolute", right: -25, top: 35}}>
						<svg width="90" height="21" viewBox="0 0 150 21" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd"
										d="M39.9801 12.1756C33.5358 14.0439 26.0954 15.9033 18.9377 16.3676C12.8199 16.7639 6.9107 16.1484 2.07392 13.5296C1.3921 13.1609 0.538291 13.4144 0.16956 14.0968C-0.199733 14.7786 0.0543289 15.6324 0.736144 16.0017C6.01248 18.8577 12.4461 19.6047 19.1193 19.1719C26.4056 18.6997 33.9804 16.8279 40.554 14.9326C41.3168 16.4778 42.8962 17.9184 45.6786 18.9813C49.9521 20.6142 55.7872 20.5939 61.9342 19.6738C70.8495 18.34 80.4399 15.1591 86.606 12.899C86.8589 12.8068 87.2355 12.6601 87.6964 12.4667C87.837 12.777 87.9943 13.0828 88.1686 13.3829C89.6806 15.9989 92.3562 18.114 95.0823 18.8695C112.372 23.6596 132.551 17.9201 148.981 13.2491C149.723 13.0372 150.156 12.2593 149.948 11.5134C149.734 10.7675 148.959 10.3342 148.211 10.5461C132.242 15.0866 112.636 20.8154 95.8299 16.1607C93.7614 15.5874 91.7491 13.9619 90.6024 11.9766C90.4732 11.7551 90.3607 11.5286 90.254 11.2987C92.5192 10.1762 95.1835 8.61135 96.6168 6.93632C98.0895 5.21914 98.4548 3.38617 97.1733 1.65493C96.0716 0.174949 94.4022 0.0490389 92.6653 0.816291C90.7935 1.63807 88.8656 3.55926 88.2417 4.46085C87.0725 6.14487 86.7015 7.97168 86.9151 9.75295C86.3643 9.98565 85.9169 10.1588 85.6409 10.2599C79.6097 12.4701 70.2357 15.5897 61.5183 16.8943C55.9092 17.7341 50.5811 17.8459 46.6813 16.3564C45.0181 15.7206 43.9192 14.9787 43.3228 14.1176C44.4998 13.7657 45.6347 13.4195 46.719 13.0889C48.8634 12.4352 53.328 11.3532 56.5179 9.42469C59.0546 7.89131 60.7746 5.8054 60.6746 3.19056C60.6234 1.84716 59.846 0.950614 58.6089 0.448106C56.7602 -0.302284 53.563 0.0608186 52.3725 0.313759C48.7616 1.07932 43.9423 4.2484 41.5579 7.81936C40.6063 9.24425 40.0403 10.7349 39.9801 12.1756ZM42.9462 11.2976C43.9664 10.9907 44.9524 10.6894 45.8995 10.4005C47.9011 9.79003 52.0852 8.82042 55.0638 7.01948C56.641 6.06618 57.9287 4.92403 57.8664 3.2979C57.8613 3.17143 57.7359 3.13547 57.6252 3.08376C57.4538 3.0045 57.2576 2.94997 57.0485 2.90725C55.6337 2.61833 53.7333 2.89768 52.9554 3.06293C49.9257 3.7054 45.8955 6.38377 43.895 9.38027C43.4724 10.0132 43.1357 10.6579 42.9462 11.2976ZM89.6919 8.45901C91.0128 7.77945 92.3955 6.95766 93.486 6.06337C94.0649 5.58841 94.5539 5.09997 94.8631 4.59297C95.1217 4.17365 95.2228 3.74419 94.9137 3.32936C94.79 3.1613 94.6045 3.15795 94.4134 3.18942C94.2111 3.22315 94.0031 3.29508 93.7951 3.38782C92.4236 3.99151 91.0072 5.4018 90.5519 6.06337C90.0179 6.83063 89.7537 7.6423 89.6919 8.45901Z"
										fill="red"/>
						</svg>
					
					</div>
				</div>
				<p style={{fontSize: "18px"}}>Destructuring is a technique that allows you to unpack values from arrays or
					objects into separate variables.
					This process involves breaking down complex data structures into simpler parts, making it easier to work with
					them.</p>
			</div>
		</div>
		{/*<div style={{display:"flex",gap:"30px",direction:isReverse ? "rtl" : 'ltr',marginInline:"50px"}}>*/}
		{/*	{images.map(item => <img style={{width:"160px",borderRadius:"8px",objectFit:"cover"}} src={item} alt=""/>)}*/}
		{/*</div>*/}
	</div>
}