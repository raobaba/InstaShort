import React from 'react';
import Placeholder from '../../assets/icons/profile-placeholder.svg';

function TopCreator() {
  return (
    <div className="p-6 rounded-md shadow-md">
        <div className='w-full border border-slate-700 mb-5' ></div>
      <div className="flex justify-between mb-4">
        <h1 className="text-lg font-semibold">Top Creator</h1>
        <button className="bg-blue-500 text-white px-1 py-1 text-xs rounded-md">Suggested</button>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex justify-between mt-3">
          <div className="mr-2">
            <img src={Placeholder} alt="user_logo" className="w-8 h-8 rounded-full" />
          </div>
          <div>
            <h4 className="text-sm font-semibold">Rajan Kumar</h4>
            <h6 className="text-gray-500 text-[10px]">@rajanrao</h6>
          </div>
        </div>
        <div>
          <button className="bg-green-500 text-white px-2 py-1 text-xs rounded-md">Follow</button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex justify-between mt-3">
          <div className="mr-2">
            <img src={Placeholder} alt="user_logo" className="w-8 h-8 rounded-full" />
          </div>
          <div>
            <h4 className="text-sm font-semibold">Rajan Kumar</h4>
            <h6 className="text-gray-500 text-[10px]">@rajanrao</h6>
          </div>
        </div>
        <div>
          <button className="bg-green-500 text-white px-2 py-1 text-xs rounded-md">Follow</button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex justify-between mt-3">
          <div className="mr-2">
            <img src={Placeholder} alt="user_logo" className="w-8 h-8 rounded-full" />
          </div>
          <div>
            <h4 className="text-sm font-semibold">Rajan Kumar</h4>
            <h6 className="text-gray-500 text-[10px]">@rajanrao</h6>
          </div>
        </div>
        <div>
          <button className="bg-green-500 text-white px-2 py-1 text-xs rounded-md">Follow</button>
        </div>
      </div>
    </div>
  );
}

export default TopCreator;
