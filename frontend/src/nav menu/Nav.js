import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import { AiTwotoneHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { PiFilmReelFill } from "react-icons/pi";
import { AiFillWechat } from "react-icons/ai";
import { AiFillNotification } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import Box from '@mui/material/Box';


const Nav = () => {
  return (
    <>
     <Box sx={{
          bgcolor: '#171717',
          boxShadow: 1,
          borderRadius: 2,
         
          p:1,
          paddingTop:'500px',
          color:'white',
          
        }} className="NavBar">
      
        <div className="NavItems">
          <Link className="link" to="/Home">
            <AiTwotoneHome className="icon" />
            <div className="SidebarText">Home</div>
          </Link>
          <Link className="link" to="/Search">
            <AiOutlineSearch className="icon" />
            <div className="SidebarText SearchMobile">Search</div>
          </Link>
          <Link className="link" to="/Reels">
            <PiFilmReelFill className="icon" />
            <div className="SidebarText">Reels</div>
          </Link>
          <Link className="link" to="/Messages">
            <AiFillWechat className="icon" />
            <div className="SidebarText">Message</div>
          </Link>
          <Link className="link" to="/Notifications">
            <AiFillNotification className="icon" />
            <div className="SidebarText">Notifications</div>
          </Link>
          <Link className="link" to="/Profile">
            <BsFillPersonFill className="icon" />
            <div className="SidebarText">Profile</div>
          </Link>
          <Link className="link" to="/Settings">
            <AiFillSetting className="icon" />
            <div className="SidebarText">Settings</div>
          </Link>
        </div>
       
     
      </Box>
      
    </>
  );
}

export default Nav