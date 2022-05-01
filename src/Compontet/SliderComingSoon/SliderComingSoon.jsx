import React, { Component } from 'react';
import {NavItem,} from 'react-bootstrap';
import FooterLinks from '../FooterLinks/FooterLinks';
import CountTo from 'react-count-to';
import {Grid,} from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link} from "react-router-dom";
class SliderComingSoon extends Component {

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
      <div className="SliderComingSoon">
<ScrollAnimation  animateIn='fadeInLeft'
  animateOut='fadeOut'
 >
<Grid>
       <div className="menu-cont" id="toggle" >
            <span className='menu-txt' onClick={this.handleClick}>{this.state.menuTitle}</span>
         <div className={this.state.overlaySt} id="overlay">
            <nav className="overlay-menu">
            <ul>
            <li ><a href=""><Link to="/home"> Home </Link></a></li>
            <li ><a href=""><Link to="/shop"> Shop </Link></a></li>
            <li><a href=""><Link to="/singleshop"> Product</Link></a></li>
            <li><a href=""><Link to="/ComingSoon">Coming</Link></a></li>
            <li><a href=""><Link to="/Erro">404</Link></a></li>
            <li><a href=""><Link to="/LogIn">Login</Link></a></li>
           </ul>
           </nav>
        </div>
      </div>




  <div className="SliderComeing">
  </div>
  <div className="SliderComingHolder">
  <h1>Coming Soon</h1>
  <p>New store we be launched in</p>
  <div>

  <ul className="SliderComingCounter">

  <li><h2><CountTo to={7} speed={5000} /></h2> <p1>Days</p1></li>
  <li><h2><CountTo to={88} speed={5000} /></h2><p1>Hours</p1></li>
  <li><h2><CountTo to={21} speed={5000} /></h2><p1>Min</p1></li>
  <li><h2><CountTo to={50} speed={5000} /></h2><p1>Sec</p1></li>

  </ul>
  </div>

  <div className="SLiderSocial">
  <h3>Follw Us:</h3>
  <ul class="social-mediaCounter">
                     <li><a href="#" class="fa fa-twitter"></a></li>
                     <li><a href="#" class="fa fa-facebook"></a></li>
                     <li><a href="#" class="fa fa-youtube"></a></li>
                     </ul>
                     </div>
  </div>
 
  </Grid>
  </ScrollAnimation>
      </div>
    );
  }
}

export default SliderComingSoon;