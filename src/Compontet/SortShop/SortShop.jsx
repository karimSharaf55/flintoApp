import React, { Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap';

class SortShop extends Component {
  render() {
    return (
      <div className="SortShop">
         <Grid>
<Row>
<Col md="3" xs={12} sm={6} >
<div className="SortShopLeft">
<a href="#">Sort By</a>
</div>
</Col>

<Col md="6" xs={12} sm={3} >
<div className="SortShopCenter">
<p>We found   <span>  17 products  </span>  available for you</p>

</div>
</Col>

<Col md="3" xs={12} sm={6} >
<ul className="SortShopRight">
<li><i class="fa fa-th"></i></li>
<li><i class="fa fa-align-justify"></i></li>

</ul>
</Col>


</Row>
</Grid>
      </div>
    );
  }
}

export default SortShop;