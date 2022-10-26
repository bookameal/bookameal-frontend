import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeNavbar from "./Navbar";
import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "./CartSlice";
import { useGetAllMenu_itemsQuery } from "./ProductsApi";
import SearchBox from "./Search";

export default function UserHomepage() {
  const { items: menu_items, status } = useSelector(
    (state) => state.menu_items
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, error, isLoading } = useGetAllMenu_itemsQuery();
  console.log("Api", isLoading);

  const handleAddToCart = (menu_item) => {
    dispatch(addToCart(menu_item));
    navigate("/cart");
  };

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

        <div>
          <SearchBox/>
        </div>
        <div className="card-food">
          <div className="home-container">
          {/* <div>
          <SearchBox/>
        </div> */}
            {status === "success" ? (
              <>
                <h2>Orders of the Day</h2>
                <div className="products">
                  {data &&
                    data?.map((menu_item) => (
                      <div key={menu_item.id} className="product">
                        <h3>{menu_item.name}</h3>
                        <img src={menu_item.image_url} alt={menu_item.name} />
                        <div className="details">
                          <span>{menu_item.description}</span>
                          <span className="price">${menu_item.price}</span>
                        </div>
                        <button onClick={() => handleAddToCart(menu_item)}>
                          Book meal
                        </button>
                      </div>
                    ))}
                </div>
              </>
            ) : status === "pending" ? (
              <p>Loading...</p>
            ) : (
              <p>Unexpected error occured...</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
