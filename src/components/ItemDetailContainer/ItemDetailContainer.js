import "./ItemDetailContainer.css"
import React, { useEffect, useState } from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
	const [data, setData] = useState({});

	useEffect(() => {
		fetch(
		'https://api.nasa.gov/planetary/apod?api_key=MxpzGTNXAXzfhmNvNALkbIVNFaS4owZ4r2zr6JDR'
		)
		.then((response) => response.json())
		.then((json) => setData(json));
		
	}, []);

	return (
		<div className='ItemDetailContainer'>
			<ItemDetail data= {data} />
		</div>
	);
};

export default ItemDetailContainer;