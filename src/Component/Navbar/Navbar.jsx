import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.jpg';



const Navbar = () => {
const [menu,setMenu] = useState("Home");

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="RS Enterprises Logo" />
        <p>RS-Enterprises</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("Home")}}>Home{menu==="Home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Product")}}>Product{menu==="Product"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Services")}}>Services{menu==="Services"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Contact-us")}}>Contact-us{menu==="Contact-us"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <button className="login-btn">Login</button>
      </div>
    </div>
  );
}

export default Navbar;
