import React from 'react';
import * as cn from 'classnames';
import './img-demo.css';
import '../../utils/flex.css';
import flower from '../../images/flowerMicro.jpg';





export default function ImageDemo(){

	return(
<div className = {'flowerBackground'}>                         <div className = {cn('flowerFrame flx_col __center')}>
            <img src = {flower} className = "flower"  alt="micro surrealistic flower"/></div>                                   <div className = {'wrapFrameBackground'}>                        <div className = {'frameBackground'}>
                    <div className = {'frameBackgroundSquare'}></div>
                </div>                                                     <div className ={'frameBackground'}>                            <div className = {'frameBackgroundSquare'}></div>                                                                </div>
          </div>                                                 </div>)};
