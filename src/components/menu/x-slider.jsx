import React,{useState,useEffect} from 'react';                  
import Menu from './menu'
import '../../utils/flex.css';
import '../../utils/colors.css';
import {animate,arc,easeOut} from '../../utils/helpers.js';
import './x-slider.css';
import * as cn from 'classnames';


function Xslider(){
	const [isExtended,setExtend] = useState(false);
	const drawSlideOut = (el,dxP,offs) =>{
		el.style.left = (dxP*25)+offs+'vw';/*40 is the stopping point*/
	}
	const drawSlideIn = (el,dxP,offs) =>{
		el.style.left = 25-(dxP*25)+offs+'vw';
	}

	function downHandler(e){         
	    let [menuBdy,menuBtn] = document.getElementsByClassName('menu');
	    if(isExtended === false){
		animate(
			{el:[menuBdy,menuBtn],
			offsets:[-25,0],
			timing:easeOut(arc),
			draw:drawSlideOut,
			duration:1000}); 
		setExtend(true);

		    return;              
	    }
	    animate({
		    el: [menuBdy,menuBtn],
		    offsets:[-25,0],
		    timing:arc,
		    draw:drawSlideIn,
		    duration:1000});
	    setExtend(false);
	}

	useEffect(() => {
	   let menuButton = document.getElementById("menuButton");
	   menuButton.addEventListener("pointerdown",downHandler,false);
	});

	return(
	  <div id = "xsc">                         
	    <div                         
	      className = {cn("menu", "body","maxXm_rect","__gr")}           
	    >                        
		<Menu />                              </div>                                                                              <button                                     id = "menuButton"                         className = {cn("menu", "corner","_sq__15","__rot45","__lb__hl")}
		>                                         </button>                               </div>
	);
}

export default Xslider;
