import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import InstaShort from "../assets/InstaShort.png";
import { GrHomeRounded } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";
import { MdOutlineExplore } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { VscDiffAdded } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import { PiVideoDuotone } from "react-icons/pi";
import SearchModal from "./Search/SearchModal";
import NotificationModal from "./Notifications/NotificationModal";
import CreateModal from "./Create/CreateModal";
function SideBar() {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isNotificationModalOpen,setIsNotificationModalOpen] = useState(false);
  const [isCreateModalOpen,setIsCreateModalOpen] = useState(false);
  const openCreateModal = ()=>{
    setIsCreateModalOpen(true);
  }
  const closeCreateModal = ()=>{
    setIsCreateModalOpen(false)
  }
  const openNotificationModal = ()=>{
    setIsNotificationModalOpen(true);
  }
  const closeNotificationModal = ()=>{
    setIsNotificationModalOpen(false);
  }
  const openSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
  };
  const navigationItems = [
    { to: "/", icon: <GrHomeRounded />, label: "Home" },
    {
      to: "/",
      icon: <BsSearch className="sidebar-icon" />,
      label: "Search",
      onClick: openSearchModal,
    },
    { to: "/explore", icon: <MdOutlineExplore />, label: "Explore" },
    { to: "/reels", icon: <PiVideoDuotone />, label: "Reels" },
    { to: "/messages", icon: <BsFillSendFill />, label: "Messages" },
    {
      to: "/",
      icon: <FaRegHeart />,
      label: "Notifications",
      onClick: openNotificationModal,
    },
    { icon: <VscDiffAdded />, label: "Create",onClick: openCreateModal },
    { to: "/profile", icon: <CgProfile />, label: "Profile" },
    { to: "/more", icon: <FiMenu />, label: "More" },
  ];

  return (
    <div className="sidebar">
      <NavLink to="/" className="logo-contain">
        <img
          src={InstaShort}
          className="instaShort"
          alt="instashort-logo"
          width={25}
          height={25}
        />
        <h2 className="logo">InstaShort</h2>
      </NavLink>

      {navigationItems.map((item, index) => (
        <NavLink
          key={index}
          to={item.to}
          className="sidebar-item"
          activeClassName="active"
          onClick={item.onClick || (() => {})}
        >
          {item.icon &&
            React.cloneElement(item.icon, { className: "sidebar-icon" })}
          <span>{item.label}</span>
        </NavLink>
      ))}
      {isCreateModalOpen && <CreateModal onClose={closeCreateModal} />}
      {isNotificationModalOpen && <NotificationModal onClose={closeNotificationModal} />}
      {isSearchModalOpen && <SearchModal onClose={closeSearchModal} />}
    </div>
  );
}

export default SideBar;
