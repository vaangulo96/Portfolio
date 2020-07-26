import React from 'react';
import './backDrop.css';
import '../../utils/shapes.css';
import * as cn from 'classnames';





function BackDrop(){
	
	return(
		<div className = {cn("gallery","__mint_blue","mXmax_rect")}>                                                                     
			<h1 className = {cn("title")}><span>We</span>b ∆ <br/> <span>Dev</span></h1>      
			<div className = {cn("topRight","tile")}></div>
			<div className = {cn("midLeft","tile")}></div>
                        <div className = {cn("midRight","tile")}></div>
                        <div className = {cn("botLeft","tile")}></div>
                        <div className = {cn("botCenter","tile")}></div>
                   </div>
	);
}
export default BackDrop;
