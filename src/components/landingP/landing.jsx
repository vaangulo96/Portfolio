import React ,{useContext} from 'react';
import *  as cn from 'classnames';
import './landing.css';
import '../../utils/layout.css'; 
import {Call2Api} from '../root/root.jsx';
import waterfront from '../../images/waterfront.jpg';


function LandingPage (){
	const api = useContext(Call2Api);

	return(
	    <div className = "rootWrap">
		<div className = {cn('background -grid')}>
		   <div className = {cn('foreground')}></div>
		   <img src = {waterfront} 
		       alt = 'waterfront sunset'
		       id = 'waterfront'
		   />
		  <button className = {cn('contact-me _c2a')}
			  onClick = {api.go2contact}>contact me!</button>
		  <button className = {cn('my-stuff _c2a')}
			  onClick = {api.go2stuff}>look at my stuff!</button> 
		</div>
	    </div>
	);
}

export default LandingPage;
