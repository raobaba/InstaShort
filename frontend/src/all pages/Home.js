import React from 'react'
import Nav from '../nav menu/Nav';
import "../App.css";
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';


const Home = () => {
  return (
    <>
       <div className='content'>
        <div>Home</div>
      </div>
    </>
  );
}

export default Home