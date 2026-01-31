import React, { useState } from "react";

const Login = () => {
  const [isLogin,setIsLogin]=useState(true)

  const loginSignupHandler=()=>{
    setIsLogin(!isLogin)
  }
  return (
    <div className="w-screen h-screen flex items-center justify-center ">
      <div className="flex items-center justify-around  w-[80%] p-2">
        <div>
          <img className="" width={180} src="/twitter.avif" alt="logo" />
        </div>
        <div>
          <h1 className="font-bold text-5xl my-5">Happening now.</h1>
          <h1 className="text-2xl font-bold mt-4 mb-2">{isLogin?"Login":"Signup"}</h1>
          <form className="flex flex-col w-[55%]">
            {!isLogin&&<>   <input
              type="text"
              placeholder="Name"
              className="font-semibold px-3 py-1 my-1 rounded-full outline-blue-500 border border-gray-800"
            />
            <input
              type="text"
              placeholder="Username"
              className="font-semibold px-3 py-1 my-1 rounded-full outline-blue-500 border border-gray-800"
            /></> }
        <input
              type="text"
              placeholder="Email"
              className="font-semibold px-3 py-1 my-1 rounded-full outline-blue-500 border border-gray-800"
            />
            <input
              type="text"
              placeholder="Password"
              className="font-semibold px-3 py-1 my-1 rounded-full outline-blue-500 border border-gray-800"
            />
            <button className="px-4 my-4 bg-[#1D9BF0] rounded-full py-2 text-white text-md cursor-pointer ">
           {isLogin?"Create Account":"Login"}
            </button>
            <p>
            {isLogin?"Do not have an account ?":"Already have an account ?"}
            <span className="font-bold text-blue-600 cursor-pointer" onClick={loginSignupHandler}>{isLogin?"Signup !":"Login"}</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
