import React,{useEffect} from 'react';
import './app.css';
import Projects from '../projects/projects';
import Resume from '../resume/resume';
import BackDrop from '../orangeBackDrop/backDrop';
import ImgDemo from '../rImage-demo/img-demo';
import BackUp from '../backUpBtn/backUp';
import LandingPage from '../landingP/landing';
import {animate} from '../tools/helpers.js';

function App() {
	  let getVeil = ()=> document.getElementsByClassName('veil')[0];
	  let getApp = ()=> document.getElementsByClassName('App')[0];

  useEffect(()=>{
	  let veil = getVeil();
	  let app = getApp();
	  const slideUp = (el,timeF)=> el.style.top = 0 - (timeF*110) + 'vh';

	  animate({
		  els:[veil,app],
		  draw:slideUp,
		  duration:2000,
	  });
  },[]);

  useEffect(()=>{
	  let app = getApp();
	  const slideDown = (el,timeF)=> el.style.top = -120+(timeF*65) + 'vh'; 
	 
	  let timeId = setTimeout(animate({
		  els:[app],
		  draw:slideDown,
		  duration:1000,
	  }),4000);
	
	  return clearTimeout(timeId);

	},[]);

  return (
  <div>
    <div className = "veil">
     <LandingPage />q
    </div>
    <div className = "App">
      <div className = "App-header">
	<BackDrop />
      </div>
      <BackUp />
      <section id={'resume'}>
        <Resume />
      </section>
      <section id = {'projects'}>	  
	<Projects />
      </section>
      <ImgDemo />
      <footer id={'bottom'}>
	  <h3>powered by netlify
	  </h3>
      </footer>
    </div>
  </div>
  );
}

export default App;

