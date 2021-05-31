import React,{useEffect,useState} from 'react';
import throttle from '../tools/throttle.js';
import './backUp.css';
import * as cn from 'classnames';


export default function  BackUp (){
	const [lastPos, setPos] = useState(0);
	const [isHidden,setHidden] = useState(true);
	const [lastScroll, setScroll] = useState(0);

	const debounce = (func,e) =>{
		let pos = window.scrollY;
		let deltY = pos - lastPos;
		if ((lastScroll > 0 && deltY < 0) || (lastScroll < 0 && deltY > 0)){
			return func;
		}else{
			return ()=>{};
		}
	}
	const handleScroll = (e) => {
		let pos = window.scrollY;
		let Btn = document.getElementsByClassName('backUp')[0];
		let deltY = pos - lastPos;
		if((lastScroll >= 0 && deltY <= 0) || (lastScroll <= 0 && deltY >= 0)){
		   if (Math.abs(deltY)>150 && deltY>0 && !isHidden){
			//slide in//
			Btn.classList.replace('slide-out','slide-in');
			Btn.classList.replace('out','hidden');
			setHidden(true);
		   }else if (Math.abs(deltY)>150 && deltY<0 && isHidden){
			//slide out//
			Btn.classList.contains('slide-in')?Btn.classList.replace('slide-in','slide-out'):Btn.classList.add('slide-out');
			Btn.classList.replace('hidden','out');
			setHidden(false)
		   }
		}
		setScroll(deltY);
		setPos(pos);
	}

	useEffect(()=>{
		window.addEventListener("scroll",handleScroll);
	},[lastPos]);

	return(
		<button className = {cn('upArrow','backUp','__lb__hl','hidden')}>
		<a className = {cn('arrowLink')} href='#top'>•</a>
		</button>

	);
}

