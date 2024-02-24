import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const AuthLayout: React.FC = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex justify-center w-full items-center text-white relative z-10">
            <div>
              <Outlet />
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default AuthLayout;
