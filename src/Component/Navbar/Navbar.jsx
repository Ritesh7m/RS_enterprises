import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.jpg';

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="RS Enterprises Logo" />
        <p>RS-Enterprises</p>
      </div>
      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className={isMenuOpen ? "bar open" : "bar"}></span>
        <span className={isMenuOpen ? "bar open" : "bar"}></span>
        <span className={isMenuOpen ? "bar open" : "bar"}></span>
      </div>
      <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <li onClick={() => { setMenu("Home"); setIsMenuOpen(false); }}>Home{menu === "Home" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("Product"); setIsMenuOpen(false); }}>Product{menu === "Product" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("Services"); setIsMenuOpen(false); }}>Services{menu === "Services" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("Contact-us"); setIsMenuOpen(false); }}>Contact-us{menu === "Contact-us" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <button className="login-btn">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
