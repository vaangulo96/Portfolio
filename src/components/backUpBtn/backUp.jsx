import React,{useEffect,useState} from 'react';
import throttle from '../tools/throttle.js';
import colors from '../../utils/colors.css';
import './backUp.css';
import * as cn from 'classnames';


export default function  BackUp (){
	//const [pos, setPos] = useState();
	const [isFresh, setBool] = useState(true);
	
	const handleScroll = (e) => {
		let lastPos = window.scrollY;
		let Btn = document.getElementsByClassName('backUp')[0];
		if ((window.scrollY - lastPos)>0 && !isFresh){
			//slide in//
			Btn.classList.replace('slide-out','slide-in');
		}else if ((window.scrollY- lastPos)<0){
			//slide out//
			let replaced = '';
			if(!isFresh){
				replaced = 'slide-in';
			}else if(isFresh){
				replaced = 'hidden';
				setBool(false);
			}
			Btn.classList.replace(replaced,'slide-out');
		}
		lastPos = window.scrollY;
	}

	useEffect(()=>{
		window.addEventListener("scroll",handleScroll)
	});

	return(
		<button className = {cn('upArrow','backUp','__lb__hl','hidden')}>
		<a className = {cn('arrowLink')} href='#top'>•</a>
		</button>

	);
}

