import React from "react";
import SideBar from "./SideBar";
import Routing from "../route/Routing";
import "./Container.css";
import Navbar from "./Navbar/Navbar";
import MobileFooter from "./Navbar/Mobile-Footer";

function Container() {
  return (
    <>
      <div className="container">
        <div className="sidebar-container">
          <SideBar />
        </div>

        <div className="routing-container">
          <Routing />
        </div>
      </div>
      <div className="mobile">
          <div className="navbar-container">
            <Navbar />
          </div>
          <div className="routing">
            <Routing />
          </div>

          <div className="mobile-footer-container">
            <MobileFooter />
          </div>
        </div>
    </>
  );
}

export default Container;
