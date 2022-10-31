import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Cart from "../homeuser/Cart";
import UserHomepage from "../homeuser/UserHomepage";
import NotFound from "../NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../../App.css';
import Dashboard from '../main-dashboard/Dashboard';
import LoginForm from '../main-dashboard/LoginForm';
import Register from '../main-dashboard/Register';
// import Form from './components/Credentials/Form';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserOrders from "../order/UserOrders";
import AfterOrder from "../order/AfterOrder";




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
        <Route path='/login' element={<LoginForm />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/UserOrder' element={<UserOrders/>}/>
        <Route path='/placed' element={<AfterOrder/>}/>
      </Routes>
    </Router>
  );
}

export default App;
