import React ,{useEffect,useState} from 'react';
import Xslider from './x-slider';
import Yslider from './y-slider';

const  ResponsiveMenu = () => {
	const [isPortrait, setPortrait] = useState(false);
	var orientation = window.screen.orientation  || window.screen.mozOrientation || window.screen.msOrientation || {};

	useEffect(() => {
	const orient = () => {
		if (orientation.type === ("portrait-primary"||"portrait-secondary")){
		setPortrait(true);      
                }else if(orientation.type === ("landscape-primary"||"landscape-secondary")){                                      
		setPortrait(false);
		}
	}
	orientation.addEventListener('change', orient());
	},[orientation]);

	return (
	  <div>
            {isPortrait && <Yslider/>}
	    {!isPortrait && <Xslider/>}
	  </div>
	);
}

export default ResponsiveMenu;

/* kinda works for now but requires whole page to be refreshed before the changes to orientation are displayed, not sure if this is a useEffect issue or a bug in my state logic */ 
