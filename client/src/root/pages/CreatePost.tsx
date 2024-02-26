import React from "react";
import MetaData from "../../components/shared/MetaData";
import Post from "../../assets/icons/add-post.svg";

function CreatePost() {
  return (
    <>
      <MetaData title={"InstaShort | CreatePost"} />
      <div className="flex flex-1">
        <div className=" w-2/3 border">
          <div className="max-w-5xl py-10 px-5 flex-start gap-3 justify-start w-full">
            <img src={Post} width={36} height={36} alt="add" />
            <h2 className="h3-bold md:h2-bold text-left w-full">Create Post</h2>
          </div>
          <form
            action=""
            className="max-w-full w-11/12 transparent p-6 rounded-md shadow-md"
          >
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
              className="mt-1 p-2 block w-full border bg-slate-800 rounded-md focus:outline-none focus:ring-blue-500 border-blue-500 focus:border-blue-500 sm:text-sm"
            ></textarea>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreatePost;

