import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Loader from "../components/shared/Loader";
import Topbar from "../components/shared/Topbar";
import Bottombar from "../components/shared/Bottombar";
import LeftSidebar from "../components/shared/LeftSidebar";
import Placeholder from "../assets/icons/profile-placeholder.svg";

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
      <div className="lg:w-80 w-40 h-full px-10 py-5 bg-dark-2 hidden md:block">
        {isLoading || !user.email ? (
          <div className="h-14">
            <Loader />
          </div>
        ) : (
          <Link to={`/profile/${1}`} className="flex gap-3 items-center">
            <img
              src={Placeholder}
              alt="profile"
              className="h-14 w-14 rounded-full"
            />
            <div className="flex flex-col">
              <p className="body-bold">{"Rajan Kumar"}</p>
              <p className="small-regular text-light-3">@{"rajanrao"}</p>
            </div>
          </Link>
        )}
      </div>

      <Bottombar />
    </div>
  );
};

export default RootLayout;
