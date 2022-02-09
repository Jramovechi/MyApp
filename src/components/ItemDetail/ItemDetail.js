import * as React from 'react';
import "./ItemDetail.css";

import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const ItemDetail = ({ data }) => {
	return (
		<Card sx={{ maxWidth: 345 }} style={{ margin: 40, minWidth: 800 }}>
			<CardMedia className='ItemSrc' component='iframe' src='https://www.youtube.com/embed/NS71ppsk7n0?rel=0' alt=''/>
			<CardContent>
				<Typography gutterBottom variant='h2' component='div'>
					{data.title}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{data.explanation}
				</Typography>
				<Typography variant='h4' color='text.primary'>
					{data.date}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default ItemDetail; 