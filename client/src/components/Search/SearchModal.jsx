import React, { useState, useRef, useEffect } from "react";
import "./SearchModal.css";

const SearchModal = ({ onClose }) => {
  const [searchText, setSearchText] = useState("");
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
    // Add your search functionality here
    console.log("Searching for:", searchText);
    // You can implement your search logic and update the UI accordingly
  };

  return (
    <div className="search-modal" ref={modalRef}>
      <h3>Search Text</h3>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {/* Display search content area */}
      {/* Add your search results rendering here */}
      <div className="search-results">Search results go here</div>
    </div>
  );
};

export default SearchModal;
