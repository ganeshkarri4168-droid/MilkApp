import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // <-- for navigation

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Services", to: "services" },
    { name: "Pricing", to: "pricing" },
    { name: "Contact", to: "contact" },
  ];

  // Navigate to login page
  const goToLogin = () => {
    navigate("/login");
    setIsOpen(false); // close mobile menu if open
  };

  return (
    <nav style={styles.navbar}>
      <img src="/milk.png" alt="Logo" style={styles.logo} />

      {/* Desktop Menu */}
      <div style={styles.menuDesktop}>
        {menuItems.map((item) => (
          <ScrollLink
            key={item.to}
            to={item.to}
            smooth={true}
            duration={500}
            style={styles.link}
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </ScrollLink>
        ))}
        <button style={styles.signupButton} onClick={goToLogin}>
          Sign In
        </button>
      </div>

      {/* Hamburger Icon */}
      <div style={styles.hamburger} onClick={toggleMenu}>
        <div style={styles.bar}></div>
        <div style={styles.bar}></div>
        <div style={styles.bar}></div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={styles.menuMobile}>
          {menuItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              style={styles.mobileLink}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </ScrollLink>
          ))}
          <button style={styles.signupButton} onClick={goToLogin}>
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
};

// Styles (same as your original code)
const styles = {
  navbar: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    background: "linear-gradient(90deg, #8e2de2, #ff5f6d)",
    padding: "15px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
  },
  logo: {
    height: "50px",
  },
  menuDesktop: {
    display: "flex",
    alignItems: "center",
    gap: "100px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    cursor: "pointer",
  },
  signupButton: {
    backgroundColor: "white",
    color: "#0d95fdff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "20px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  hamburger: {
    display: "none",
    flexDirection: "column",
    cursor: "pointer",
    gap: "5px",
  },
  bar: {
    width: "25px",
    height: "3px",
    backgroundColor: "white",
  },
  menuMobile: {
    position: "absolute",
    top: "65px",
    right: "20px",
    background: "#0d95fdff",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    padding: "20px",
    borderRadius: "10px",
  },
  mobileLink: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "18px",
    cursor: "pointer",
  },
};

// Media Queries
const mediaQuery = window.matchMedia("(max-width: 768px)");
if (mediaQuery.matches) {
  styles.menuDesktop.display = "none";
  styles.hamburger.display = "flex";
}

export default Navbar;
