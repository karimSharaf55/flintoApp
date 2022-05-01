import React, { Component } from 'react';
import {NavItem,} from 'react-bootstrap';
import FooterLinks from '../FooterLinks/FooterLinks';
import Accessories from '../Accessories/Accessories';
import TabDescription from '../TabDescription/TabDescription';
import SliderPrice from '../SliderPrice/SliderPrice';
import Customer from '../Customer/Customer';
import CountPices from '../CountPices/CountPices';
import FeaturedItem from '../FeaturedItem/FeaturedItem';
import Items from '../Items/Items';
import Ratedproducts from '../Ratedproducts/Ratedproducts';
import Discount from '../Discount/Discount';
import NavbarTop from '../NavbarTop/NavbarTop';
import {Grid,Row,Col,Button} from 'react-bootstrap';

class Journal extends Component {
  render() {
    return (
      <div className="Journal">
      <NavbarTop/>

<Accessories/>
<TabDescription/>
<Customer/>
<CountPices/>
{/*   not working  */}<Items/> 
<Grid>
<hr/>
</Grid>
<Ratedproducts/>
<Discount/>
    <FooterLinks/>
 
 
      </div>
    );
  }
}

export default Journal;