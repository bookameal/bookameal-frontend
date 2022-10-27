import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeNavbar from "./Navbar";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

export default function UserHomepage() {
  return (
    <div>
      <HomeNavbar />
      <main>
        <div className="wrapper">
          <div className="container">
            {/* <Card className="bg-light text-black"> */}
            <Card body className="cardbody">
              <Card.Img
                className="image"
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="Card image"
              />
              <div className="special">TODAY’S SPECIAL</div>
              <div className="roast">Roast Lamb</div>
              <div className="main-dish">Main Dish</div>
            </Card>
          </div>
        </div>
        <div>
          <Link className="cart" to="/cart">
            My Food Cart <AiOutlineShoppingCart />
          </Link>
        </div>

        <div className="caro">
          <Carousel>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 h-45"
                src="https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJyZWFrZmFzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 h-45"
                src="https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJyZWFrZmFzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 h-45"
                src="https://images.unsplash.com/photo-1538220856186-0be0e085984d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJyZWFrZmFzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 h-45"
                src="https://plus.unsplash.com/premium_photo-1661626833959-e051eff9d551?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJydW5jaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 h-45"
                src="https://images.unsplash.com/photo-1574783756547-258b3c720fe9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJydW5jaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 h-45"
                src="https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJyZWFrZmFzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="First slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="card-food">
          <Card style={{ width: "18rem" }} className="cards">
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGx1bmNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
            <Card.Body>
              <Card.Title> Sushi </Card.Title>
              <Card.Text>$32 min sum</Card.Text>
              <Button variant="primary">Order</Button>
              {/* <Link to="/register" className="register"><Button variant="primary">Order</Button></Link> */}
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="cards">
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />
            <Card.Body>
              <Card.Title> Sushi </Card.Title>
              <Card.Text>$32 min sum</Card.Text>
              <Button variant="primary">Order</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="cards">
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1657299170950-87e5b0eaf77c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8bHVuY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            />
            <Card.Body>
              <Card.Title> Sushi </Card.Title>
              <Card.Text>$32 min sum</Card.Text>
              <Button variant="primary">Order</Button>
            </Card.Body>
          </Card>
        </div>
      </main>
    </div>
  );
}
