import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { sidebarLinks } from "../../constants/index";
import LogOut from "../../assets/icons/logout.svg";
import { INavLink } from "../../types/index";
import Logo from "../../assets/images/logo.png";

function LeftSidebar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isLoading = false;
  const user = { email: "example@example.com" };
  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-11">
        <Link to="/" className="flex gap-1 ml-3 mt-3 items-center">
          <img
            src={Logo}
            alt="logo"
            width={25}
            height={25}
            className="rounded-2xl"
          />
          <p className="text-gray-300 ml-2 font-bold">InstaShort</p>
        </Link>
        <ul className="flex flex-col gap-2">
          {sidebarLinks.map((link: INavLink) => {
            const isActive = pathname === link.route;

            return (
              <li
                key={link.label}
                className={`leftsidebar-link group ${
                  isActive && "bg-primary-500"
                }`}
              >
                <NavLink
                  to={link.route}
                  className="flex gap-3 items-center p-3"
                >
                  <img
                    src={link.imgURL}
                    alt={""}
                    className={`group-hover:invert-white ${
                      isActive && "invert-white"
                    }`}
                  />
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <button className="shad-button_ghost mb-4">
        <img src={LogOut} alt="logout" className="ml-4" />
        <p className="small-medium lg:base-medium">Logout</p>
      </button>
    </nav>
  );
}

export default LeftSidebar;
