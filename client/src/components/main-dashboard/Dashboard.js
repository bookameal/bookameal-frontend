import React from "react";
import Navigation from "./Navigation";
import "./dashboard.css";
import vid from "../../assets/hero-vid.gif";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">
      <Navigation />
      <div className="hero-section">
        <div className="left-side">
          <img src={vid} alt="ramen" className="hero" />
        </div>
        <div className="right-side">
          <h1>The flavors of life are just a bite away!</h1>
          <p>
            At Tasty Treats, we're not just about preparing delicious meals.
            We're a piece of our clients' lives, and the networks in which we
            serve &#128522;
          </p>
          <Link to={`/login`}>
            <button type="button" className="getStarted">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
