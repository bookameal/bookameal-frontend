import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Cart from "../homeuser/Cart";
import UserHomepage from "../homeuser/UserHomepage";
import NotFound from "../NotFound";
import Orders from "./Order";

function App() {
  
  return (
    <Router>
      <Routes>
      <Route path='/cart' element={<Cart />} />
      <Route path='/orders' element={<Orders />} />
      <Route path="/not-found" element={<NotFound/>} />
      <Route path="/" element={<UserHomepage />} />
       
        {/* <Navigate to="/not-found" /> */}
      </Routes>
    </Router>
  );
}

export default App;
