import React, { useState, useRef, useEffect } from "react";
import "./CreateModal.css";
import { GoFileMedia } from "react-icons/go";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { PiCropThin } from "react-icons/pi";
import { BsZoomIn } from "react-icons/bs";
import { TfiFiles } from "react-icons/tfi";

const CreateModal = ({ onClose }) => {
  const modalRef = useRef();
  const fileInputRef = useRef();

  const [selectedFileURL, setSelectedFileURL] = useState(null);

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

  const handleFileSelect = () => {
    const selectedFile = fileInputRef.current.files[0];

    if (selectedFile) {
      const fileURL = URL.createObjectURL(selectedFile);
      setSelectedFileURL(fileURL);
    }
  };

  return (
    <div className="create-modal-overlay">
      <div className="create-modal" ref={modalRef}>
        <div className="create-content">
          <h3>Create new post</h3>
          <div className="horizontal-line"></div>
          <div className="create-modal-actions">
            {/* Display the selected file */}
            {selectedFileURL ? (
              <div className="image-container">
                <img
                  src={selectedFileURL}
                  alt="Selected File"
                  style={{ width: "100%", height: "40%" }}
                />

                {/* Icons on the image */}
                <div className="bottom-icons">
                  <PiCropThin
                    style={{
                      fontSize: "24px",
                      marginRight: "10px",
                      color: "black",
                      cursor: "pointer",
                    }}
                  />
                  <BsZoomIn
                    style={{
                      fontSize: "24px",
                      marginRight: "10px",
                      color: "black",
                      cursor: "pointer",
                    }}
                  />
                  <TfiFiles
                    style={{
                      fontSize: "24px",
                      color: "black",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>
            ) : (
              <>
                <div>
                  <GoFileMedia
                    style={{
                      fontSize: "40px",
                      fontWeight: "100",
                      marginTop: "150px",
                    }}
                  />
                  <AiOutlinePlaySquare
                    style={{
                      marginLeft: "-20px",
                      fontSize: "40px",
                      transform: "rotate(8deg)",
                      marginTop: "150px",
                    }}
                  />
                </div>

                <h2 style={{ display: selectedFileURL ? "none" : "block" }}>
                  Drag photos and videos here
                </h2>

                {/* Hidden file input */}
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileSelect}
                />

                <button
                  style={{ display: selectedFileURL ? "none" : "block" }}
                  onClick={() => fileInputRef.current.click()}
                >
                  Select from computer
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateModal;
