import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { FiSearch} from 'react-icons/fi';
import { MdOutlineNotificationAdd} from 'react-icons/md';
import {BsPerson} from 'react-icons/bs';

function HomeNavbar() {
  const [user, setUser] = useState(null);
  const navigate=useNavigate()

  function handleLogoutClick() {
    fetch("http://127.0.0.1:3000/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null)
        navigate("/register")
      }
    });
  }

  return (
    <Navbar bg="light" expand="lg" className='nav'>
      <Container fluid>
        <Navbar.Brand href="" className='brand'>Book-a-meal</Navbar.Brand>
        <Navbar.Toggle aria-controls="nnavcontentavbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <div></div>
          <Nav 
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className =' menu'>Menu</Nav.Link>
            <Nav.Link href="#action2" className='orders'>My Orders</Nav.Link>
            <Nav.Link href="#action2" className='notification'>< MdOutlineNotificationAdd/></Nav.Link>
            <Button variant="outline-succss" className='avatar'><BsPerson/></Button>
            <Button style={{float: 'right', marginRight: 10 + 'px'}} variant="outline-success" onClick={handleLogoutClick} className='logout'>Logout</Button>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-succss" className='search'><FiSearch/></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HomeNavbar;