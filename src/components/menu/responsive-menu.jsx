import React  from 'react';
import Xslider from './x-slider';
import Yslider from './y-slider';
import useViewport from '../../hooks/useViewportext.js';

const  ResponsiveMenu = () => {

	const breakPoint = 900;

	const {width} = useViewport();

	return width < breakPoint?<Yslider/>:<Xslider/>;
}

export default ResponsiveMenu;

/* v.1 kinda works for now but requires whole page to be refreshed before the changes to orientation are displayed, not sure if this is a useEffect issue or a bug in my state logic 
 * v.2 turna out it was an issue with using useEffeft with a variable causing a constant loop, likewise i was mot updating the orientation using usState, fixing bith of these i implemented a very robust hook that only looks at viewport width to decide between a portrait or landscape orientation. */ 
