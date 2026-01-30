import React from "react";
import Avatar from "react-avatar";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <div className="border-l  border-r border-gray-200">
      <div >
        <div className="flex items-center  py-2">
          <Link
            to={"/"}
            className="rounded-full p-2 hover:bg-gray-100 cursor-pointer"
          >
            <IoMdArrowBack size={24} />
          </Link>
          <div className="ml-2">
            <h1 className="font-bold text-lg">Raj</h1>
            <p className="text-gray-500 text-sm">10 posts</p>
          </div>
        </div>
        <div className="relative">
          <img src="/banner.webp" alt="banner" />
          <div className="absolute -bottom-2 left-2 border-4 rounded-full">
            <Avatar size="70" src="/vite.svg" round={true} />
          </div>
        </div>

        <div className="text-right m-4">
          <button className="px-4 py-1 rounded-full cursor-pointer  border hover:bg-gray-200  ">
            Edit Profile
          </button>
        </div>

        <div className="m-4">
          <h1 className="font-bold text-xl">raj</h1>
          <p className="text-gray-500">@raj</p>
        </div>

        <div className="m-4">
          <p className="text-sm">hi raj how rae you | uyut oiuyt ioyut</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
