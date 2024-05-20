import React from "react";
import "./Header.css";
import Logo from "../../assets/logo1.png";
import Vector from "../../assets/Vector.png";
import { NavLink } from "react-router-dom";

function Header() {
    
  return (
    <nav id="container">
      <div id="sub-container">
        <h3 id="heading">Track you order</h3>
        <img id="icon" src={Vector} alt="Logo" />
      </div>
      <img id="logo" src={Logo} alt="Logo" />
      <ul id="items">
        <li className="item">
          <NavLink to="/home" className={({isActive}) => (isActive? "active-link":"nav-link")}>Home</NavLink>
        </li>

        <li className="item">
          <NavLink to="/service" className={({isActive}) => (isActive? "active-link":"nav-link")}>Service</NavLink>
        </li>

        <li className="item">
          <NavLink to="/about" className={({isActive}) => (isActive? "active-link":"nav-link")}>About Us</NavLink>
        </li>

        <li className="item">
          <NavLink to="/login" className={({isActive}) => (isActive? "active-link":"nav-link")}>Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
