import React, { useState } from "react";
import MetaData from "../../components/shared/MetaData";
import Placeholder from "../../assets/icons/profile-placeholder.svg";
import Edit from "../../assets/icons/edit.svg";
import { PiMessengerLogoLight } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";
import { MdVideoCall } from "react-icons/md";
import { GoInfo } from "react-icons/go";
import { MdKeyboardVoice } from "react-icons/md";
import { BsEmojiNeutral } from "react-icons/bs";
import Save from "../../assets/icons/save.svg";

import { Link } from "react-router-dom";

function Message() {
  const [selectedUser, setSelectedUser] = useState<number | null>(null);

  const handleUserClick = (userId: number) => {
    setSelectedUser(userId);
  };

  return (
    <>
      <MetaData title={"InstaShort | Message"} />
      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 h-full m-auto md:mr-4 overflow-y-auto custom-scrollbar">
          <div className="w-11/12 flex justify-between h-5 mt-3 m-auto">
            <p className="text-2xl font-semibold mt-1">@rajan9576</p>
            <Link to={`/profile/${1}`}>
              <img src={Edit} alt="edit" className="w-7 h-7 mt-1" />
            </Link>
          </div>
          <div className="flex-between w-full max-w-5xl mt-8 mb-7">
            <h3 className="body-bold md:h4-bold ml-4">Message</h3>
            <div className="flex-center gap-3 bg-dark-3 rounded-xl px-4 py-2 cursor-pointer">
              <p className="small-medium md:base-medium text-light-2">
                Request
              </p>
            </div>
          </div>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(
            (index) => (
              <div
                key={index}
                onClick={() => handleUserClick(index)}
                className="flex w-11/12 cursor-pointer hover:bg-slate-700 rounded-lg m-auto justify-between items-center mt-3"
              >
                <div className="flex justify-between mt-2">
                  <div className="mr-2">
                    <img
                      src={Placeholder}
                      alt="user_logo"
                      className="w-10 h-10 rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-md font-semibold">Rajan Kumar</h4>
                    <h6 className="text-gray-500 text-[12px]">@rajanrao</h6>
                  </div>
                </div>
                <div>
                  <button className="bg-green-500 text-white px-3 py-1 text-md rounded-md">
                    Follow
                  </button>
                </div>
              </div>
            )
          )}
        </div>
        <div className="w-full md:w-2/3 border-l border-slate-500 h-full">
          {selectedUser ? (
            <div className="h-full border border-slate-500 relative">
              <div className="absolute inset-0 overflow-y-auto">
                <div className="absolute border-slate-400 flex justify-between inset-x-0 top-0 h-14 border w-full">
                  <div className="flex justify-between ml-2 mt-2">
                    <div className="mr-2">
                      <img
                        src={Placeholder}
                        alt="user_logo"
                        className="w-10 h-10 rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="text-md font-semibold">Rajan Kumar</h4>
                      <h6 className="text-gray-500 text-[12px]">@rajanrao</h6>
                    </div>
                  </div>
                  <div className="flex justify-around h-full sm:w-48">
                    <IoCallOutline className="w-8 h-8 mt-3 cursor-pointer" />
                    <MdVideoCall className="w-8 h-8 mt-3 cursor-pointer" />
                    <GoInfo className="w-8 h-8 mt-3 cursor-pointer" />
                  </div>
                </div>
                <div className="absolute inset-x-0 top-20 sm:top-14 bottom-14 sm:bottom-20 overflow-y-auto custom-scrollbar">
                  <div className="h-64">Scrollable Content</div>
                  <div className="h-64">Scrollable Content</div>
                  <div className="h-64">Scrollable Content</div>
                  <div className="h-64">Scrollable Content</div>
                </div>
                <div className="absolute bottom-4 left-0 right-0 mx-auto w-11/12 border border-gray-400 rounded-3xl flex justify-between items-center px-3 py-2">
                  <BsEmojiNeutral className="text-gray-600 w-6 h-6" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="flex-grow px-2 py-1 border-gray-300 rounded-md focus:outline-none bg-transparent"
                  />
                  <MdKeyboardVoice className="text-gray-600 w-10 h-10" />
                  <img src={Save} alt="save" className="w-8 h-8" />
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex justify-center items-center">
              <div className="text-center">
                <div className="w-16 h-16 border-2 rounded-full mx-auto flex justify-center items-center">
                  <PiMessengerLogoLight className="w-12 h-12" />
                </div>
                <h4 className="text-bold text-lg">Your messages</h4>
                <p className="text-semibold text-sm text-slate-400">
                  Send private photos and messages to a friend or group
                </p>
                <button className="bg-green-500 mt-2 text-white px-3 py-1 text-md rounded-md">
                  Send Message
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Message;
