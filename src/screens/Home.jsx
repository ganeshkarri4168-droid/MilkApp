import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

// Import all the home sections
import Home1 from "../pages/home/Home1.jsx";
import About from "../pages/home/About.jsx";
import Services from "../pages/home/Services.jsx";
import Pricing from "../pages/home/Pricing.jsx";
import Contact from "../pages/home/Contact.jsx";
import Address from "../pages/home/Address.jsx";
const Home = () => {
  return (
    <>
      <Navbar />

      <div id="home">
        <Home1 />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="address">
        <Address />
      </div>

      <Footer />
    </>
  );
};

export default Home;
