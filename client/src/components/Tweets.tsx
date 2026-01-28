import React from "react";
import Avatar from "react-avatar";
import { CiHeart } from "react-icons/ci";
import { FaRegBookmark, FaRegComment } from "react-icons/fa";

const Tweets = () => {
  return (
    <div className="border-b">
      <div className="flex p-4">
        {/* avatar */}
        <Avatar size="40" src="/vite.svg" round={true} />
        {/* avatar ends */}
        <div className="ml-2 w-full">
          <div className="flex items-center ">
            <h1 className="font-bold">Raj</h1>
            <p className="text-gray-500 text-sm ml-1">@raj</p>
          </div>

          <div>
            <p>Hello, devs iuygufghkjlk;</p>
          </div>
          <div className="flex justify-between my-2">
            <div className="flex items-center">
              <div className="hover:bg-green-200 rounded-full cursor-pointer p-2">
                <FaRegComment size={20} />
              </div>

              <p className="">0</p>
            </div>
            <div className="flex items-center">
              <div className="hover:bg-pink-200 rounded-full cursor-pointer p-2">
                <CiHeart size={24} />
              </div>
              <p className="">0</p>
            </div>
            <div className="flex items-center">
              <div className="hover:bg-yellow-200 rounded-full cursor-pointer p-2">
                <FaRegBookmark size={20} />
              </div>

              <p className="">0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweets;
