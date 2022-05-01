import React, { Component } from 'react';
// import Navbar from '../Navbar/Navbar';
import ScrollAnimation from 'react-animate-on-scroll';
import {Animated} from "react-animated-css";
import Sliderr from 'react-animated-slider';
// import 'react-animated-slider/build/horizontal.css';
import '../Slider/slider-animate.css';

import {Grid,Row,Col} from 'react-bootstrap';


const content = [
	{
		title: 'New Arrivals',
		description:
		'Woman Collection & Man Collection.',
		button: 'Discover',
		image: require("../../img/slide3.jpg"),
	
	},
	{
		title: 'New Arrivals',
			description:
		'Woman Collection & Man Collection.',
		button: 'Discover',
		image: require("../../img/login-bg.jpg"),
	},
	{
		title: 'New Arrivals',
		description:
		'Woman Collection & Man Collection.',
		button: 'Buy now',
		image: require("../../img/coming.jpg"),
	
	}
];


class Slider extends Component {

  render() {
    return (
      <div className="Sliderer">

      	<Sliderr className="slider-wrapper">
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						<button>{item.button}</button>
					</div>
					
				</div>
			))}
			
		</Sliderr>

      </div>


    );
  }
}

export default Slider;