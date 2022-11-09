import React, { useEffect, useState } from "react";
import "./navbar.css";
import tastytreats from "../../assets/titty.gif";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { clearCart } from "./CartSlice";
import { useDispatch, useSelector } from "react-redux";

function HomeNavbar() {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const { cartTotalQuantity } = useSelector((state) => state.cart);

  const navigate = useNavigate();

  function handleLogoutClick() {
    fetch("https://bookameal-backend.herokuapp.com/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        // setUser(null)
        handleClearCart();
        localStorage.removeItem(user);
        navigate("/login");
        localStorage.clear();
      }
    });
  }

  return (
    <div className="navyar">
      <div className="navbar-item-left">
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <img
              src={tastytreats}
              alt="ramen"
              className="logo"
              style={{
                position: "absolute",
                top: "50px",
                left: "25px",
                height: "200px",
                width: "200px",
                zIndex: "11",
                objectFit: "cover",
              }}
            />
          </li>
        </ul>
      </div>
      <div className="navbar-item-right">
        <ul className="nav-menu">
          {/* localStorage.get */}
          <li className="nav-menu-item">
            <Link className="link" to="/">
              <FaHome className="carticon" /> |
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link className="link" to="/cart">
              Cart
              <AiOutlineShoppingCart className="carticon" />
              <span className="numerator">{cartTotalQuantity} </span>
            </Link>
          </li>

          <li className="nav-menu-item">
            <Link className="link" to="/specific">
              | My Orders |
            </Link>
          </li>
          <li className="nav-menu-item">
            <button
              className="link"
              onClick={handleLogoutClick}
              style={{ border: "none" }}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HomeNavbar;
