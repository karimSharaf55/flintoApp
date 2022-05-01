
import React, { Component } from 'react';
import {Nav,NavItem,Navbar,Grid,Row,Col,} from 'react-bootstrap';
import { Link} from "react-router-dom";


class NavbarTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
          sidebarOpen: true
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
      }
    
      onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
      }
  render() {
    return (
      <div className="NavbarTop">
        <Navbar inverse collapseOnSelect>
        <Grid>
            <Row>
                <Col md={2} >
  <Navbar.Header >
    <Navbar.Brand>
      <a href="/">Flinto</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>

</Col>
  <Navbar.Collapse>
  <Col md={8}>
    <Nav>
      <NavItem eventKey={1} href="/">
    Home
      </NavItem>
      <NavItem eventKey={2} href="">
      <Link to="/shop/">  Shop </Link>
      </NavItem>
      <NavItem eventKey={2} href="">
      <Link to="/singleshop/">  Product</Link>
      </NavItem>
      <NavItem eventKey={2} href="">
      <Link to="/ComingSoon/">  Coming</Link>
      </NavItem>
      <NavItem eventKey={2} href="">
      <Link to="/Erro/">  404</Link>
      </NavItem>
      <NavItem eventKey={2} href="">
      <Link to="/LogIn/">  Login</Link>
      </NavItem>
    </Nav>
    </Col>
    <Col md={2}>
    <div className="paullRightHolder">
    <Nav pullRight>
    <ul class="social">
    {/* <a className="wishlist icon ion-android-favorite-outline alotheme-tooltip">ff</a> */}
                        <li><a href="" data-tip="Quick View"> <img src={require('../../img/search.png')}/></a></li>
                        <li><a href="" data-tip="Add to Wishlist"><img src={require('../../img/shopping-bag.png')}/><sub className="Two">2</sub></a>
                    </li>
                        <li><a href="" data-tip="Add to Cart"><i class="fa fa-bars"></i></a></li>
                        
                    </ul>
              
                 
    </Nav>
    </div>
    </Col>
  </Navbar.Collapse>
  </Row>
  </Grid>
</Navbar>

      </div>
    );
  }
}

export default NavbarTop;
