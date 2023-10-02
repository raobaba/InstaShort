import React from 'react'
import Nav from '../nav menu/Nav'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <Nav />
            <Box ml={4}>
                <Outlet ></Outlet>
            </Box>
        </div>
    )
}

export default Layout