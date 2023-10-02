import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Login = () => {
  return (
    <div><Outlet/>
    <Link to="Home">Home</Link>
    </div>
  )
}

export default Login