import React from 'react';
import Login from './Login';
import Register from './Register';
import './dashboard.css'; 


import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function Dashboard() {
  return(
    
      <div classname="hero-section">
        <div className = "left-side" >Dashboard Carousel</div>
        <div className = "right-side"> Sign
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3">
            <Tab eventKey="login" title="Login">
              <Login />
            </Tab>
            <Tab eventKey="register" title="Register">
              <Register />
            </Tab>
          </Tabs>
        </div>
      </div>

    
  )
}

export default Dashboard;