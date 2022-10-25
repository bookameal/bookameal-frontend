import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Cart from "../homeuser/Cart";
import UserHomepage from "../homeuser/UserHomepage";
import NotFound from "../NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../../App.css';
import Dashboard from '../main-dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  
  return (
    <Router>
       <ToastContainer />
      <Routes>
      <Route path='/cart' element={<Cart />} />
      <Route path="/not-found" element={<NotFound/>} />
      {/* <Route path="/" element={<UserHomepage />} /> */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/UserHome" element={<UserHomepage />} />

      </Routes>
    </Router>
  );
}

export default App;
