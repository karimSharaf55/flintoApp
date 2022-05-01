import React, { Component } from 'react';
import {Grid,Row,Col,Modal,Button,OverlayTrigger} from 'react-bootstrap';


class SortMobile extends Component {
    
    
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false
        };
      }
    
      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }
  render() {
    return (


        
      <div className="SortMobile row">
<Col md="3" sm="3">


 <div>

        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
       sort by
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sort By</Modal.Title>
          </Modal.Header>
          <Modal.Body>
         

<Col md="3" xs="12" sm="3">
<ul className="Categories">
<li><a href="#">Default</a></li>
<li><a className="CategoriesHolder" href="#">Popularity</a></li>
<li><a href="#">Newness</a></li>
<li><a href="#">Price : low to heigh</a></li>
<li><a href="#">Price : Heigh to low </a></li>
</ul>
<h2 className="Categoriesholder">Price</h2>
<ul className="Categories">
<li><a href="#">
$50.00–$100.00
</a></li>
<li><a className="CategoriesHolder" href="#">
$50.00–$100.00
</a></li>
<li><a href="#">
$90.00–$130.00
</a></li>
<li><a href="#">
$80.00–$170.00
</a></li>
<li><a href="#">
$350.000+
</a></li>
</ul>
<h2 className="Categoriesholder">Color</h2>
<ul className="CategoriesColor">
<li><button className="red" ></button><span>Red</span></li>
<li><button className="blue" ></button><span>Blue</span></li>
<li><button className="green" ></button><span>Green</span></li>
<li><button className="white" ></button><span>White</span></li>
<li><button className="black" ></button><span>Black</span></li>
</ul>
<h2 className="Categoriesholder">Size</h2>
<ul className="CategoriesSize">
<li><button>L</button></li>
<li><button a className="CategoriesHolder" >M</button></li>
<li><button>S</button></li>
<li><button>XL</button></li>
<li><button>XXL</button></li>
</ul>

<h2 className="Categoriesholder">Tag</h2>
<ul className="CategoriesTag">
<li><button className="CategoriesTagHolder">All products</button></li>
<li><button>Fashion</button></li>
</ul>
<ul className="CategoriesBottom">
<li><button>Clean</button></li>
<li><button>White</button></li>
<li><button>Shopify</button></li>
</ul>
<ul className="CategoriesBottom">
<li><button>Clean</button></li>
<li><button>White</button></li>
</ul>
<ul className="CategoriesTag">
<li><button className="CategoriesTagHolderall">All products</button></li>
<li><button className="CategoriesTagHolde">Fashion</button></li>
</ul>

</Col>
          </Modal.Body>
          <Modal.Footer>
       
          </Modal.Footer>
        </Modal>
      </div>


</Col>

      </div>
    );
  }
}

export default SortMobile;