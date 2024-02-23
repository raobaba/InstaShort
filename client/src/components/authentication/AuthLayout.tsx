import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import social from '../../assets/images/socialmedia.jpg'

const AuthLayout: React.FC = () => {
  const isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <img
            src={social}
            alt="logo"
            className="hidden xl:block h-screen w-1/2 object-fill bg-no-repeat"
          />
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>
        </>
      )}
    </>
  );
};

export default AuthLayout;
