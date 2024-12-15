import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">QuickRent</div>
      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#gadgets">Gadgets</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
      <button className="signup-btn">Sign Up</button>
    </nav>
  );
};

export default Navbar;
