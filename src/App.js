import React, { Component } from 'react';
import logo from './logo.svg';
import Home from './Compontet/Home/Home';
import Shop from './Compontet/Shop/Shop';
import Journal from './Compontet/Journal/Journal';
import ComingSoon from './Compontet/ComingSoon/ComingSoon';
import { BrowserRouter, Route ,Switch} from "react-router-dom";
import NavbarTop from './Compontet/NavbarTop/NavbarTop';
import Erro from './Compontet/Erro/Erro'
import LogIn from './Compontet/LogIn/LogIn'
import SortMobile from './Compontet/SortMobile/SortMobile';


class App extends Component {

  render() {

    
    return (
   
      <BrowserRouter>

      <div className="hpp">


   
        
            <Switch>

       <Route exact path="/" render={(props) => <NavbarTop />}  component={Home} />
        <Route path="/Shop" component={Shop} />
        <Route path="/singleshop" component={Journal} />
        <Route path="/ComingSoon" component={ComingSoon} />
        <Route path="/Erro" component={Erro} />
        <Route path="/LogIn" component={LogIn} />
        <Route path="/sort" component={SortMobile} />
      

        </Switch>

        </div>
    
        </BrowserRouter>
      
     
);
}
}

export default App;
