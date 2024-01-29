import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import {
  FaHome,
  FaSearch,
  FaCompass,
  FaPlay,
  FaEnvelope,
  FaBell,
  FaPlus,
  FaUser,
  FaEllipsisH,
} from "react-icons/fa";

function SideBar() {
  return (
    <div className="sidebar">
      <Link>
        <h2 className="logo">
          InstaShort
        </h2>
      </Link>
      <Link to="/" className="sidebar-item">
        <FaHome className="sidebar-icon" />
        <span>Home</span>
      </Link>
      <Link to="/search" className="sidebar-item">
        <FaSearch className="sidebar-icon" />
        <span>Search</span>
      </Link>
      <Link to="/explore" className="sidebar-item">
        <FaCompass className="sidebar-icon" />
        <span>Explore</span>
      </Link>
      <Link to="/reels" className="sidebar-item">
        <FaPlay className="sidebar-icon" />
        <span>Reels</span>
      </Link>
      <Link to="/messages" className="sidebar-item">
        <FaEnvelope className="sidebar-icon" />
        <span>Messages</span>
      </Link>
      <Link to="/notifications" className="sidebar-item">
        <FaBell className="sidebar-icon" />
        <span>Notifications</span>
      </Link>
      <Link to="/create" className="sidebar-item">
        <FaPlus className="sidebar-icon" />
        <span>Create</span>
      </Link>
      <Link to="/profile" className="sidebar-item">
        <FaUser className="sidebar-icon" />
        <span>Profile</span>
      </Link>
      <Link to="/more" className="sidebar-item">
        <FaEllipsisH className="sidebar-icon" />
        <span>More</span>
      </Link>
    </div>
  );
}

export default SideBar;
