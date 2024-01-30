import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaRegHeart, FaSearch } from "react-icons/fa"; // Import FaSearch from react-icons/fa

function Navbar() {
  return (
    <div className="navbar">
      <div className="left-section">
        <NavLink to="/">
          <h2 className="insta-text">InstaShort</h2>
        </NavLink>
      </div>
      <div className="center-section">
        <input type="text" placeholder="Search here..." />
        <FaSearch className="search-icon" />
      </div>
      <div className="right-section">
        <NavLink to="/notifications">
          <FaRegHeart />
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
