import React, { useState, useRef, useEffect } from "react";
import "./NotificationModal.css";


const NotificationModal = ({ onClose }) => {

  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="notification-modal-overlay">
    <div className="notification-modal" ref={modalRef}>
      <div className="notification-content">
         <h3>Notification</h3>
      </div>
    </div>
  </div>
  );
};

export default NotificationModal;
