import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Loader from "../components/shared/Loader";
import Topbar from "../components/shared/Topbar";
import Bottombar from "../components/shared/Bottombar";
import LeftSidebar from "../components/shared/LeftSidebar";
import Placeholder from "../assets/icons/profile-placeholder.svg";
import TopCreater from "../components/shared/TopCreater";

const RootLayout = () => {
  const isLoading = false;
  const user = { email: "example@example.com" };
  return (
    <div className="w-full block md:flex">
      <Topbar />
      <LeftSidebar />
      <section className="flex flex-1 h-full">
        <Outlet />
      </section>
      <div className="lg:w-80 w-full h-full inset-0 bg-dark-2 z-0 hidden lg:block">
        {isLoading || !user.email ? (
          <div className="h-14">
            <Loader />
          </div>
        ) : (
          <Link to={`/profile/${1}`} className="flex px-5 py-5 gap-3 items-center">
            <img
              src={Placeholder}
              alt="profile"
              className="h-14 w-14 rounded-full"
            />
            <div className="flex flex-col">
              <p className="body-bold text-white">{"Rajan Kumar"}</p>
              <p className="small-regular text-gray-300">@{"rajanrao"}</p>
            </div>
            
          </Link>
        )}
        <div className="w-full h-auto">
          <TopCreater/>
        </div>
      </div>

      <Bottombar />
    </div>
  );
};

export default RootLayout;
