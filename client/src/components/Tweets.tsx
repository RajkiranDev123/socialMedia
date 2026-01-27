import React from "react";
import Avatar from "react-avatar";
import { CiHeart } from "react-icons/ci";
import { FaRegBookmark, FaRegComment } from "react-icons/fa";

const Tweets = () => {
  return (
    <div>
      <div>
        <div className="flex p-4">
          <Avatar size="40" src="/vite.svg" round={true} />
          <div className="ml-2">
            <div className="flex items-center ">
              <h1 className="font-bold">Raj</h1>
              <p className="text-gray-500 text-sm ml-1">@raj</p>
            </div>

            <div>
              <p>Hello, devs</p>
            </div>
            <div className="flex justify-between">
              <div>
                <FaRegComment />
              </div>
              <div>
                <CiHeart />
              </div>
              <div>
                <FaRegBookmark />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweets;
