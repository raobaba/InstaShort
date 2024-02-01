import React, { useState, useRef, useEffect } from "react";
import "./CreateModal.css";
import { GoFileMedia } from "react-icons/go";
import { AiOutlinePlaySquare } from "react-icons/ai";

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
          <h3>Create new post</h3>
          <div className="horizontal-line"></div>
          <div className="create-modal-actions">
            <div>
              <GoFileMedia
                style={{
                  fontSize: "40px",
                  fontWeight: "100",
                 
                }}
              />
              <AiOutlinePlaySquare style={{marginLeft:'-20px', fontSize: "40px", transform: "rotate(8deg)", }} />
            </div>

            <h2>Drag photos and videos here</h2>
            <button>Select from computer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateModal;
