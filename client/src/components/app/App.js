import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import UserHomepage from "../homeuser/UserHomepage";

function App() {
  return (
    // <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<UserHomepage />} />
      </Routes>
    </Router>
  );
}

export default App;