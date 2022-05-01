import React, { Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
class Discount extends Component {
  render() {
    return (
      <div className="Discount">
       <Grid>
<Row>
<Col md="12" xs="12">
  <h2>Get Discount 30% Off</h2>
<p>Subscribe our newsletter and get discount 30% off</p>
<div className="dicountHolder">
<input type="text" classname="form-controlholder" placeholder="Enter your email address" />
<span><a href="#"><button>Subscribe</button></a></span>

</div>
      </Col>
      </Row>
      </Grid>
      </div>
    );
  }
}

export default Discount;