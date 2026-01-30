import React from "react";
import Avatar from "react-avatar";
import { CiSearch } from "react-icons/ci";

const RightSidebar = () => {
  return (
    <div className="hidden md:block w-[25%] ">
      <div className="flex tex-gray-500 items-center p-2 bg-gray-100 rounded-full outline-none">
        <CiSearch size={20} />
        <input
          type="text"
          className="px-2 bg-transparent outline-none "
          placeholder="Search"
        />
      </div>
      {/* who to follow */}
      <div className="p-4 bg-gray-100 rounded-2xl my-4 w-full">
        <h1 className="font-bold my-3 text-lg">Who to follow </h1>

        <div className="flex items-center justify-between my-3">
          <div className="flex">
            <Avatar size="40" src="/vite.svg" round={true} />
            <div className="ml-2 ">
              <h1 className="font-bold">Raj</h1>
              <p className="text-sm">@raj</p>
            </div>
          </div>
          <div>
            <button className="px-4 py-1 bg-black text-white rounded-full">
              Profile
            </button>
          </div>
        </div>
        {/*  */}
    <div className="flex items-center justify-between my-3">
          <div className="flex">
            <Avatar size="40" src="/vite.svg" round={true} />
            <div className="ml-2 ">
              <h1 className="font-bold">Raj</h1>
              <p className="text-sm">@raj</p>
            </div>
          </div>
          <div>
            <button className="px-4 py-1 bg-black text-white rounded-full">
              Profile
            </button>
          </div>
        </div>
        {/*  */}
      </div>
      {/* who to follow */}
    </div>
  );
};

export default RightSidebar;
