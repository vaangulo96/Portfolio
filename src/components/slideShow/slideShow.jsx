
import React,{Component} from 'react';
import {unify} from '../../utils/helpers.js';
import "../../utils/flex.css";
import "../../utils/shapes.css";
import "./slideShow.css";
import sunset from '../../images/sunset.jpg';
import bridge from '../../images/tillamookBridge.jpg';
import * as cn from 'classnames';

class SlideShow extends Component {
	constructor(props){
		super(props);
		this.state = ({
			locked:false,
			c:0,
			x0: 0,
			y0: 0,
			img: 0,
			len: 0,
			id:'imgContainer',
			ani:true
		});
		this.handleTouchStart = this.handleTouchStart.bind(this);

		this.handleTouchMove = this.handleTouchMove.bind(this);
		this.handleTouchEnd = this.handleTouchEnd.bind(this);
	}

	handleTouchStart(e){
		e.preventDefault();
		let evnt = unify(e);
		this.setState({
			x0: evnt.clientX,
			y0: evnt.clientY,
			locked: true,
			c: this.state.c + 1

		})
		

	}

	handleTouchMove(e){
		e.preventDefault();
		let current = unify(e);
		if (this.state.locked){
		  let dx = current.clientX - this.state.x0,
		  dy = current.clientY - this.state.y0,
		  s = Math.sign(dx);
		  if (Math.abs(dx) > Math.abs(dy)){
			let next = this.state.img - (s*2);
			  if(next >=0 && next<=this.state.len-1){
			  document.getElementById('imgContainer').style.setProperty('--i',next);
			 this.setState({
				 locked: false,
				 img: next			  })
			/*refresh(next);*/
			
			}
			
		  }
		}
	}

	handleTouchEnd(e){
		if (this.state.c === 2)
		{
		let pic = document.getElementById("bridge");
		this.state.ani?pic.style.setProperty('animation-play-state','paused'):pic.style.setProperty('animation-play-state','running');
		this.setState({
			  c:0,
		  	  ani:!this.state.ani})

		}
		/*need seperate condition to test between taps to reset counter or accept a double tap with a delay in between taps of 500 ms.
		 * also intersectionObserver to know which slide is in view so it is that element which has its animation toggle with touch and the other slide has been stopped, thus need ani1 & ani2 states*/
	}

	componentDidMount(){
	     const _C = document.getElementById('imgContainer'), N = _C.children.length;
	     _C.style.setProperty('--n',N);
	     this.setState({
		     len: N
	     })
	}

	render(){
	  return(
	   <div className = {cn("img_container","flx_c__r__nw","__center","smooth")} 
	  	id = {'imgContainer'}
		onTouchStart = {this.handleTouchStart}  
		onTouchMove = {this.handleTouchMove}	   
		onTouchEnd = {this.handleTouchEnd}
		  >
	     <img src = {sunset}   id = "sunset"
		  alt = "cali sunset"
		  className ={"ani_slide1"}
	      />
	     <img src = {bridge}   id = "bridge"
		  alt = "tillamook bridge"
		  className ={"ani_slide2"}
		  />
	   </div>
	  );
	}

}

export default SlideShow;
