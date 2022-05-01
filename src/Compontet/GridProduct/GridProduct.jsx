import React, { Component } from 'react';
import ShopItem from '../ShopItem/ShopItem';
import {Grid,Row,Col} from 'react-bootstrap';
class GridProduct extends Component {
  render() {
    return (
      <div className="GridProduct">
  <Col md="9" xs="12" sm="9">

  <ShopItem/>
  <ShopItem/>
  <ShopItem/>
  <ShopItem/>

</Col>
      </div>
    );
  }
}

export default GridProduct;