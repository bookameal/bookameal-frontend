import React from 'react';
import './login.css';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

// import Sonnet from '../../components/Sonnet';

function Login() {
  return(
    <>
      <div className = "right-side" >Dashboard Carousel</div>
      <div className = "left-side">Login-Signup</div>



    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="login" title="Login">
        Me
      </Tab>
      <Tab eventKey="register" title="Register">
        Ivy
      </Tab>
     
    </Tabs>

    </>
  )
}

export default Login;