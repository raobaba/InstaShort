// EditProfileModal.tsx
import React from "react";
import Modal from "react-modal";

interface EditProfileModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({ isOpen, closeModal }) => {
  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
    className="modal fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg z-50"
    overlayClassName="overlay fixed inset-0 bg-black opacity-50"
  >
      <div className="w-96 m-auto bg-white p-4 z-50 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
        {/* Form for updating name and choosing file */}
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 border rounded w-full"
              // Add your logic to handle name updates
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Choose File
            </label>
            <input
              type="file"
              id="image"
              name="image"
              className="mt-1 p-2 border rounded w-full"
              // Add your logic to handle file selection
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save Changes
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default EditProfileModal;
