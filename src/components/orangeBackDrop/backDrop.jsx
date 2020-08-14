import React from 'react';
import './backDrop.css';
import '../../utils/shapes.css';
import * as cn from 'classnames';
import ProfilePic from '../profilePic/profilePic';


function BackDrop(){

	
	return(
		<div className = {cn("header-grid","__mint_blue","mXmax_rect")}>                                                                  <div className ={cn("profile-pic")}>
			    <ProfilePic  />
			</div>
			<h1 className = {cn("title")}><span>We</span>b ∆ <br/> <span>Dev</span></h1>      
			<div className = {cn("topRight","tile")}></div>
			<div className = {cn("midLeft","tile")}></div>
                        <div className = {cn("midRight","tile")}></div>
                        <div className = {cn("botLeft","tile")}></div>
                        <div className = {cn("botCenter","tile")}></div>
			<div className = {cn("grey-tile")}></div>
                   </div>
	);
}
export default BackDrop;
