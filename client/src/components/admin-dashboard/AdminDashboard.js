import React from 'react';
import Navigation from '../main-dashboard/Navigation'; 
import './admindash.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// import Order from '../order/Order';
import Orders from './OrderList';
import AddItem from './adminuser/AddItem';
// import EditForm from './adminuser/EditForm';
// import SetMenu from './adminuser/SetMenu';
// import Menu from "./adminuser/"
import '../homeuser/user.css';



function Admin () {


    return (
        <div className="admin">
            <Navigation />
            <div>
            <h2 className="menutoday" style={{fontWeight:"600", fontSize:"40px", width:"100%", textAlign:"center"}}><br/><br/>Menu Items</h2>
            </div>
            {/* <SetMenu /> */}
            {/* <Order />
            <Orders /> */}
            <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3 toggle">
            <Tab eventKey="editmenu" title="Add Item">
              <AddItem />
            </Tab>
            
            {/* <Tab eventKey="editmenu" title="Edit Menu">
              <EditForm />
            </Tab> */}
            {/* <Tab eventKey="menu" title="Menu">
              <Menu />
            </Tab> */}
            <Tab eventKey="order" title="Orders" id="order">
              <div>
              <Orders />
              </div>
            </Tab>
            {/* <Tab eventKey="order" title="Order" id="order">
              <div>
              <Order />
              </div>
            </Tab> */}
            </Tabs>
        </div>
    );   
}


export default Admin;