
import React, { Component } from 'react';
import Slider from "react-slick";
import FeaturedItem from '../FeaturedItem/FeaturedItem';
import {Tab,Tabs,Col,Grid} from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
class Item extends Component {
  render() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
    return (
      <div className="Item">
  


<ScrollAnimation  animateIn='fadeInLeft'
  animateOut='fadeOut'
 >
      
      <Grid> 
<h2 className="ItemHeader">Featured Products</h2>

      <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
  <Tab eventKey={1} title  ="Best Sellers">
  <Col md={3} sm={3}>
  <FeaturedItem/>
  </Col>
  <Col md={3} sm={3}>
  <FeaturedItem/>
  </Col>
  <Col md={3} sm={3}>
  <FeaturedItem/>
  </Col>
  <Col md={3} sm={3}>
  <FeaturedItem/>
  </Col>
  </Tab>
  <Tab eventKey={2} title="New Items">
  <Col md={3} sm={3}>
  <FeaturedItem/>
  </Col>
  <Col md={3} sm={3}>
  <FeaturedItem/>
  </Col>
  <Col md={3} sm={3}>
  <FeaturedItem/>
  </Col>
  </Tab>
  <Tab eventKey={3} title="Sales Items" >
  <Col md={3} sm={3}>
  <FeaturedItem/>
  </Col>
  <Col md={3} sm={3}>
  <FeaturedItem/>
  </Col>
  </Tab>
</Tabs>
  
      </Grid>
      </ScrollAnimation>
      </div>
    );
  }
}

export default Item;