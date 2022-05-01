import React, { Component } from 'react';
import {NavItem,} from 'react-bootstrap';
import FooterLinks from '../FooterLinks/FooterLinks';
import SliderComingSoon from '../SliderComingSoon/SliderComingSoon';
import CountTo from 'react-count-to';
import NavbarTop from '../NavbarTop/NavbarTop';
import ScrollAnimation from 'react-animate-on-scroll';

class ComingSoon extends Component {
  showSettings (event) {
    event.preventDefault();

  }
  render () {
    return (
      
      <div>

<SliderComingSoon/>

</div>


 
    );
  }
}

export default ComingSoon;