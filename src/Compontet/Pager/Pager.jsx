import React, { Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap';

class Pager extends Component {
  render() {
    return (
      <div className="Pager">
    
        <Grid>
<Row>
<hr></hr>
<Col md={12} xs={12}>
<div className="paginationholder">
<h2>Next <i class="fa fa-angle-right"></i> </h2>

</div>
   <ul className="pagination">
   
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
   
      </ul>
  
     
</Col>



  
</Row>
<hr></hr>

        </Grid>
      
      </div>
    );
  }
}

export default Pager;