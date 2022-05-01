import React, { Component } from 'react';
import {Grid,Row,Col,Button} from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import InputNumber from 'rc-input-number';
import 'rc-input-number/assets/index.css';

class Accessories extends Component {
  state = {
    disabled: false,
    readOnly: false,
    value: 5,
  };
  onChange = (value) => {
    console.log('onChange:', value);
    this.setState({ value });
  }
  toggleDisabled = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  }
  toggleReadOnly = () => {
    this.setState({
      readOnly: !this.state.readOnly,
    });
  }
  render() {
    return (
      <div className="Accessories">
  <Grid>
<Row>
<Col md={5} xs={12} sm={6}>
<h2 className="BackAccessories" ><i class="fa fa-angle-left"></i><a href="#">Back to Accessories</a></h2>
<Carousel
showIndicators={false}
showArrows={false}
showStatus={false}
>
                <div>
                    <img src="http://bestjquery.com/tutorial/product-grid/demo7/images/img-1.jpg" />
                   
                </div>
                <div>
                    <img src="http://bestjquery.com/tutorial/product-grid/demo7/images/img-1.jpg" />
                    
                </div>
                <div>
                    <img src="http://bestjquery.com/tutorial/product-grid/demo7/images/img-1.jpg" />
                   
                </div>
            </Carousel>




</Col>

<Col md={7} xs={12} sm={6}>
<ul className="AccessoriesRightHolder">
<li><i class="fa fa-arrow-left"></i></li>
<li><i class="fa fa-th"></i></li>
<li><i class="fa fa-arrow-right"></i></li>



</ul>

<div className="AccessoriesRight">
<p>DRESS</p>
<h2>Long lace dress</h2>
<ul class="rating">
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star disable"></li>
                        <li class="fa fa-star disable"></li><span>(Based on 5 reviews)</span>
                    </ul>
                    <p className="price">$49.00 </p>
                    <p className="Available">Available :<span>In Stock</span></p>
                    <p className="describ">There are many variations of passages available,
                         but the majority have suffered alteration in some form, 
                         by injected humour.</p>

      {/* <ul className="pagination pagination-large">
        <li><a className="negative" href="#">-</a></li>
        <li><a href="#">1</a></li>
        <li><a className="positive" href="#">+</a></li>
       
      </ul> */}
           <div className="Accessories-input__number">
        <InputNumber
          min={-8}
          max={10}
          style={{ width: 100 }}
          value={this.state.value}
          onChange={this.onChange}
          readOnly={this.state.readOnly}
          disabled={this.state.disabled}
        />
      
      </div>
       <Button bsStyle="primary">Add to Cart</Button>

 <ul className="wishlist">
<li><i class="fa fa-heart"></i><span>Add to wishlist</span></li>

</ul>
<ul className="SocialBuutom">
<li><a href="#" class="fa fa-twitter"></a></li>
                     <li><a href="#" class="fa fa-facebook"></a></li>
                     <li><a href="#" class="fa fa-youtube"></a></li> 

</ul>

</div>


</Col>


</Row>



</Grid>


</div>

    );
  }
}

export default Accessories;