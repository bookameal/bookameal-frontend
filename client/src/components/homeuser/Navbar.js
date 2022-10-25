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
import { GrFormClose } from "react-icons/gr";
import { useSelector } from "react-redux";
import { useGetAllMenu_itemsQuery } from "./ProductsApi";
import { addToCart } from "./CartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function HomeNavbar() {
  // cart items number navbar
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, error, isLoading } = useGetAllMenu_itemsQuery();

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

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
              <MdOutlineNotificationAdd size={30} />
            </Nav.Link>
            <Button variant="outline-succss" className="avatar">
              <BsPerson size={36} />
            </Button>
            <Button variant="outline-succss" className="logout">
              Logout
            </Button>
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
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search for food"
              className="me-2"
              aria-label="Search"
              value={wordEntered}
              onChange={handleFilter}
            />
            <div className="searchIcon">
              {filteredData.length === 0 ? (
                <Button variant="outline-succss" className="search">
                  <FiSearch />
                </Button>
              ) : (
                <GrFormClose id="clearBtn" onClick={clearInput} />
              )}
            </div>
          </Form>
          <div className="dataResult">
          {filteredData.length !== 0 && (
            <div className="dataResult">
              {filteredData.slice(0, 15).map((product, key) => {
                return (
                  <div key={product.id} className="product">
                    <h3>{product.name}</h3>
                    <img src={product.image} alt={product.name} />
                    <div className="details">
                      <span>{product.desc}</span>
                      <span className="price">${product.price}</span>
                    </div>
                    <button onClick={() => handleAddToCart(product)}>
                      Add To Cart
                    </button>
                  </div>
                );
              })}
            </div>
          )}
          </div> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HomeNavbar;
