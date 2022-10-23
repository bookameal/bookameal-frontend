import React, { useState } from 'react';
import LoginForm from './LoginForm';
import Register from './Register';
import './dashboard.css'; 


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
        console.log("Details do not match!")
  }
}

  const logout = () => {
      setUser({name: "", email: ""});
  }

  return (
      <div className="hero-section">
        <div className = "left-side" >Dashboard Carousel</div>
        <div className = "right-side">
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3">
            <Tab eventKey="login" title="Login">
              <div>
                {(user.email !== "") ? (
                  <div className="welcome">
                    <h2>Welcome, <span>{user.name}</span></h2>
                    <button onClick={logout}>Logout</button>
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

    
  );
}

export default Dashboard;