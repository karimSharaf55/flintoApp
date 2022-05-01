import React, { Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap';

class Categories extends Component {
  render() {
    return (
      <div className="Categoriesi">

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
      </div>
    );
  }
}

export default Categories;