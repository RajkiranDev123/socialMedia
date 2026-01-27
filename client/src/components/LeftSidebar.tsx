import React from "react";
import { CiHome } from "react-icons/ci";
import { CiHashtag } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { AiOutlineLogout } from "react-icons/ai";
const LeftSidebar = () => {
  return (
    <div>
      <div>
        {/* logo */}
        <div className="">
          <img className="ml-4" alt="logo" src="/twitter.avif" width={24} />
        </div>

        {/*  items */}
        <div className="my-4">
          <div className="flex items-center my-2 px-4 py-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <CiHome size={"24px"} />
            <h1 className="font-semibold text-lg ml-2">Home</h1>
          </div>

          <div className="flex items-center my-2 px-4 py-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <CiHome size={"24px"} />
            <h1 className="font-semibold text-lg ml-2">Explore</h1>
          </div>

          <div className="flex items-center my-2 px-4 py-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <CiHome size={"24px"} />
            <h1 className="font-semibold text-lg ml-2">Notifications</h1>
          </div>
          <div className="flex items-center my-2 px-4 py-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <CiHome size={"24px"} />
            <h1 className="font-semibold text-lg ml-2">Profile</h1>
          </div>

          <div className="flex items-center my-2 px-4 py-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <CiHome size={"24px"} />
            <h1 className="font-semibold text-lg ml-2">Bookmarks</h1>
          </div>

          <div className="flex items-center my-2 px-4 py-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <CiHome size={"24px"} />
            <h1 className="font-semibold text-lg ml-2">Logout</h1>
          </div>

          <button
            className="p-4 py-2 border-none font-medium bg-[#1D9BF0] text-white
rounded-full w-full"
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
