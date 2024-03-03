import React, { useState } from 'react';
import Notification from '../../assets/images/notifications.png';
import Placeholder from '../../assets/icons/profile-placeholder.svg'

function Notifications() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='p-6 shadow-md'>
      <div
        className='w-full rounded-md cursor-pointer border border-slate-700 p-4 mb-5'
        onClick={openModal}
      >
        <div className='flex items-center'>
          <img src={Notification} alt="notification_logo" className='w-10 h-10 mr-4' />
          <p className='text-lg font-semibold'>Notifications</p>
        </div>
      </div>

      {isModalOpen && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-gray-300 w-1/3 p-8 rounded-md'>
            <h2 className='text-2xl text-black font-semibold mb-4'>Your Notifications</h2>
            <div className="flex justify-between items-center">
        <div className="flex justify-between mt-3">
          <div className="mr-2">
            <img
              src={Placeholder}
              alt="user_logo"
              className="w-12 h-12 rounded-full"
            />
          </div>
          <div>
            <h4 className="text-md text-black font-semibold">Rajan Kumar</h4>
            <h6 className="text-gray-700 text-[15px]">is like your post and others</h6>
          </div>
        </div>
        <div>
          <button className="bg-green-500 text-white px-4 py-2 text-md rounded-md">
            Follow
          </button>
        </div>
      </div>
            <button
              className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-md'
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Notifications;
