import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home.jsx";
import Search from "../components/Search/Search.jsx";
import Explore from "../components/Explore/Explore.jsx";
import Reels from "../components/Reels/Reels.jsx";
import Messages from "../components/Messages/Messages.jsx";
import Notifications from "../components/Notifications/Notifications.jsx";
import Create from "../components/Create/Create.jsx";
import Profile from "../components/Profile/Profile.jsx";
import More from "../components/More/More.jsx";
const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/reels" element={<Reels />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/create" element={<Create />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </>
  );
};

export default Routing;
