import React, { Component } from 'react';
import {NavItem,} from 'react-bootstrap';
import SliderShop from '../SliderShop/SliderShop';
import SortShop from '../SortShop/SortShop';
import Categories from '../Categories/Categories';
import Pager from '../Pager/Pager';
import Ratedproducts from '../Ratedproducts/Ratedproducts';
import Discount from '../Discount/Discount';
import FooterLinks from '../FooterLinks/FooterLinks';
import GridProduct from '../GridProduct/GridProduct';
import {Grid,Row,Col} from 'react-bootstrap';
import NavbarTop from '../NavbarTop/NavbarTop';
import SortMobile from '../SortMobile/SortMobile';

class Shop extends Component {
  render() {
    return (
      <div className="shop">
        {/* <NavItem eventKey={2} href="/Shop"></NavItem> */}
<NavbarTop/>
<SliderShop/>

<SortShop/>
<div className="container">
<Row>
<Categories/>
<SortMobile/>
<GridProduct/>
</Row>
</div>
<Pager/>
<Ratedproducts/>
<Discount/>
<FooterLinks/>
  
      </div>
    );
  }
}

export default Shop;
