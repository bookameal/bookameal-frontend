import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdOutlineNotificationAdd} from 'react-icons/md';
import { Link } from "react-router-dom";
import {BsPerson} from 'react-icons/bs';
import {AiOutlineShoppingCart} from 'react-icons/ai'
// import useGetAllMenu_itemsQuery from "react-bootstrap/useGetAllMenu_itemsQuery";
import { useSelector, useDispatch } from "react-redux";

function HomeNavbar() {

  const { cartTotalQuantity } = useSelector((state) => state.cart);

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
            <Nav.Link href="#action2" className='orders'>My Orders</Nav.Link>
            <Nav.Link href="#action2" className='notification'>< MdOutlineNotificationAdd/></Nav.Link>
            <Button variant="outline-succss" className='avatar'><BsPerson/></Button>
            <Button variant="outline-succss" className='logout'>Logout</Button>
            
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
