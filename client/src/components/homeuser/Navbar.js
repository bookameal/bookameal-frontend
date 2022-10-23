import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap/dist/css/bootstrap.min.css";
import { FiSearch } from "react-icons/fi";
import { MdOutlineNotificationAdd } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

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
            <Nav.Link href="#action1" className=" menu">
              Menu
            </Nav.Link>
            <Nav.Link href="#action2" className="orders">
              MyOrders
            </Nav.Link>
            <Nav.Link href="#action2" className="notification">
              <MdOutlineNotificationAdd  size={30} />
            </Nav.Link>
            <Button variant="outline-succss" className="avatar">
              <BsPerson  size={36} />
            </Button>
            <Button variant="outline-succss" className="logout">
              Logout
            </Button>
          </Nav>
          <div>
            <Link className="cart" to="/cart">
              Meals<AiOutlineShoppingCart className="carticon" />
            </Link>
            <span className="bag-quantity">
              <span>{cartTotalQuantity}</span>
              {/* <span>3</span> */}
            </span>
          </div>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search for food"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-succss" className="search">
              <FiSearch />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HomeNavbar;
