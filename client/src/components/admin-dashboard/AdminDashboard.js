import React from 'react';
import Navigation from '../main-dashboard/Navigation'; 
import './admindash.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Order from '../order/Order';
import Orders from './OrderList';

import EditMenu from './adminuser/EditMenu';
import SetMenu from './adminuser/SetMenu';


function Admin () {

    return (
        <div className="admin">
            <Navigation />
            <Order />
            <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3 toggle">
            <Tab eventKey="setmenu" title="Set Menu" id="setmenu">
              <div>
              <SetMenu />
              </div>
            </Tab>
            <Tab eventKey="editmenu" title="Edit Menu">
              <EditMenu />
            </Tab>
            <Tab eventKey="order" title="Orders" id="order">
              <div>
              <Orders />
              </div>
            </Tab>
            </Tabs>
        </div>
    );   
}


export default Admin;