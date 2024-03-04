import React from 'react';
import MetaData from '../../components/shared/MetaData';
import Placeholder from "../../assets/icons/profile-placeholder.svg";
import Edit from "../../assets/icons/edit.svg";

function Message() {
  return (
    <>
      <MetaData title={"InstaShort | Message"} />
      <div className='w-full flex flex-col md:flex-row'>
        <div className="w-full md:w-1/3 h-full m-auto md:mr-4 overflow-y-auto custom-scrollbar">
          <div className='w-11/12 flex justify-between h-5 mt-3 m-auto'>
            <p className='text-2xl font-semibold mt-1'>@rajan9576</p>
            <img src={Edit} alt="edit" className='w-7 h-7 mt-1'/>
          </div>
        <div className="flex-between w-full max-w-5xl mt-8 mb-7">
          <h3 className="body-bold md:h4-bold ml-3">Message</h3>
          <div className="flex-center gap-3 bg-dark-3 rounded-xl px-4 py-2 cursor-pointer">
            <p className="small-medium md:base-medium text-light-2">Request</p>
          </div>
        </div>
          {[1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].map((index) => (
            <div key={index} className="flex w-11/12 cursor-pointer m-auto justify-between items-center mt-3">
              <div className="flex justify-between mt-2">
                <div className="mr-2">
                  <img
                    src={Placeholder}
                    alt="user_logo"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Rajan Kumar</h4>
                  <h6 className="text-gray-500 text-[10px]">@rajanrao</h6>
                </div>
              </div>
              <div>
                <button className="bg-green-500 text-white px-2 py-1 text-xs rounded-md">
                  Follow
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full md:w-2/3 border h-full"></div>
      </div>
    </>
  )
}

export default Message;
