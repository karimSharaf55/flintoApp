import React, { Component } from 'react';
import {NavItem,} from 'react-bootstrap';
import {Grid,Row,Col} from 'react-bootstrap';
class CountPices extends Component {
  render() {
    return (
      <div className="CountPices">
      <hr></hr>
<Grid>
    <Row>
<Col md={12}>
<ul className="CountPicesHolder">
<li>sku: <span> 1036111 </span></li>
<li>Category: <span> Clothes </span></li>
<li>Tag: <span> Fashion, minimal, clean </span></li>
</ul>
</Col>
    </Row>
</Grid>
<hr></hr>
 
      </div>
    );
  }
}

export default CountPices;