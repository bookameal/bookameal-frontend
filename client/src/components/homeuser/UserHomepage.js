import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeNavbar from "./Navbar";
import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { addToCart } from "./CartSlice";
import { useGetAllProductsQuery } from "./ProductsApi";

export default function UserHomepage() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate('/cart')
  };

  const { data, error, isLoading } = useGetAllProductsQuery();
  console.log("Api", isLoading);
  return (
    <div>
      <HomeNavbar />
      <main>
        <div className="wrapper">
          <div className="container">
            {/* <Card className="bg-light text-black"> */}
            <Card body className="cardbody">
              <div className="caro">
                <Carousel>
                  <Carousel.Item interval={2000}>
                    <img
                      className="d-block w-200 "
                      src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img
                      className="d-block w-200 "
                      src="https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJyZWFrZmFzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img
                      className="d-block w-200 "
                      src="https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJyZWFrZmFzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img
                      className="d-block w-200 "
                      src="https://images.unsplash.com/photo-1538220856186-0be0e085984d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJyZWFrZmFzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img
                      className="d-block w-200 "
                      src="https://plus.unsplash.com/premium_photo-1661626833959-e051eff9d551?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJydW5jaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img
                      className="d-block w-200 "
                      src="https://images.unsplash.com/photo-1574783756547-258b3c720fe9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJydW5jaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img
                      className="d-block w-200 "
                      src="https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJyZWFrZmFzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                      alt="First slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="special">TODAY’S SPECIAL MEALS</div>
              <div className="roast">Roast Lamb &</div>
              <div className="main-dish">Other Main Dishes</div>
            </Card>
          </div>
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
              <Button variant="primary" onClick={() => handleAddToCart()}>Order</Button>
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
              <Button variant="primary" onClick={() => handleAddToCart()}>Order</Button>
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
              <Button variant="primary"  onClick={() => handleAddToCart()}>Order</Button>
            </Card.Body>
          </Card>



          <div className="home-container">
          {/* {status === "success" ? ( */}
        <>
          <h2>New Arrivals</h2>
          <div className="products">
            {data &&
              data?.map((product) => (
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
              ))}
          </div>
        </>
        </div>
        </div>
      </main>
    </div>
  );
}
