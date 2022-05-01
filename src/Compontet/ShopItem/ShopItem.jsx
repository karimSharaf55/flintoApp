import React, { Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap';

class ShopItem extends Component {
  render() {
    return (
      <div className="ShopItem">
  
  <Col md="6" xs="12" sm={6}>
<div className="product-grid3">
        <div className="product-image3">
          <a href="/singleshop">
          <img className="pic-1" src={require('../../img/what.jpeg')} />
            <img className="pic-2" src={require('../../img/what1.jpeg')} />
          </a>
          <span className="product-new-label">New</span>
        </div>
        <div className="product-content">
          <h3 className="titl"><a href="#">T–Shirt With Bardotr</a></h3>
          <div className="price">
          <span> $75.00 </span>

            $63.50
         
          </div>
        </div>
      </div>

</Col>

      </div>
    );
  }
}

export default ShopItem;