import React, { Component } from 'react';
import {NavItem,} from 'react-bootstrap';
import {Grid,} from 'react-bootstrap';
class SliderErro extends Component {
  constructor(props){
    super(props);
  this.state = {
        overlayOpen:"open",
        menuTitle: <i class="fa fa-bars"></i>,
        overlaySt:"overlay"
    };
   this.handleClick = this.handleClick.bind(this);
};

  handleClick() {
    switch(this.state.overlayOpen)
{
  case "open":
  this.setState({
      overlayOpen:"close",
      menuTitle: <i class="fa fa-close"></i>,
      overlaySt:"overlay open"
  });
  break;
case "close":
  this.setState({
      overlayOpen:"open",
      menuTitle: <i class="fa fa-bars"></i>,
      overlaySt:"overlay"
  });
  break;

}
  
}
  render() {
    return (
      <div className="SliderErroHolder">
<Grid>
<div className="menu-cont" id="toggle" >
            <span className='menu-txt' onClick={this.handleClick}>{this.state.menuTitle}</span>
         <div className={this.state.overlaySt} id="overlay">
            <nav className="overlay-menu">
            <ul>
            <li ><a href="/">Home</a></li>
            <li><a href="/shop">shop</a></li>
            <li><a href="/singleshop"> Product</a></li>
            <li><a href="/ComingSoon">Coming</a></li>
            <li><a href="/Erro">404</a></li>
            <li><a href="/LogIn">Login</a></li>
           </ul>
           </nav>
        </div>
      </div>
 <div className="SliderErro">
  </div>

  <div className="SliderErroHeader">
  <h2>Oops, page not found</h2>
  <p>It looks like nothing was found at this location. 
Perhaps searching can help or go back to Homepage</p>
<div id="custom-search-input">
        <div className="input-group col-md-12">
          <input type="text" className="  search-query form-control" placeholder="Search" />
          <span className="input-group-btn">
            <button className="btn btn-danger" type="button">
              <span className=" glyphicon glyphicon-search" />
            </button>
          </span>
        </div>
      </div>
  
  </div>
  </Grid>
      </div>
    );
  }
}

export default SliderErro;