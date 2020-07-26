/*module for helper functions to be used in components of this project*/

function unify(e){ 
	return e.touches?e.touches[0]:e
}

const play = (id,context) =>{ 
	let target = document.getElementById(id).children[0];
	target.style.setProperty('animation-play-state','running');
	context.setState({
		ani:true})
}

function animate({el,dynamTouch,offsets,timing,draw,duration}){
	let start = performance.now();
	requestAnimationFrame(function animate(time){
		let timeFraction = (time -start)/duration;
		if (timeFraction>1) timeFraction = 1;
		let progress = timing(timeFraction); 
		el.map((current,indx)=>draw(current,progress,offsets[indx],dynamTouch));
		if (timeFraction<1){
			requestAnimationFrame(animate);
		}
	})};

function linear(timeFraction){
	return timeFraction
}

function arc(timeFraction){
	return 1 - Math.sin(Math.acos(timeFraction));
}

function easeOut(timing){
	return function(timeFraction){
		return 1 - timing(1 - timeFraction);
	}
}


export {unify,play,animate,linear,arc,easeOut};
