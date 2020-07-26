import React from 'react';
import '../../utils/flex.css';
import './profilePic.css';
import * as cn from 'classnames';



function ProfilePic(){

	return(
	<div className = {cn('flx_c__c__nw','__center')}>
            <div className = {cn('__w','_c__m','_selfie_frame','flx_c__r__nw','__center')}>
              <div className = {cn('_c__24','_selfie')}></div>
            </div>  
	    <div className = {cn("detailBar")}></div>
	</div>
	);
}

export default ProfilePic;
