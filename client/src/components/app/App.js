import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserHomepage from "../homeuser/UserHomepage";
import '../../App.css';
import Dashboard from '../main-dashboard/Dashboard';
import LoginForm from '../main-dashboard/LoginForm';
import Register from '../main-dashboard/Register';
// import Form from './components/Credentials/Form';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/UserHome" element={<UserHomepage />} />
        <Route path='/login' element={<LoginForm />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </Router>
  );
}

export default App;
