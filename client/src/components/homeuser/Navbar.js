import React from "react";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import "../main-dashboard/navigation.css";
import "./navbar.css";
import tastytreats from '../../assets/titty.gif';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { MdOutlineNotificationAdd} from 'react-icons/md';
import { Link } from "react-router-dom";
// import {BsPerson} from 'react-icons/bs';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useSelector} from "react-redux";
import { FaHome } from "react-icons/fa";


function HomeNavbar() {

  const { cartTotalQuantity } = useSelector((state) => state.cart);

  // const [user, setUser] = useState(null);
  const navigate=useNavigate()

  function handleLogoutClick() {
    fetch("https://bookameal-backend.herokuapp.com/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        // setUser(null)
        navigate("/login")
      }
    });
  }


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
                <Link className="link" to="/">
                <FaHome className="carticon" /> |</Link>
            </li>
            <li className="nav-menu-item" >
                <Link className="link"  to="/cart">Cart  
                <AiOutlineShoppingCart className="carticon" />
                  <span className="numerator">{cartTotalQuantity} </span>
                </Link> 
            </li>

            <li className="nav-menu-item">
                <Link className="link" to="/orders">| My Orders |</Link>
            </li>
            <li className="nav-menu-item">
              <Link className="link" to="/login">Logout</Link>
            </li>
          </ul>
        </div>
        
          
    </div>
  );
}

export default HomeNavbar;
