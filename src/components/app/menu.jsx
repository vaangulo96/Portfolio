/*component that actually contains menu items*/
import React from 'react';
import * as cn from 'classnames';
import '../../utils/flex.css';
import './menu.css';

function Menu(){
	return(
	  <div className = {cn("menu_items","flx_col","__center")}>
		<h2 className = {cn("_tab")}>
		  <a href='#top'>Home</a>
		</h2>
		<h2 className = {cn("_tab")}>
		  <a href='#resume'>My Experience</a>
                </h2>
		<h2 className = {cn("_tab")}>
		  <a href='#projects'>Ongoing Projects</a>
                </h2>
		<h2 className = {cn("_tab")}>
		  <a href='#bottom'>contact info</a>
                </h2>
	  </div>
	);
}

export default Menu
