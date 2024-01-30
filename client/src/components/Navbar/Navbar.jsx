import React from 'react'
import './Navbar.css'
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className='navbar'>
       <div>
       <NavLink to="/" className="logo-contain">
        <h2 className="logo">InstaShort</h2>
      </NavLink>
       </div>
       <div>
        <input type="text" placeholder='search here...' />
       </div>
       <div></div>
    </div>
  )
}

export default Navbar