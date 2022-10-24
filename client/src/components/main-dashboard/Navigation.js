import React from 'react'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navigation.css"
import { Link } from "react-router-dom";
import {BsPerson} from 'react-icons/bs';
import tastytreats from '../../assets/tastytreats.gif'

function Navigation() {
  return (
    <div className="navbar">
        <div className = "navbar-item-left">
            <ul className="nav-menu">
                <li className="nav-menu-item" >
                <img src={tastytreats} alt="ramen" className="logo" />
                </li>
            </ul>
        </div>
        <div className = "navbar-item-right">
            <ul className="nav-menu">
            <li className="nav-menu-item" >
                <Link className="link" to="/">Home |</Link>
            </li>
            <li className="nav-menu-item" >
                <Link className="link"  to="/UserHome">Menu |</Link> 
            </li>
            <li className="nav-menu-item">
                <Link className="link" to="#login">Login</Link>
            </li>
            <li className="nav-menu-item">            
                <Button variant="outline-succss" className='avatar'><BsPerson/></Button>
            </li>
            </ul>
        </div>
      </div>
)};

export default Navigation;