import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogOut from '../../assets/icons/logout.svg'
import Placeholder from '../../assets/icons/profile-placeholder.svg';
import Logo from '../../assets/images/logo.png'

function Topbar() {
  return (
    <section className="topbar">
      <div className="flex-between py-4 px-5 border">
        <Link to="/" className="flex gap-1 items-center">
          <img
            src={Logo}
            alt="logo"
            width={25}
            height={25}
            className="rounded-2xl"
          />
          <p className="text-gray-300 font-semibold">InstaShort</p>
        </Link>

        <div className="flex gap-4">
          <button
            className="shad-button_ghost"
            >
            <img src={LogOut} alt="logout" />
          </button>
          <Link to={`/profile/${1}`} className="flex-center gap-3">
            <img
              src={Placeholder}
              alt="profile"
              className="h-8 w-8 rounded-full"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Topbar;
