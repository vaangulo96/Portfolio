import React,{useState} from 'react';
import * as cn from  'classnames';
import './projects.css';
import '../../utils/colors.css';
import '../../utils/flex.css';
import '../../utils/layout.css';
import {animate} from '../tools/helpers.js';

function Projects(){

	const [topPos,setTop] = useState(0);

	const animScrlDn = (el,timeF) =>{
		el.style.top = topPos - 10*timeF;
	}
//eslint-disable-next-line
	const handleScrollDown =(box)=>{
		animate({
			els:[box],
			draw:animScrlDn,
			duration:750,
		});

		setTop(topPos-10);
	}


	return(
	     <div className = {cn("base","flx_c__r__nw","__center")}>
		 <div className = {cn("slide_cont")}>
		   <div className="bridge-pic"></div>
		   <div className = {cn("next-projects")}>
		     <h1>style guide</h1>
		     <div className = {cn("style-guide")}>
		       <ul className = {cn("color-key")}>
			  <li className = {cn("-color -grid")}>
				<div className = "backg"></div>
				<p>Background: #142b5f</p>
			  </li>
			  <br/>

		          <li className = {cn("-color -grid")}>                                                                            <div className = "main"></div>                                                                              <p>Main: #f19ec4</p>                                                      
		          </li>
		          <br/>

		          <li className = {cn("-color -grid")}>
			        <div className ="coolAccent"></div>
			        <p>Cool Accent: #00f7b3</p>
		  	  </li>
			  <br/>

			  <li className = {cn("-color -grid")}>
			        <div className="warmAccent"></div>
			        <p>Warm Accent: #f09b46</p>
			  </li>
			  <br/>

			  <li className={cn("-color -grid")}>
			        <div className="coolTertiary"></div>
			        <p>Cool Tertiary: #800080</p>
			  </li>
			  <br/>

			  <li className={cn("-color -grid")}>
				<div className="warmTertiary"></div>
				<p>Warm Tertiary: #70034e</p>
			  </li>
			  <br/>
			
			  <li className={cn("-color -grid")}>
				<div className = "neutral"></div>
				<p>Neutral: #282c34</p>               
			  </li>
		       </ul>
		     </div>
		   </div>
		 </div>
	    </div>
	);

}

export default Projects
