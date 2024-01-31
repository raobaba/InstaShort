import React from 'react';
import './Suggestions.css';

function Suggestions() {
  return (
    <div className='suggestions-container'>
      <div className='user-profile'>
        <div className='profile-info'>
          <div className='user-profile-circle'></div>
          <div className='name-username'>
            <h4>UserName</h4>
            <p>Name</p>
          </div>
        </div>
        <div className='switch-button'>
          <button>Switch</button>
        </div>
      </div>
      <div className='suggested-text'>
        <p>Suggested for you</p>
        <button>See All</button>
      </div>
      <div className='suggested-profile'>
        <div className='profile-info'>
          <div className='user-profile-circle'></div>
          <div className='suggested-for-you'>
            <h4>UserName</h4>
            <p>Suggested for you</p>
          </div>
        </div>
        <div className='follow-button'>
          <button>Follow</button>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
