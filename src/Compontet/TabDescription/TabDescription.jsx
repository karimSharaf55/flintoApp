import React, { Component } from 'react';
import {Tab,Tabs,Grid,Row,Col} from 'react-bootstrap';

class TabDescription extends Component {
  render() {
    return (
 

        
        
      <div className="TabDescription">
             <Grid>
            <Row>
<Col md={12} sm={12}>
<Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
  <Tab eventKey={1} title="Description">
  <div className="description">
  
  <h2>Description Brand</h2>
  <p>Score a wardrobe win no matter the dress code with our Flinto Collection own-label collection. 
From polished prom to the after party, our London-based design team scour the globe to nail your 
new-season fashion goals with need-right-now dresses, outerwear, shoes and denim in the coolest.</p>
  </div>

  </Tab>
  <Tab eventKey={2} title="Size Guide">
  <div className="description">
  
  <h2>Size Guide Brand</h2>
  <p>Score a wardrobe win no matter the dress code with our Flinto Collection own-label collection. 
From polished prom to the after party, our London-based design team scour the globe to nail your 
new-season fashion goals with need-right-now dresses, outerwear, shoes and denim in the coolest.</p>
  </div>
  </Tab>
  <Tab eventKey={3} title="Shipping">
  <div className="description">
  
  <h2>Shipping Brand</h2>
  <p>Score a wardrobe win no matter the dress code with our Flinto Collection own-label collection. 
From polished prom to the after party, our London-based design team scour the globe to nail your 
new-season fashion goals with need-right-now dresses, outerwear, shoes and denim in the coolest.</p>
  </div>
  </Tab>
  <Tab eventKey={4} title="Reviews (3)">
 <div className="description">
  
  <h2>Reviews Brand</h2>
  <p>Score a wardrobe win no matter the dress code with our Flinto Collection own-label collection. 
From polished prom to the after party, our London-based design team scour the globe to nail your 
new-season fashion goals with need-right-now dresses, outerwear, shoes and denim in the coolest.</p>
  </div>
  </Tab>
</Tabs>;
</Col>
</Row>
        </Grid>
 
      </div>
    );
  }
}

export default TabDescription;