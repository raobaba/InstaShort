import React, { useState, useRef, useEffect } from "react";
import "./CreateModal.css";


const CreateModal = ({ onClose }) => {

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
    <div className="create-modal-overlay">
    <div className="create-modal" ref={modalRef}>
      <div className="create-content">
         <h3>Create</h3>
      </div>
    </div>
  </div>
  );
};

export default CreateModal;
