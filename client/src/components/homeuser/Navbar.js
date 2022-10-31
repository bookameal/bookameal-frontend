import React,{useState} from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdOutlineNotificationAdd} from 'react-icons/md';
import { Link } from "react-router-dom";
import {BsPerson} from 'react-icons/bs';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useSelector} from "react-redux";

function HomeNavbar() {

  const { cartTotalQuantity } = useSelector((state) => state.cart);

  const [user, setUser] = useState(null);
  const navigate=useNavigate()

  function handleLogoutClick() {
    fetch("https://bookameal-backend.herokuapp.com/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null)
        navigate("/login")
      }
    });
  }


  return (
    <Navbar bg="light" expand="lg" className="nav">
      <Container fluid>
        <Navbar.Brand href="#" className="brand">
          Book-a-meal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="nnavcontentavbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div></div>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" className =' menu'>Menu</Nav.Link>
            <Nav.Link href="/UserOrder" className='orders'>My Orders</Nav.Link>
            <Nav.Link href="#action2" className='notification'>< MdOutlineNotificationAdd/></Nav.Link>
            <Button variant="outline-succss" className='avatar'><BsPerson/></Button>
            <Button style={{float: 'right', marginRight: 10 + 'px'}} variant="outline-success" onClick={handleLogoutClick} className='logout'>Logout</Button>
            
          </Nav>
          <div>
            <Link className="cart" to="/cart">
              Meals
              <AiOutlineShoppingCart className="carticon" />
            </Link>
            <span className="bag-quantity">
              <span>{cartTotalQuantity}</span>
            </span>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HomeNavbar;
