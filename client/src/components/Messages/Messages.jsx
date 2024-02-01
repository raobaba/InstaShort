import React from 'react';
import './Messages.css';
import FriendLists from './FriendLists';
import FriendDetails from './FriendDetails';

function Messages() {
  return (
    <div className='messages'>
      <div className='friend-list-container'>
        <FriendLists/>
      </div>
      <div className='friend-detail-container'>
        <FriendDetails/>
      </div>
    </div>
  )
}

export default Messages