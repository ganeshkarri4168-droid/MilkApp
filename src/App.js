// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./Login/Login.jsx";
import Dashboard from "./screens/Admin/DashboardScreen.jsx";
import "./App.css";
import AddCustomerScreen from "./screens/Admin/AddCustomerScreen.jsx";
import AllCustomerScreen from "./screens/Admin/AllCustomerScreen.jsx";
// import Navbar from "./components/Navbar.jsx";
// import Footer from "./components/Footer.jsx";
import Home from "./screens/Home.jsx"; // Correct import
// import Services from "./pages/home/Services.jsx";
function App() {
  return (
    <Router>
  

      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/AddCustomerScreen" element={<AddCustomerScreen />} />
          <Route path="/AllCustomerScreen" element={<AllCustomerScreen />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>

     
    </Router>
  );
}

export default App;
