import React, { Component } from 'react';
import Slider from '../Slider/Slider';
import Bannar from '../Bannar/Bannar';
import Items from '../Items/Items';
import Customer from '../Customer/Customer';
import Discount from '../Discount/Discount';
import FooterLinks from '../FooterLinks/FooterLinks';
import NavbarTop from '../NavbarTop/NavbarTop';

class Home extends Component {
  render() {
    return (
      <div className="home">
  <NavbarTop/>

   <Slider/>
   <Bannar/>
<Items/>
<Customer/>
<Discount/>
<FooterLinks/>
  

      </div>
    );
  }
}

export default Home;
