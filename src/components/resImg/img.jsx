import React from 'react';
import './img.css';
import sunset from '../../images/sunset.jpg';

const  ResImage =(props)=>{


	return(
		<div>
		  <img src = {props.path}   id = {props.name}
		  alt = {props.altText}                                   
                  />
		</div>
	);
}

export default ResImage;

