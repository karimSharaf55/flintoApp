import React, { Component } from 'react';
import {NavItem,} from 'react-bootstrap';
import {Grid,Row,Col} from 'react-bootstrap';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
      <Grid>
<Row>
<Col md={6} xs={12} sm={6} >
<div className="Contact-Title">
<h2 className="login-title" >Login<span className="are-vendor"><a href="#">Login as a Vendor</a></span></h2>
<p>Hello, login to your account</p>
<form><label>Phone Number</label>
        <input placeholder={1097152193} type="text" className="form-control" />
        <label>Password</label>
        <input placeholder="******" type="password" className="form-control" />
        <div className="login-lost"><span className="forgot-login">
            <a href="/reset-password">Forgot Your password ?</a> </span>
        </div>
        <input className="login-sub main-btn" type="submit" defaultValue="Login" />
      </form>
</div>


</Col>
<Col md={6} xs={12} sm={6} >
<div className="Contact-Title">
<h2 className="login-title" >REGISTER<span className="are-vendor"><a href="#">ARE YOU A VENDOR?</a></span></h2>
<p>Hello, regeister to your account</p>
<form><label>Phone Number</label>
        <input placeholder={1097152193} type="text" className="form-control" />
        <label>Password</label>
        <input placeholder="******" type="password" className="form-control" />
        <label>Confirm Password</label>
        <input placeholder="******" type="password" className="form-controlHolder" />
        <input className="login-sub main-btn" type="submit" defaultValue="Login" />
      </form>
</div>
</Col>
</Row>
      </Grid>
      </div>
    );
  }
}

export default Contact;
