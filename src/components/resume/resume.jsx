import React,{useEffect,useState} from 'react';
import * as cn from 'classnames';
import '../../utils/layout.css';
import './resume.css';
import reactLogo from '../../images/logo.svg';
import css3Logo from '../../images/css3Logo.svg';
import html5Logo from '../../images/html5Logo.svg';

function Resume(){
	const [skillNumber,setSkill] = useState(0);

	function handleDownButton(e){
		(skillNumber < 3)?setSkill(skillNumber+1):setSkill(0);
		document.getElementsByClassName('slider')[0].children[skillNumber].scrollIntoView({behavior:'smooth',block:'nearest'});
	}

	function handleUpButton(e){
		(skillNumber > 0)?setSkill(skillNumber - 1):setSkill(3);
		
		document.getElementsByClassName('slider')[0].children[skillNumber].scrollIntoView({behavior:'smooth',block:'nearest'});
	}
	
	useEffect(() => {
		document.getElementById('skillDown').onpointerdown = handleDownButton;
		document.getElementById('skillUp').onpointerdown = handleUpButton});

	return(
		<div className = {cn("resume -grid")}>
			<div className = {cn("skillsBox -smallPortrait")}>
				<div className = {cn("text")}
				     id = {'skillUp'}>
				Up</div>
				    <div className = {cn("slider")}>
					<div className = {cn("square")}><img src={reactLogo} className={cn("reactLogo")}  alt="react logo" /></div>
					<div className = {cn("square")}><img src={html5Logo} className = {"html5Logo"} alt='html5 logo' /></div>
					<div className = {cn("square")}><img src={css3Logo} className = {"css3Logo"} alt='css3 logo' /></div>
					<div className = {cn("square")}>4</div>
				    </div>
				<div className = {cn("text")}
				     id = {'skillDown'}>
				down</div>
				
			</div>
			<div  className = {cn("dialogBox -mediumPortrai")}>
			    <div className = {cn("dialogBackground")}>
				<ul className = {cn("text")}>
					<li>Direction</li>
					<li>Stragety</li>
					<li>Tech skill detail</li>
					<li>Analytical skill detail</li>
					<li>hobbies/a/b me</li>
				</ul>
			   </div>
				
			</div>
		</div>
	);
}

export default Resume;
