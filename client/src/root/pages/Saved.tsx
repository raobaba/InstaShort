import React from "react";
import MetaData from "../../components/shared/MetaData";
import ProPic from "../../assets/images/profilepic.png";
import Placeholder from "../../assets/icons/profile-placeholder.svg";
import Love from "../../assets/icons/like.svg";
import Save from "../../assets/icons/save.svg";

function Saved() {
  return (
    <>
      <MetaData title={"InstaShort | Saved"} />
      <div className="explore-container">
      <h2 className="h3-bold md:h2-bold w-full">Saved Posts</h2>
        <div className="flex flex-wrap mt-3 gap-9 w-full items-center justify-center max-w-6xl">
          <div className="border w-[313px] h-80 rounded-xl relative">
            <img src={ProPic} alt="" className="h-full w-full z-0 rounded-lg" />
            <div className="flex justify-between w-full h-8 absolute bottom-0 z-5">
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
            <div className="flex justify-between w-full h-8 absolute bottom-0 z-5">
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
            <div className="flex justify-between w-full h-8 absolute bottom-0 z-5">
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
            <div className="flex justify-between w-full h-8 absolute bottom-0 z-5">
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
            <div className="flex justify-between w-full h-8 absolute bottom-0 z-5">
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

export default Saved;
