import React from "react";
import { Link } from "react-router-dom";
import MetaData from "../../components/shared/MetaData";
import Placeholder from "../../assets/icons/profile-placeholder.svg";
import Edit from "../../assets/icons/edit.svg";
import ProPic from "../../assets/images/profilepic.png";
import Love from "../../assets/icons/like.svg";
import Comment from "../../assets/icons/comment.svg";
import Share from "../../assets/images/sent.png";
import Save from "../../assets/icons/save.svg";

const ProfileLink = () => (
  <Link to={`/profile/${1}`} className="ml-10 mt-5 flex gap-3 items-center">
    <img src={Placeholder} alt="profile" className="h-14 w-14 rounded-full" />
    <div className="flex flex-col">
      <p className="body-bold">{"Rajan Kumar"}</p>
      <div className="w-full flex flex-col md:flex-row items-center md:justify-between">
        <p className="small-regular text-light-3 mb-2 md:mb-0">@{"rajanrao"}</p>
        <p className="small-regular text-light-3 md:ml-5">New Delhi</p>
      </div>
    </div>
  </Link>
);

const Home = () => {
  const isLoading = false;
  const user = { email: "example@example.com" };
  const { email } = user;

  return (
    <>
      <MetaData title={"InstaShort | Home"} />
      <div className="mt-[-30px] flex flex-1">
        <div className="common-container">
          <div className="max-w-6xl py-10 px-5 border flex-start gap-3 justify-start w-full"></div>
          <div className="max-w-full bg-black bg-opacity-50 w-11/12 mt-[-10px] transparent rounded-md shadow-md">
            <div className="flex justify-between items-center">
              {isLoading || !email ? (
                <div className="h-14">{/* Loader component */}</div>
              ) : (
                <ProfileLink />
              )}
              <Link className="mr-10 mt-5" to={`/update-post/${1}`}>
                <img src={Edit} alt="Edit_Logo" />
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-10/12 mt-3">
                <p className="">Creating a nice project</p>
                <p className="small-regular text-blue-600 cursor-pointer">
                  #rajan #dhanjee #prakash
                </p>
                <div className="w-full mt-2">
                  <img
                    className="w-full rounded-xl"
                    src={ProPic}
                    alt="post_data"
                  />
                </div>
                <div className="mt-3 flex mb-5 justify-between items-center w-full">
                  <div className="flex gap-4">
                    <img
                      src={Love}
                      alt="like"
                      className="hover:opacity-90 transition-opacity duration-300 ease-in-out cursor-pointer"
                    />
                    <img
                      src={Comment}
                      alt="comment"
                      className="w-5 h-6 hover:opacity-90 transition-opacity duration-300 ease-in-out cursor-pointer"
                    />
                    <img
                      src={Share}
                      alt="share"
                      className="w-5 h-5 mt-1 hover:opacity-90 transition-opacity duration-300 ease-in-out cursor-pointer"
                    />
                  </div>
                  <img
                    src={Save}
                    alt="save"
                    className="hover:opacity-90 transition-opacity duration-300 ease-in-out cursor-pointer"
                  />
                </div>
                <div className="mb-5">
                  <p className="text-light-2 font-extralight">
                    Liked by raorajan and others
                  </p>
                  <details className="relative mt-2">
                    <summary className="text-light-3 cursor-pointer mt-2 relative z-10">
                      View all comments
                    </summary>
                    <textarea
                      placeholder="Add a comment..."
                      className="w-11/12 mt-2 bg-transparent border-b border-t border-r border-l border-gray-400 focus:outline-none resize-none"
                      rows={3} // Adjust rows as needed
                    ></textarea>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
