import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserHomepage from "../homeuser/UserHomepage";
import '../../App.css';
import Login from '../main-dashboard/Login';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/UserHome" element={<UserHomepage />} />

      </Routes>
    </Router>
  );
}

export default App;
