import React, { useState, useRef, useEffect } from "react";
import "./SearchModal.css";
import { FaSearch } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";

const SearchModal = ({ onClose }) => {
  const [searchText, setSearchText] = useState("");
  const [isSearchMode, setIsSearchMode] = useState(true);
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

  const handleSearch = () => {
    console.log("Searching for:", searchText);
  };


  const handleToggleMode = () => {
    setIsSearchMode(!isSearchMode);
    if (!isSearchMode) {
      setSearchText("");
    }
  };

  return (
    <div className="search-modal-overlay">
    <div className="search-modal" ref={modalRef}>
      <div className="search-content">
        <h3>Search Here</h3>
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          style={{ width: '80%', marginLeft: '35px', marginTop: '5%' }}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <FaSearch className="search-icon-button" onClick={handleSearch} />
        <div className="search-results">
          <div className="recent-content">
            <h3>recent</h3>
          </div>
          <div className="content">
            <p>no recent searches</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default SearchModal;
