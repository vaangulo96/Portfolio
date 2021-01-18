/*module for helper functions to be used in components of this project*/

function unify(e){ 
	return e.touches?e.touches[0]:e
}

function animate2({els,timing,draw,duration}){
	let start = performance.now();
	requestAnimationFrame(function animate(time){
		let timeFraction = (time -start)/duration;
		timeFraction = timeFraction>1?1:timeFraction;
		let progress = timing(timeFraction);
		els.map((current,indx)=>draw(current,timeFraction));
		if (timeFraction<1){
			requestAnimationFrame(animate);
		}
	})};

function animate({els,draw,duration,timeFunct=null}){
	let current = performance.now(); 
	let iD = requestAnimationFrame(function anim(time){
		let timeFraction = (time - current)/duration;
		let progress = timeFunct?timeFunct(timeFraction):timeFraction;
		if (progress>1) progress = 1;
		
		els.map((current)=> draw(current,progress));
		if (progress < 1){

			cancelAnimationFrame(iD);
			requestAnimationFrame(anim);
		}
	});
}

function linear(timeFraction){
	return timeFraction
}

function arc(timeFraction){
	return 1 - Math.sin(Math.acos(timeFraction));
}

function easeOut(timing,timeFraction){
	return 1 - timing(1 - timeFraction);
}


export {animate,arc,unify};

