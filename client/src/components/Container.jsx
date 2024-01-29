import React from "react";
import SideBar from "./SideBar";
import Routing from "../route/Routing";
import './Container.css';

function Container() {
  return (
    <div className="container">
      <div className="sidebar-container">
        <SideBar />
      </div>
      <div className="routing-container">
        <Routing />
      </div>
    </div>
  );
}

export default Container;
