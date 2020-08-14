import React from 'react';
import '../../utils/shapes.css';
import '../../utils/flex.css';
import './app.css';
import ResponsiveMenu from '../menu/responsive-menu';
import Projects from '../projects/projects';
import Resume from '../resume/resume';
import classNames from 'classnames';
import flower from '../../images/flowerMicro.jpg';
import BackDrop from '../orangeBackDrop/backDrop';

function App() {

  return (
    <div className="App">
      <ResponsiveMenu id={'top'}/>
      <div className = "App-header">
	<BackDrop />
      </div>
      <button className = {classNames('upArrow','backUp','__lb__hl')}>
	  <a className = {classNames('arrowLink')} href='#top'>•</a>
      </button>
      <section id={'resume'}>
        <Resume />
      </section>
      <section id = {'projects'}>	  
	<Projects />
      </section>
      <div className = {'flowerBackground'}>
	  <div className = {classNames('flowerFrame flx_col __center')}>
            <img src = {flower} className = "flower"  alt="micro surrealistic flower"/></div>
	  <div className = {'wrapFrameBackground'}>
		<div className = {'frameBackground'}>
	    	    <div className = {'frameBackgroundSquare'}></div>
		</div>
		<div className ={'frameBackground'}>
	   	     <div className = {'frameBackgroundSquare'}></div>
		</div>
      	  </div>
      </div>
      <footer id={'bottom'}>
	  <p>contact
		hire me
	  	yada yada
	  </p>
      </footer>
    </div>
  );
}

export default App;

