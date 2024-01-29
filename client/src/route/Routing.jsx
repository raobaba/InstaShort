import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home.jsx";
import Search from "../components/Search/Search.jsx";
const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
};

export default Routing;
