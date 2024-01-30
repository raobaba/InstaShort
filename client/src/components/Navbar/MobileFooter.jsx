import React from 'react';
import './MobileFooter.css';
import { NavLink } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import { MdOutlineExplore } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";
import { VscDiffAdded } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";

function MobileFooter() {
  const navigationItems = [
    { to: "/", icon: <GrHomeRounded /> },
    { to: "/explore", icon: <MdOutlineExplore /> },
    { to: "/reels", icon: <FaPlay /> },
    { to: "/messages", icon: <BsFillSendFill /> },
    { to: "/create", icon: <VscDiffAdded /> },
    { to: "/profile", icon: <CgProfile /> },
    { to: "/more", icon: <FiMenu /> },
  ];

  return (
    <div className='mobile-footer'>
      <div className="mobile-container">
        {navigationItems.map((item, index) => (
          <NavLink to={item.to} key={index} className="icon-link">
            {item.icon}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default MobileFooter;
