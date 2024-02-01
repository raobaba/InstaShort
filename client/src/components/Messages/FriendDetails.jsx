import React from "react";
import { PiMessengerLogoLight } from "react-icons/pi";
import "./FriendDetails.css"; // Import the CSS file for styling

function FriendDetails() {
  return (
    <>
      <div className="friend-details-container">
        <div className="content-wrapper">
          <div className="message-circle">
            <PiMessengerLogoLight className="messenger-icon" />
          </div>
          <div className="details-text">
            <h3>Your Message</h3>
            <p>Send private photos and messages to a friend or group</p>
          </div>
          <div className="send-button">
            <button>Send Message</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FriendDetails;
