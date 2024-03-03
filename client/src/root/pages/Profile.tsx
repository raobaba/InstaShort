import React, {useState} from "react";
import MetaData from "../../components/shared/MetaData";
import { Link } from "react-router-dom";
import EditProfileModal from "../../components/shared/Modal";

function Profile() {
  const [activeLink, setActiveLink] = useState<string>("posts");
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <MetaData title={"InstaShort | Profile"} />
      <div className="w-full h-auto">
        <div className="w-11/12 flex m-auto mt-10 h-36">
          <div className="flex w-full justify-between">
            <div className="w-2/3 flex gap-5 ">
              <div>
                <img
                  src="https://avatars.githubusercontent.com/u/99542983?v=4"
                  alt="user_url"
                  className="w-32 h-32 rounded-full"
                />
              </div>
              <div className="mt-5">
                <p className="font-bold text-xl">Rajan Kumar</p>
                <p className="text-gray-500">@raorajan</p>
                <div className="flex justify-between mt-2 text-sm text-gray-300">
                  <p className="mr-4">0 Posts</p>
                  <p className="mr-4">20 Followers</p>
                  <p>20 Following</p>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={openModal}>
                Edit Profile
              </button>
              <EditProfileModal isOpen={isModalOpen} closeModal={closeModal} />
            </div>
          </div>
          
        </div>
         <div className="w-11/12 m-auto h-10">
          <div className="flex gap-4">
            <Link
              to={''}
              className={`font-bold text-lg ${
                activeLink === "posts" ? "text-blue-500" : ""
              }`}
              onClick={() => handleLinkClick("posts")}
            >
              Posts
            </Link>
            <Link
              to={''}
              className={`font-bold text-lg ${
                activeLink === "saved" ? "text-blue-500" : ""
              }`}
              onClick={() => handleLinkClick("saved")}
            >
              Saved
            </Link>
            <Link
              to={''}
              className={`font-bold text-lg ${
                activeLink === "liked" ? "text-blue-500" : ""
              }`}
              onClick={() => handleLinkClick("liked")}
            >
              Liked
            </Link>
          </div>
          {/* Horizontal Line */}
          <div className="border-b mt-2"></div>
        </div>
        {/* Content Sections */}
        {activeLink === "posts" && (
          <div className="w-11/12 m-auto mt-4">
            {/* Display content related to Posts */}
            <p>Posts Content Goes Here</p>
          </div>
        )}
        {activeLink === "saved" && (
          <div className="w-11/12 m-auto mt-4">
            {/* Display content related to Saved */}
            <p>Saved Content Goes Here</p>
          </div>
        )}
        {activeLink === "liked" && (
          <div className="w-11/12 m-auto mt-4">
            {/* Display content related to Liked */}
            <p>Liked Content Goes Here</p>
          </div>
        )}
        </div>
    </>
  );
}

export default Profile;
