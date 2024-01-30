// SideBar.js

import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { GrHomeRounded } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";
import { MdOutlineExplore } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { VscDiffAdded } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";

function SideBar() {
  return (
    <div className="sidebar">
       <NavLink to="/" className='logo-contain'>
        <h2 className="logo">InstaShort</h2>
      </NavLink>
      <NavLink to="/" className="sidebar-item" activeClassName="active">
        <GrHomeRounded className="sidebar-icon" />
        <span>Home</span>
      </NavLink>
      <NavLink to="/search" className="sidebar-item" activeClassName="active">
        <BsSearch className="sidebar-icon" />
        <span>Search</span>
      </NavLink>
      <NavLink to="/explore" className="sidebar-item" activeClassName="active">
        <MdOutlineExplore className="sidebar-icon" />
        <span>Explore</span>
      </NavLink>
      <NavLink to="/reels" className="sidebar-item" activeClassName="active">
        <FaPlay className="sidebar-icon" />
        <span>Reels</span>
      </NavLink>
      <NavLink to="/messages" className="sidebar-item" activeClassName="active">
        <BsFillSendFill className="sidebar-icon" />
        <span>Messages</span>
      </NavLink>
      <NavLink to="/notifications" className="sidebar-item" activeClassName="active">
        <FaRegHeart className="sidebar-icon" />
        <span>Notifications</span>
      </NavLink>
      <NavLink to="/create" className="sidebar-item" activeClassName="active">
        <VscDiffAdded className="sidebar-icon" />
        <span>Create</span>
      </NavLink>
      <NavLink to="/profile" className="sidebar-item" activeClassName="active">
        <CgProfile className="sidebar-icon" />
        <span>Profile</span>
      </NavLink>
      <NavLink to="/more" className="sidebar-item" activeClassName="active">
        <FiMenu className="sidebar-icon" />
        <span>More</span>
      </NavLink>
    </div>
  );
}

export default SideBar;
