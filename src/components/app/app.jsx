import React from 'react';
import '../../utils/shapes.css';
import '../../utils/flex.css';
import './app.css';
import ResponsiveMenu from '../menu/responsive-menu';
import Projects from '../projects/projects';
import Resume from '../resume/resume';
import classNames from 'classnames';
import BackDrop from '../orangeBackDrop/backDrop';
import ImgDemo from '../rImage-demo/img-demo';

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
      <ImgDemo />
      <footer id={'bottom'}>
	  <p>powered by netlify
	  </p>
      </footer>
    </div>
  );
}

export default App;

