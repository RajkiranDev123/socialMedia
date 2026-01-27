import React from "react";
import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";

const CreatePost = () => {
  return (
    <div className="w-[100%]">
      {/* for you and following */}
      <div className="flex items-center justify-evenly border-b border-gray-200">
        {/* for you */}
        <div className="cursor-pointer hover:bg-gray-200 w-full px-4 py-3 text-center">
          <h1 className="font-semibold text-gray-700 text-lg ">For You</h1>
        </div>
        {/* following */}
        <div className="cursor-pointer hover:bg-gray-200 w-full px-4 py-3 text-center">
          <h1 className="font-semibold text-gray-700 text-lg ">Following</h1>
        </div>
      </div>
      {/* for you and following */}

      {/* avatar and input */}
      <div className="flex items-center p-4">
        <Avatar size="40" src="/vite.svg" round={true} />
        <input
          className="w-full outline-none border-none text-lg ml-2"
          type="text"
          placeholder="what is happening?"
        />
      </div>

      {/* avatar and input ends*/}

      {/*image input,post  */}
      <div className="flex items-center justify-between p-4  border-b">
        <div>
          <CiImageOn />
        </div>
        <button className="px-3 py-1 border-none bg-[#1D9BF0] rounded-full text-white text-lg cursor-pointer">
          Post
        </button>
      </div>

      {/*image input,post  */}
    </div>
  );
};

export default CreatePost;
