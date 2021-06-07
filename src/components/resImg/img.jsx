import React from 'react';
import './img.css';

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

