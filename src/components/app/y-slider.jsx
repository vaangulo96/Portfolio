import React,{useState} from 'react'
import Menu from './menu';
import '../../utils/flex.css';
import '../../utils/colors.css';
import {animate,arc,linear} from '../../utils/helpers.js';
import './y-slider.css';
import * as cn from 'classnames';


function Yslider (){
	const [position,setPosition] = useState(0);
	const[initY,setY] = useState(0);
	const[initTime,setTime] = useState(0);
	const[lock,setLock] = useState(true);

	const slideUp = (el,dyP,offs,dTL) => {                        el.style.top = (dTL - (dyP*dTL))-offs+'vh';                                                         }

	const handleTouchStart = (e) => {
	        document.querySelector('html').classList.toggle('locked');
                document.querySelector('body').classList.toggle('locked');
		setY(e.targetTouches[0].clientY/10.64);
		setTime(performance.now());
		setLock(true);
	}

	const handleTouchMove = (e)=> {
		let [menuBdy,menuBtn] = document.getElementsByClassName("Ymenu");
		let tL = e.targetTouches[0].clientY/10.64;/*magic # to convert into vh units*/
		let currentTime = performance.now();
		setPosition(tL);
		if (tL <30) {
		    menuBdy.style.top = tL-65+'vh';
		    menuBtn.style.top = tL+'vh';
		    setLock(false);
		}else if (((initY - tL)> 7.5) && (Math.abs(initTime-currentTime) < 250)){
		    setLock(true);
		    animate({
			    el:[menuBdy,menuBtn] ,
			    offsets: [75,5],
			    dynamTouch: position,
			    draw: slideUp,
			    timing:arc,
			    duration: 1000

		    });
		}

	}

	const handleTouchEnd = (e) =>{
		let [menuBdy,menuBtn] = document.getElementsByClassName("Ymenu");

		const slideDown = (el,dyP,offs,dTL) =>{                                                                             el.style.top = dTL + (dyP*(75-dTL))-offs+'vh';
		}

		document.querySelector('html').classList.toggle('locked');
		document.querySelector('body').classList.toggle('locked');
		if (position  < 20){
		  setLock(true);
		  animate({
			  el:[menuBdy,menuBtn],
			  offsets:[75,10],
			  dynamTouch: position,
			  timing:arc,
			  draw:slideUp,
			  duration:1000
		  });

		}else if (lock === false && position > 20 ){
		  animate({                         
			  el: [menuBdy,menuBtn],  
			  offsets: [75,5],           
			  dynamTouch: position,      
			  timing:linear, 
			  draw: slideDown,         
			  duration: 1000             
		  });
		  setLock(true);
		}
	}


	return(
	  <div>
              <div className = {cn("menu_cont","flx_col","__center")}>
                <div
                  className = {cn("Ymenu","Ymenu_body","__gr")}
                >
                    <Menu />
                </div>

                <div
                  className = {cn("Ymenu","dragger","_sq__15","__rot45","__lb__hl")}
                  draggable
		  onTouchStart = {(e) => handleTouchStart(e)}
                  onTouchMove = {(e) => handleTouchMove(e)}
		  onTouchEnd = {(e) => handleTouchEnd(e)}
                >
                </div>
              </div>
	  </div>
            );
}

export default Yslider;
