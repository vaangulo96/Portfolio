//module made in lieu of using lodash or underscore until further research of both is done//
//

export default function throttle (callback, limit){
	let waiting = false;
	return function (){
		if (!waiting){
			callback.apply(this,arguments);
			waiting = true;
			setTimeout(()=>{
				waiting = false;
			}, limit);
		}
	}
}
