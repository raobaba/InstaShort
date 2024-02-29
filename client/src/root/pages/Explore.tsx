import React from "react";
import MetaData from "../../components/shared/MetaData";
import Search from "../../assets/icons/search.svg";
import Filter from "../../assets/icons/filter.svg";
import ProPic from "../../assets/images/profilepic.png";
import Placeholder from "../../assets/icons/profile-placeholder.svg";
import Love from "../../assets/icons/like.svg";
import Save from "../../assets/icons/save.svg";

function Explore() {
  return (
    <>
      <MetaData title={"InstaShort | Explore"} />
      <div className="explore-container">
        <div className="explore-inner_container">
          <h2 className="h3-bold md:h2-bold w-full">Search Posts</h2>
          <div className="flex gap-1 px-4 w-full rounded-lg bg-dark-3">
            <img src={Search} width={24} height={24} alt="search" />
            <input
              type="text"
              placeholder="Search"
              className="explore-search bg-dark-3"
            />
          </div>
        </div>

        <div className="flex-between w-full max-w-5xl mt-16 mb-7">
          <h3 className="body-bold md:h3-bold">Popular Today</h3>

          <div className="flex-center gap-3 bg-dark-3 rounded-xl px-4 py-2 cursor-pointer">
            <p className="small-medium md:base-medium text-light-2">All</p>
            <img src={Filter} width={20} height={20} alt="filter" />
          </div>
        </div>

        <div className="flex flex-wrap gap-9 w-full items-center justify-center max-w-6xl">
          <div className="border w-[313px] h-80 rounded-xl relative">
            <img src={ProPic} alt="" className="h-full w-full z-0 rounded-lg" />
            <div className="flex justify-between w-full h-8 absolute bottom-0 z-10">
              <div className="w-32 h-full flex justify-between">
                <img src={Placeholder} alt="user_profile" className="w-6 h-6" />
                <p>Rajan Kumar</p>
              </div>
              <div className="w-16 h-full flex justify-between">
                <img src={Love} alt="like" className="w-6 h-6"/>
                <img src={Save} alt="save" className="w-6 h-6"/>
              </div>
            </div>
          </div>
          <div className="border w-[313px] h-80 rounded-xl relative">
            <img src={ProPic} alt="" className="h-full w-full z-0 rounded-lg" />
            <div className="flex justify-between w-full h-8 absolute bottom-0 z-10">
              <div className="w-32 h-full flex justify-between">
                <img src={Placeholder} alt="user_profile" className="w-6 h-6" />
                <p>Rajan Kumar</p>
              </div>
              <div className="w-16 h-full flex justify-between">
                <img src={Love} alt="like" className="w-6 h-6"/>
                <img src={Save} alt="save" className="w-6 h-6"/>
              </div>
            </div>
          </div>
          <div className="border w-[313px] h-80 rounded-xl relative">
            <img src={ProPic} alt="" className="h-full w-full z-0 rounded-lg" />
            <div className="flex justify-between w-full h-8 absolute bottom-0 z-10">
              <div className="w-32 h-full flex justify-between">
                <img src={Placeholder} alt="user_profile" className="w-6 h-6" />
                <p>Rajan Kumar</p>
              </div>
              <div className="w-16 h-full flex justify-between">
                <img src={Love} alt="like" className="w-6 h-6"/>
                <img src={Save} alt="save" className="w-6 h-6"/>
              </div>
            </div>
          </div>
          <div className="border w-[313px] h-80 rounded-xl relative">
            <img src={ProPic} alt="" className="h-full w-full z-0 rounded-lg" />
            <div className="flex justify-between w-full h-8 absolute bottom-0 z-10">
              <div className="w-32 h-full flex justify-between">
                <img src={Placeholder} alt="user_profile" className="w-6 h-6" />
                <p>Rajan Kumar</p>
              </div>
              <div className="w-16 h-full flex justify-between">
                <img src={Love} alt="like" className="w-6 h-6"/>
                <img src={Save} alt="save" className="w-6 h-6"/>
              </div>
            </div>
          </div>
          <div className="border w-[313px] h-80 rounded-xl relative">
            <img src={ProPic} alt="" className="h-full w-full z-0 rounded-lg" />
            <div className="flex justify-between w-full h-8 absolute bottom-0 z-10">
              <div className="w-32 h-full flex justify-between">
                <img src={Placeholder} alt="user_profile" className="w-6 h-6" />
                <p>Rajan Kumar</p>
              </div>
              <div className="w-16 h-full flex justify-between">
                <img src={Love} alt="like" className="w-6 h-6"/>
                <img src={Save} alt="save" className="w-6 h-6"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Explore;
