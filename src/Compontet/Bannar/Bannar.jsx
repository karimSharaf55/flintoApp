import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class Bannar extends Component {
render() {
return (

<ScrollAnimation  animateIn='fadeIn'
  animateOut='fadeOut'
 >
 

  
<div className="bannar">
   <div className="container">
      <div className="row masonry-grid">
      
         <div className="col-md-6 col-sm-6 col-lg-4 masonry-column">
            <div>
               <div className="box">
                  <div className="imgBox">
                     <img src={require('../../img/woman.jpg')}/>
                  </div>
               </div>
            </div>
            <div>
               <div className="boxLeftBottom">
                  <div className="imgBoxLeftBottom">
                     <img src={require('../../img/item.jpg')}/>
                  </div>
               </div>
            </div>
         </div>

         <div className="col-md-6 col-sm-6 col-lg-4 masonry-column">
            <div>
               <div className="boxCenter">
                  <div className="imgBoxCenter">
                     <img src={require('../../img/Deal.jpg')}/>
                  </div>
               </div>
            </div>
            <div>
               <div className="boxCenterBottom">
                  <div className="imgBoxCenterBottom">
                     <img src={require('../../img/Accessories.jpg')}/>
                     <div className="LinkChoose">
                     <h2><a href="#">Accessories</a></h2>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="col-md-6 col-sm-12 col-lg-4 masonry-column">
            <div>
               <div className="boxRight">
                  <div className="imgBoxRight">
                     <img src={require('../../img/man.jpg')}/>
                  </div>
               </div>
            </div>
            <div>
               <div className="boxRightBottom">
                  <div className="imgBoxRightBottom">
                     <img src={require('../../img/shoes.jpg')}/>
                     <div className="LinkChoose">
                     <h2><a href="#">Shoes</a></h2>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
</ScrollAnimation>
);
}
}
export default Bannar;