import React, { Component } from 'react';


class FeaturedItem extends Component {
  render() {
    return (
      <div className="FeaturedItem">
     
  <div>
               <div className="product-grid">
        <div className="product-image">
          <a href="#">
            <img className="pic-1" src={require('../../img/img-9.jpeg')} />
            <img className="pic-2"src={require('../../img/img-10.jpeg')} />
          </a>
            <ul class="social">
                        <li><a className="SocialHold" href="" data-tip="Add to Wishlist">ADD TO CART</a></li>
                        <li><a className="SocialCard" href="" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
          <span className="product-new-label">Sale</span>
        </div>
        <div className="product-content">
          <h3 className="title"><a href="#">Barton Sunglasses</a></h3>
          <div className="price">194.00 USD </div>
        </div>
      </div>
        </div>
      </div>
    );
  }
}

export default FeaturedItem;