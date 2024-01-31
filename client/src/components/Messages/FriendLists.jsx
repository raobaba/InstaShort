import { FiEdit } from "react-icons/fi";
import React from "react";
import "./FriendLists.css";

function FriendLists() {
  const userInfo = [
    {
      id: 1,
      imageUrl: "https://avatars.githubusercontent.com/u/99542983?v=4",
      name: "Rajan Rao",
      attachmentInfo: "You sent an attachment",
    },
    {
      id: 1,
      imageUrl: "https://avatars.githubusercontent.com/u/99542983?v=4",
      name: "Rajan Rao",
      attachmentInfo: "You sent an attachment",
    },
    {
      id: 1,
      imageUrl: "https://avatars.githubusercontent.com/u/99542983?v=4",
      name: "Rajan Rao",
      attachmentInfo: "You sent an attachment",
    },
    {
      id: 1,
      imageUrl: "https://avatars.githubusercontent.com/u/99542983?v=4",
      name: "Rajan Rao",
      attachmentInfo: "You sent an attachment",
    },
    {
      id: 1,
      imageUrl: "https://avatars.githubusercontent.com/u/99542983?v=4",
      name: "Rajan Rao",
      attachmentInfo: "You sent an attachment",
    },
    {
      id: 1,
      imageUrl: "https://avatars.githubusercontent.com/u/99542983?v=4",
      name: "Rajan Rao",
      attachmentInfo: "You sent an attachment",
    },
    {
      id: 1,
      imageUrl: "https://avatars.githubusercontent.com/u/99542983?v=4",
      name: "Rajan Rao",
      attachmentInfo: "You sent an attachment",
    },
    {
      id: 1,
      imageUrl: "https://avatars.githubusercontent.com/u/99542983?v=4",
      name: "Rajan Rao",
      attachmentInfo: "You sent an attachment",
    },
    {
      id: 1,
      imageUrl: "https://avatars.githubusercontent.com/u/99542983?v=4",
      name: "Rajan Rao",
      attachmentInfo: "You sent an attachment",
    },
    {
      id: 1,
      imageUrl: "https://avatars.githubusercontent.com/u/99542983?v=4",
      name: "Rajan Rao",
      attachmentInfo: "You sent an attachment",
    },
    {
      id: 1,
      imageUrl: "https://avatars.githubusercontent.com/u/99542983?v=4",
      name: "Rajan Rao",
      attachmentInfo: "You sent an attachment",
    },
  ];

  return (
    <div className="friend-list">
      <div className="user-info">
        <div className="username">
          <p>raorajan9576</p>
        </div>
        <div className="icon">
          <FiEdit />
        </div>
      </div>
      <div className="user-details">
        <h3>Messages</h3>
        <p>Requests</p>
      </div>
      <>
      {userInfo.map((user) => (
        <div className="user-activity">
          <div className="user-profile-circle">
            <img
              src={user.imageUrl}
              alt=""
            />
          </div>
          <div className="activity-details">
            <div className="user-name">{user.name}</div>
            <div className="attachment-info">{user.attachmentInfo}</div>
          </div>
        </div>
           ))}
      </>
    </div>
  );
}

export default FriendLists;
