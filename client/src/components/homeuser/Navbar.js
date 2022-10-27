import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiSearch} from 'react-icons/fi';
import { MdOutlineNotificationAdd} from 'react-icons/md';
import {BsPerson} from 'react-icons/bs';

function HomeNavbar() {
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
