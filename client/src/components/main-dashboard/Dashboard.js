import React, { useState } from 'react';
import Navigation from './Navigation'
import LoginForm from './LoginForm';
import Register from './Register';
import './dashboard.css'; 
import ramen from '../../assets/niggets.jpg'


import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function Dashboard() {

  const adminUser = {
      username: 'admin',
      email: "admin@admin.com",
      password: "admin123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const login = details => {

      if (details.email === adminUser.email && details.password === adminUser.password) {
        setUser({
          name: details.name,
          email: details.email
        })
    } else {
          setError("Details do not match!");
    }
  }

  // const logout = () => {
  //     setUser({name: "", email: ""});
  // }

  return (
    <>
      <Navigation />
      <div className="hero-section">
        <div className = "left-side">
          <img src={ramen} alt="ramen" className="hero"/>
        </div>
        <div className = "right-side">
         <LoginForm login={login} error={error}/>
          <Tabs 
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3 toggle">
            <Tab eventKey="login" title="Login" id="login">
              <div>
                {(user.email !== "") ? (
                  <div className="welcome">
                    <h2>Welcome, <span>{user.name}</span></h2> */}
                    {/* <button onClick={logout}>Logout</button> */}
                  </div>
                ): (
                  <LoginForm login={login} error={error}/>
                  )}
              </div>
            </Tab>
            <Tab eventKey="register" title="Register">
              <Register />
            </Tab>
          </Tabs>
        </div>
      </div>
</>
    
  );
}

export default Dashboard;