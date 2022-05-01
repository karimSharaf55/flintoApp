import React, { Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap';

class FooterLinks extends Component {
  render() {
    return (
      <div className="FooterLinks">
    <Grid>
<Row>
<Col md="3" xs="12" sm={3} >
<div className="footerRight">
<a href="#">Flinto</a>
</div>

</Col>

<Col md="6" xs="12" sm={6} >

<h2 className="FooterCenter">© 2017 Flinto. All rights reserved</h2>

</Col>

<Col md="3" xs="12" sm={3} >
<ul class="social-media all">
                     <li><a href="#" class="fa fa-twitter"></a></li>
                     <li><a href="#" class="fa fa-facebook"></a></li>
                     <li><a href="#" class="fa fa-youtube"></a></li>
                     <li><a href="#" class="fa fa-pinterest"></a></li>
                     <li><a href="#" class="fa fa-google"></a></li>
                  </ul>


</Col>

</Row>
</Grid>


</div>

    );
  }
}

export default FooterLinks;