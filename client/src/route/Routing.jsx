import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home.jsx";
import Explore from "../components/Explore/Explore.jsx";
import Reels from "../components/Reels/Reels.jsx";
import Messages from "../components/Messages/Messages.jsx";
import Create from "../components/Create/CreateModal.jsx";
import Profile from "../components/Profile/Profile.jsx";
import More from "../components/More/More.jsx";
const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/reels" element={<Reels />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/create" element={<Create />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </>
  );
};

export default Routing;
