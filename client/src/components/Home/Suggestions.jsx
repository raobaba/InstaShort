import React from 'react';
import './Suggestions.css';
import { Link } from 'react-router-dom';

function Suggestions() {
  return (
    <div className='suggestions-container'>
      <div className='user-profile'>
        <div className='profile-info'>
          <div className='user-profile-circle'>
            <img src="https://avatars.githubusercontent.com/u/99542983?v=4" alt="" />
          </div>
          <div className='name-username'>
            <h5>UserName</h5>
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
          <div className='user-profile-circle'>
          <img src="https://avatars.githubusercontent.com/u/99542983?v=4" alt="" />
          </div>
          <div className='suggested-for-you'>
            <h5>UserName</h5>
            <p>Suggested for you</p>
          </div>
        </div>
        <div className='follow-button'>
          <button>Follow</button>
        </div>
      </div>
      <div className='suggestion-footer'>
           <Link>About</Link>
           <Link>Help</Link>
           <Link>Press</Link>
           <Link>API</Link>
           <Link>Jobs</Link>
           <Link>Privacy</Link>
           <Link>Terms</Link>
           <br />
           <Link>Location</Link>
           <Link>Language</Link>
           <Link>Meta Varified</Link>
           <h6>© 2024 INSTAGRAM FROM META</h6>
        </div>
    </div>
  );
}

export default Suggestions;
