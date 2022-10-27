import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeNavbar from "./Navbar";
import Card from "react-bootstrap/Card";
import { FiSearch } from "react-icons/fi";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "./CartSlice";
import { useGetAllMenu_itemsQuery } from "./ProductsApi";
import { GrFormClose } from "react-icons/gr";


export default function UserHomepage({order}) {

  const { items: menu_items, status } = useSelector(
    (state) => state.menu_items
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const { data, error, isLoading } = useGetAllMenu_itemsQuery();
  console.log("Api", isLoading);

  const handleAddToCart = (menu_item) => {
    dispatch(addToCart(menu_item));
    navigate("/cart");
  };

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
  

  const foodcard = (
    <div>
      {/* <h2>Orders of the Day</h2> */}
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
    </div>
  );

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
          <div className="search">
            <div className="searchInputs">
              <div className="d-flex">
                <input
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
              </div>
            </div>
          </div>
        </div>
        <div className="card-food">
<<<<<<< HEAD
          <div className="home-container">
            <h2>Orders of the Day</h2>
            {status === "success" && filteredData.length === 0 ? (
              <>{foodcard}</>
            ) : status === "success" && filteredData.length !== 0 ? (
              <div className="searchProducts">
                {filteredData.map((product, key) => {
                  return (
                    <div className="products">
                      <div key={product.id} className="product">
                        <h3>{product.name}</h3>
                        <img src={product.image_url} alt={product.name} />
                        <div className="details">
                          <span>{product.description}</span>
                          <span className="price">${product.price}</span>
                        </div>
                        <button onClick={() => handleAddToCart(product)}>
                          Book meal
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : status === "pending" ? (
              <p>Loading...</p>
            ) : (
              <p>Unexpected error occured...</p>
            )}
          </div>
=======
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
>>>>>>> eb2a904073bba3a788d602e1deb3773bf694919f
        </div>
      </main>
    </div>
  );
}
