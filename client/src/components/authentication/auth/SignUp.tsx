import React from "react";
import MetaData from "../../shared/MetaData";
import { Link } from "react-router-dom";
import Logo from '../../../assets/images/logo.png';

const SignUp: React.FC = () => {
  return (
    <>
      <MetaData title={"InstaShort | Sign-Up"} />
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="w-5/6 lg:w-1/3 md:w-2/3 h-full rounded-xl max-h-full border shadow-md flex flex-col items-center">
          <img src={Logo} alt="" className="w-8 h-8 rounded-full mb-4" />
          <Link to={'/sign-in'}>SignUp</Link>
        </div>
      </div>
    </>
  );
};

export default SignUp;
