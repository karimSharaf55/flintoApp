import React, { Component } from 'react';
import {NavItem,} from 'react-bootstrap';
import Contact from '../Contact/Contact';
import FooterLinks from '../FooterLinks/FooterLinks';
import NavbarTop from '../NavbarTop/NavbarTop';
import {Grid,Row,Col,Button} from 'react-bootstrap';

class LogIn extends Component {
  render() {
    return (
      <div className="shop LogIn">
            <NavbarTop/>
            <div className="SliderShop">
 <Row>


 <div className="SliderHolder">
 <img src={require('../../img/category.jpg')}/> 

<div className="sliderShopALL">
<h2 className="SliderShop" >Login</h2>
<span className="SliderShopHolder" ><a href="#">Shop</a></span>
<span className="sliderCenter"> <i class="fa fa-angle-right"></i> </span><span className="SliderRight" ><a href="#">Shop Sidebar</a></span>
</div>

</div>

 </Row>
     </div>
<Contact/>

<FooterLinks/>
  
      </div>
    );
  }
}

export default LogIn;
