import React, { useState } from "react";
import MetaData from "../../components/shared/MetaData";
import Post from "../../assets/icons/add-post.svg";
import FileUploader from "../../components/shared/FileUploader";

type CreatePostProps = {};

function CreatePost() {
  const [caption, setCaption] = useState("");

  const handleCaptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCaption(event.target.value);
  };
  const handleFileChange = (files: File[]) => {
    console.log("Selected Files:", files);
  };

  return (
    <>
      <MetaData title={"InstaShort | CreatePost"} />
      <div className="mt-[-50px] flex flex-1">
        <div className="common-container">
          <div className="max-w-6xl py-10 px-5 flex-start gap-3 justify-start w-full">
            <img src={Post} width={36} height={36} alt="add" />
            <h2 className="h3-bold md:h2-bold text-left w-full">Create Post</h2>
          </div>
          <form
            action=""
            className="max-w-full w-11/12 mt-[-50px] transparent rounded-md shadow-md"
          >
            <div>
              <label
                htmlFor="caption"
                className="block text-sm font-medium text-gray-300"
              >
                Caption:
              </label>
              <textarea
                id="caption"
                name="caption"
                rows={4}
                value={caption}
                onChange={handleCaptionChange}
                className="p-2 block w-full border bg-dark-2 rounded-md focus:outline-none focus:ring-blue-500 border-blue-500 focus:border-blue-500 sm:text-sm"
              ></textarea>
            </div>
            <div className="mt-3">
              <label
                htmlFor="file"
                className="block text-sm font-medium text-gray-300"
              >
                Add Photos
              </label>
              <span className="shad-form_message"></span>
              <FileUploader fieldChange={handleFileChange} mediaUrl="" />
            </div>
            <div className="flex flex-col mt-3">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-300"
              >
                Add Location
              </label>
              <input
                placeholder="Art, Expression, Learn"
                type="text"
                className="shad-input rounded-lg"
              />
            </div>
            <div className="flex flex-col mt-3">
              <label
                htmlFor="tags"
                className="block  text-sm font-medium text-gray-300"
              >
                Add Tags (separated by comma " , ")
              </label>
              <input
                placeholder="Art, Expression, Learn"
                type="text"
                className="shad-input rounded-lg"
              />
            </div>
            <div className="flex gap-4 items-center mt-5 justify-end">
              <button
                type="button"
                className="shad-button_dark_4 px-2 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="shad-button_primary px-4 py-2 rounded-md whitespace-nowrap hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreatePost;
