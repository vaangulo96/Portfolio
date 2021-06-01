import React,{useEffect,useState}  from 'react';
import * as cn from 'classnames';
import './card.css';


const Card = (props)=>{

	const [pageY,setY] = useState(0);

	const scroll = (e)=>{
		let body = document.querySelector('.App');
		setY(e.pageY);
		return body.removeEventListener('pointermove',scroll);
	}

	useEffect(()=>{
		let body = document.querySelector('.App');
		// eslint-disable-next-line
		let card = document.querySelector('.cardText');
		/*
		if(body.scrollTop >= 250){
			card.classList.replace('-paused','-running');
		}
		*/
		//eslint-disable-next-line
		body.addEventListener('pointermove',scroll);
	},[pageY]);

	

	return(
		<div className = {cn('cardBg')}>
			<p className = {cn('cardText -paused' )}>{pageY}</p>
		</div>
	);
}

export default Card;
