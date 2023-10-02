import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './login/Login';
import New from './New';
import Home from './all pages/Home';
import Search from "./all pages/Search";
import Messages from "./all pages/Messages";
import Notifications from "./all pages/Notifications";
import Reels from "./all pages/Reels";
import Settings from "./all pages/Settings";

const router = createBrowserRouter([
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
  ,
  {
    path: "/Reels",
    element: <Reels />,
  },
  ,
  {
    path: "/Messages",
    element: <Messages />,
  },
  ,
  {
    path: "/Settings",
    element: <Settings />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}


export default App;
