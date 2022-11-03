import React from 'react';
import Nav from '../admin-dashboard/Nav'; 
import SetMenu from './adminuser/SetMenu';
import './admindash.css'
import '../homeuser/user.css';



function Admin () {


    return (
        <div className="admin">
            <Nav />
            <div>
            <h2 className="menutoday" style={{position:"relative", marginTop:"-100px",fontWeight:"600", fontSize:"40px", width:"100%", textAlign:"center"}}><br/><br/>Menu Items</h2>
            </div>
            <SetMenu />
        </div>
    );   
}


export default Admin;