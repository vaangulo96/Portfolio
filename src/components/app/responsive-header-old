import React from 'react';
import useViewport from '../../hooks/useViewportext.js';
import ProfilePic from '../profilePic/profilePic';
import BackDrop from '../orangeBackDrop/backDrop';


const ResponsiveHeader = () =>{
	
	let breakPoint = 900;

	let currentWidth = useViewport();

	return currentWidth < breakPoint?<div><ProfilePic /><BackDrop /></div>:<div><BackDrop /><ProfilePic /></div>
}

export default ResponsiveHeader;
