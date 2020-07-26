import React from 'react';
import * as cn from  'classnames';
import './projects.css';
import '../../utils/colors.css';
import '../../utils/flex.css';
import SlideShow from  '../slideShow/slideShow';
function Projects(){
	return(
	     <div className = {cn("base","__w","flx_c__r__nw","__center")}>
		 <div className = {cn("__gr","slide_cont","flx_c__r","__y_between")}>
		   <SlideShow />
		 </div>
	    </div>
	);

}

export default Projects
