import React from 'react';
import * as cn from  'classnames';
import './projects.css';
import '../../utils/colors.css';
import '../../utils/flex.css';
import SlideShow from  '../slideShow/slideShow';
function Projects(){
	return(
	     <div className = {cn("base","flx_c__r__nw","__center")}>
		 <div className = {cn("slide_cont")}>
		   <SlideShow />
		   <div className = {cn("next-projects")}>
		     <h1>coming soon</h1>
		   </div>
		 </div>
	    </div>
	);

}

export default Projects
