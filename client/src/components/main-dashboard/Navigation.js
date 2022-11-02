import React from 'react'
import "./navigation.css"
import { Link } from "react-router-dom";
import tastytreats from '../../assets/titty.gif';
import { FaHome } from "react-icons/fa";

function Navigation() {
  return (
    <div className="navbar">
        <div className = "navbar-item-left">
            <ul className="nav-menu">
                <li className="nav-menu-item" >
                <img src={tastytreats} alt="ramen" className="logo" style={{position:"absolute", top:"75px", left:"25px", height:"175px", width:"200px"}}/>
                </li>
            </ul>
        </div>
        <div className = "navbar-item-right">
            <ul className="nav-menu">
            <li className="nav-menu-item" >
                <Link className="link" to="/"><FaHome className="carticon" /> |</Link>
            </li>
            <li className="nav-menu-item" >
                <Link className="link"  to="/UserHome">Menu |</Link> 
            </li>            

            <li className="nav-menu-item">
                <Link className="link" to="/login">Login |</Link>
            </li>
            <li className="nav-menu-item">
                <Link className="link" to="/additem">AddItem |</Link>
            </li>
           
            {/* <li className="nav-menu_item">
                <Link className="link" to="/OrderGet">OrderGet</Link>
            </li> */}
            </ul>
        </div>
      </div>
)};

export default Navigation;