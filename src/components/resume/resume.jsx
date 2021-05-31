import React,{useEffect,useState} from 'react';
import * as cn from 'classnames';
import '../../utils/layout.css';
import './resume.css';
import reactLogo from '../../images/logo.svg';
import css3Logo from '../../images/css3Logo.svg';
import html5Logo from '../../images/html5Logo.svg';
import js6Logo from '../../images/js6Logo.svg';
import gitLogo from '../../images/gitLogo.svg';
import {animate} from '../tools/helpers.js';
import Card from '../card/card';

function Resume(){

	const [Focus,setFocus] = useState([0,1,2,3,4]);

	useEffect(()=> {

		const forwardShift = (el,timeF)=>{
			el.style.height = 13+timeF*5+'vw';
			el.style.width = 12+timeF*6+'vw';
			el.style.top = 55+timeF*10+'vw';
			el.style.left = 2-timeF*2+'vw';
			el.style.zIndex = '2';
		}

		const centerShift = (el,timeF)=>{
			el.style.height = timeF*6+18+'vw';
			el.style.width = timeF*12+18+'vw';
			el.style.top = 65-timeF*32+'vw';
			el.style.left = 0-timeF*3+'vw';
			el.style.zIndex = '3';
		}

		const rightShift = (el,timeF) =>{
			el.style.height = 24-timeF*6+'vw';
			el.style.width = 30-timeF*12+'vw';
			el.style.top= 33-timeF*27+'vw';
			el.style.left = timeF*3-3+'vw';
			el.style.zIndex = '2';
		}

		const backShift = (el,timeF) =>{
			el.style.height = 18-timeF*5+'vw';
			el.style.width = 18-timeF*6+'vw';
			el.style.top = timeF*14+6+'vw';
			el.style.left = timeF*2+'vw';
			el.style.zIndex = '0';
		}

		const leftShift = (el,timeF) =>{
			el.style.top = 20+timeF*35+'vw';
			el.style.width = '12vw';
			el.style.height= '12vw';
		}

		let items = [Focus[0],Focus[1],Focus[2],Focus[3],Focus[4]];
		let slider = [document.getElementsByClassName('-s0')[0],
		document.getElementsByClassName('-s1')[0],
		document.getElementsByClassName('-s2')[0],
		document.getElementsByClassName('-s3')[0],
		document.getElementsByClassName('-s4')[0]];
		const startAnim =()=>{

		  animate({
			els:[slider[items[4]]],
				
			draw:backShift,
			duration:1250
			});
				
		  animate({ 
			els:[slider[items[3]]],                                           
			draw:rightShift,
			duration:1250
			});

		  animate({   
			els:[slider[items[2]]],                                             
			draw:centerShift, 
			duration:1250
			});

	 	  animate({          
			els:[slider[items[1]]],                                             
			draw:forwardShift,
			duration:1250   
			});

		  animate({            
			els:[slider[items[0]]],                                                 
			draw:leftShift,   
			duration:1250   
			});
		}

		let intID = window.setInterval(()=>{
		startAnim();
		items.unshift(items.pop(4));
		},3000);
		return ()=>{ 
		setFocus((Focus)=>[items[0],items[1],items[2],items[3],items[4]]);
		window.clearInterval(intID);
		}
	},[Focus]);

	return(
		<div className = {cn("resume -grid")}>
			<div className = {"filler"}></div>
			<div className = {cn("skillsBox -smallPortrait -grid")}>
				    <div className = {cn("slider")}>
					<div className = {cn("skill -s0 square")}><img className = {cn("react Logo")} src={reactLogo} alt="react logo" /></div>
					<div className = {cn("skill -s1 square")}><img className = {cn("html5 Logo")} src={html5Logo} alt='html5 logo' /></div>
					<div className = {cn("skill -s2 square")}><img className = {cn("css3 Logo")} src={css3Logo} alt='css3 logo' /></div>
					<div className = {cn("skill -s3 square")}><img className = {cn("js6 Logo")} src={js6Logo} alt='js6 logo'  /></div>
					<div className = {cn("skill -s4 square")}><img className = {cn("git Logo")} src={gitLogo} alt = 'git logo' /></div>
				    </div>
				
			</div>

			<div  className = {cn("dialogBox -mediumPortrait")}>
			    <div className = {cn("dialogBackground")}>
				<ul className = {cn("resumeText")}>
					<li>Direction</li>
					<li>Stragety</li>
					<li>Tech skill detail</li>
					<li>Analytical skill detail</li>
					<li>hobbies/a/b me</li>
				</ul>
			   </div>
				
			</div>

			<div className = {cn("card")}>

			     <Card text="My direction as developer blahblah blahbkah blah blah bl blahblah bla.blah bla blahbla bobloblaw boblolb boblob loblawbomb" />
			</div>
		</div>
	);
}

export default Resume;
