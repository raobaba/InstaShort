import React from "react";
import MetaData from "../../components/shared/MetaData";

function AllUsers() {
  return (
    <>
      <MetaData title={"InstaShort | People"} />
      <div className="explore-container">
        <div className="explore-inner_container">
          <h2 className="h3-bold md:h2-bold w-full">People</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 lg:gap-4 xl:grid-cols-3 gap-8 items-center justify-center">
            {Array.from({ length: 20 }, (_, index) => (
              <div
                key={index}
                className="border w-52 h-52 p-4 rounded-xl flex flex-col items-center"
              >
                <img
                  src="https://avatars.githubusercontent.com/u/99542983?v=4"
                  alt="user_url"
                  className="w-20 h-20 rounded-full"
                />
                <p className="font-bold text-lg">Rajan Kumar</p>
                <p className="font-thin text-sm text-slate-300">@raorajan</p>
                <button className="px-5 py-1 bg-green-500 text-white border-none rounded-xl mt-3 font-medium text-lg">Follow</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllUsers;
