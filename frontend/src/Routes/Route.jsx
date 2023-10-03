import { createBrowserRouter } from 'react-router-dom';
import React from 'react'; // Import React
import Login from "../Authentication/Login"
import Home from "../Components/Home"
import Search from "../Components/Search";
import Messages from "../Components/Messages";
import Notifications from "../Components/Notifications";
import Reels from "../Components/Reels";
import Settings from "../Components/Settings";
import Layout from '../Components/Layout';
import Profile from '../Components/Profile';

// Define your routes using createBrowserRouter
const Route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/Search",
        element: <Search />,
      },
      {
        path: "/Notifications",
        element: <Notifications />,
      },
      {
        path: "/Reels",
        element: <Reels />,
      },
      {
        path: "/Messages",
        element: <Messages />,
      },
      {
        path: "/Settings",
        element: <Settings />,
      },
      {
        path: "/Profile",
        element: <Profile />,
      },
    ]
  },
]);

// Export the router
export { Route };
