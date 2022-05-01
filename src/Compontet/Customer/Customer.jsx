import React, { Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap';

class Customer extends Component {
  render() {
    return (
      <div className="Customer">
    
  <Grid>
<Row>
<Col md="4" xs="12" sm="4" >
<div className="customerLeft">
<a herf="#">
<img src={require('../../img/Shipping.png')}/>
 <h2>Free Shipping</h2>
 </a>
 </div>
</Col>

<Col md="4" xs="12" sm="4" >

<div className="customerCenter">
<a herf="#">
<img src={require('../../img/Customer.png')}/>
 <h2>Support Customer</h2>
 </a>
 </div>




</Col>



<Col md="4" xs="12" sm="4" >

<div className="customerRight">
<a herf="#">
<img src={require('../../img/Payments.png')}/>
 <h2>Secure Payments</h2>
 </a>
 </div>




</Col>


</Row>
  </Grid>
 

      </div>
    );
  }
}

export default Customer;