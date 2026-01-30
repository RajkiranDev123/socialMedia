import { CiHome } from "react-icons/ci";
import { CiHashtag } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const LeftSidebar = () => {
  const navigate=useNavigate()
  return (
    <div className="hidden md:block w-[20%]">
      {/* logo */}
      <div>
        <img className="ml-4" alt="logo" src="/twitter.avif" width={24} />
      </div>
      {/* logo */}

      {/*  items */}
      <div className="my-4">
        {/* item */}
        <div onClick={()=>navigate("/")} className="flex items-center my-2 px-4 py-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
          <CiHome size={"24px"} />
          <h1 className="font-semibold text-lg ml-2">Home</h1>
        </div>
        {/* item */}

        <div className="flex items-center my-2 px-4 py-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
          <CiHashtag size={"24px"} />
          <h1 className="font-semibold text-lg ml-2">Explore</h1>
        </div>

        <div className="flex items-center my-2 px-4 py-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
          <IoIosNotificationsOutline size={"24px"} />
          <h1 className="font-semibold text-lg ml-2">Notifications</h1>
        </div>
        <div onClick={()=>navigate("/profile")} className="flex items-center my-2 px-4 py-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
          <CiUser size={"24px"} />
          <h1 className="font-semibold text-lg ml-2">Profile</h1>
        </div>

        <div className="flex items-center my-2 px-4 py-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
          <CiBookmark size={"24px"} />
          <h1 className="font-semibold text-lg ml-2">Bookmarks</h1>
        </div>

        <div className="flex items-center my-2 px-4 py-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
          <AiOutlineLogout size={"24px"} />
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
  );
};

export default LeftSidebar;
