import React, { Component } from 'react';

class SliderShop extends Component {
  render() {
    return (
      <div className="SliderShop">
 
  <div className="SliderHolder">

<img src={require('../../img/category.jpg')}/> 
<div className="sliderShopALL">


<h2 className="SliderShop" >Shop Sidebar</h2>


<span className="SliderShopHolder" ><a href="#">Shop</a></span>
<span className="sliderCenter"> <i class="fa fa-angle-right"></i> </span><span className="SliderRight" ><a href="#">Shop Sidebar</a></span>
</div>

</div>


      </div>
    );
  }
}

export default SliderShop;