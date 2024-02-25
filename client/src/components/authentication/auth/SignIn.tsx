import React from "react";
import MetaData from "../../shared/MetaData";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo.png";
import Email from "../../../assets/images/Email.png";
import Google from "../../../assets/images/Google.png";

const SignIn: React.FC = () => {
  return (
    <>
      <MetaData title={"InstaShort | Sign-In"} />
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="w-5/6 lg:w-1/3 md:w-2/3 h-full rounded-xl max-h-full border shadow-md flex flex-col items-center">
          <img src={Logo} alt="" className="w-8 h-8 rounded-full mt-4" />
          <h2 className="font-bold text-gray-300 sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl ">
          Log in to your account
          </h2>
          <form className="w-full mt-4 flex flex-col items-center">
             <div className="mb-3 w-full flex flex-col items-center">
              <label
                htmlFor="username"
                className="block text-xs text-gray-300 font-medium text-light-2 text-left w-5/6"
              >
                Username <span className="text-red-500 text-sm">*</span>
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter Your username..."
                className="w-5/6 h-10 px-3 border rounded-xl border-gray-300 focus:outline-none focus:ring focus:border-blue-300 bg-transparent partial-background"
              />
            </div>
            <div className="mb-3 w-full flex flex-col items-center">
              <label
                htmlFor="email"
                className="block text-xs text-gray-300 font-medium text-light-2 text-left w-5/6"
              >
                Email <span className="text-red-500 text-sm">*</span>
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter Your email..."
                className="w-5/6 h-10 px-3 border rounded-xl border-gray-300 focus:outline-none focus:ring focus:border-blue-300 bg-transparent partial-background"
              />
            </div>
            <div className="mb-3 w-full flex flex-col items-center">
              <label
                htmlFor="password"
                className="block text-xs text-gray-300 font-medium text-light-2 text-left w-5/6"
              >
                Password <span className="text-red-500 text-sm">*</span>
              </label>
              <input
                type="text"
                id="password"
                name="password"
                placeholder="Enter Your password..."
                className="w-5/6 h-10 px-3 border rounded-xl border-gray-300 focus:outline-none focus:ring focus:border-blue-300 bg-transparent partial-background"
              />
            </div>
            <div className="mb-3 w-full flex flex-col items-center">
              <label
                htmlFor="confirm-password"
                className="block text-xs text-gray-300 font-medium text-light-2 text-left w-5/6"
              >
                Confirm Password <span className="text-red-500 text-sm">*</span>
              </label>
              <input
                type="text"
                id="confirm"
                name="confirm"
                placeholder="Re-Enter Your password..."
                className="w-5/6 h-10 px-3 border rounded-xl border-gray-300 focus:outline-none focus:ring focus:border-blue-300 bg-transparent partial-background"
              />
            </div>
            <button
              type="submit"
              className="w-5/6 h-10 px-6 mt-4 rounded-xl bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              SIGNIN
            </button>
          </form>
          <p className="text-gray-300 sm:mt-0 md:mt-0 lg:mt-0">OR</p>
          <p className="text-small-regular text-gray-300 text-light-2 text-center mt-2">
            Don't have an Accoung ?
            <Link
              to="/sign-up"
              className="text-blue-600 hover:text-red-600 text-small-semibold ml-1"
            >
              Sign Up
            </Link>
          </p>
          <div className="w-full sm:w-5/6 h-auto sm:h-12 mt-5 flex flex-col sm:flex-row justify-around mx-auto items-center">
            <div className="w-5/6 sm:w-10/12 rounded-2xl cursor-pointer border hover:bg-slate-700 text-gray-300 h-auto sm:h-10 py-2 sm:mx-2 mb-2 sm:mb-0 flex items-center justify-center">
              <p className="text-center text-nowrap sm:text-left">
                Continue with
              </p>
              <img src={Google} alt="google" className="ml-2 w-5" />
            </div>
            <div className="w-5/6 rounded-2xl sm:w-10/12 cursor-pointer text-gray-300 hover:bg-slate-700 border h-auto sm:h-10 py-2 sm:mx-2 flex items-center justify-center">
              <p className="text-center text-nowrap sm:text-left">
                Continue with
              </p>
              <img src={Email} alt="email" className="ml-2 w-5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
