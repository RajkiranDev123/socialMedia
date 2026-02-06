import React, { useState } from "react";
import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { LuLoaderCircle } from "react-icons/lu";
const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [username, setUserame] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const loginSignupHandler = () => {
    setIsLogin(!isLogin);
  };

  const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, username, email, password);
    if (isLogin) {
      setLoading(true);
      try {
        const res = await axios.post(
          `${USER_API_END_POINT}/login`,
          { email, password },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          },
        );
        if (res.data.success) {
          setLoading(false);

          navigate("/");
          toast.success(res.data.message);
        }
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          setLoading(false);
          toast.error(error.response?.data?.message || "Something went wrong");
        } else {
          setLoading(false);
          toast.error("Something went wrong");
        }
      }
    } else {
      setLoading(true);

      try {
        const res = await axios.post(
          `${USER_API_END_POINT}/register`,
          { name, username, email, password },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          },
        );
        if (res.data.success) {
          setIsLogin(true);
          setLoading(false);

          toast.success(res.data.message);
        }
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          setLoading(false);
          toast.error(error.response?.data?.message || "Something went wrong");
        } else {
          toast.error("Something went wrong");
          setLoading(false);
        }
      }
    }
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center ">
      <div className="flex items-center justify-around  w-[80%] p-2">
        <div>
          <img className="" width={180} src="/twitter.avif" alt="logo" />
        </div>
        <div>
          <h1 className="font-bold text-5xl my-5">Happening now.</h1>
          <h1 className="text-2xl font-bold mt-4 mb-2">
            {isLogin ? "Login" : "Signup"}
          </h1>
          <form onSubmit={handlerSubmit} className="flex flex-col w-[55%]">
            {!isLogin && (
              <>
                {" "}
                <input
                  type="text"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="font-semibold px-3 py-1 my-1 rounded-full outline-blue-500 border border-gray-800"
                />
                <input
                  type="text"
                  onChange={(e) => setUserame(e.target.value)}
                  value={username}
                  placeholder="Username"
                  className="font-semibold px-3 py-1 my-1 rounded-full outline-blue-500 border border-gray-800"
                />
              </>
            )}
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="font-semibold px-3 py-1 my-1 rounded-full outline-blue-500 border border-gray-800"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="font-semibold px-3 py-1 my-1 rounded-full outline-blue-500 border border-gray-800"
            />
            <button className="px-4 my-4 bg-[#1D9BF0] rounded-full flex justify-center py-2 text-white text-md cursor-pointer ">
              {!loading && <span>{!isLogin ? "Create Account" : "Login"}</span>}
              {loading && <LuLoaderCircle className="animate-spin" />}
            </button>
            <p>
              {isLogin
                ? "Do not have an account ?"
                : "Already have an account ?"}
              <span
                className="font-bold text-blue-600 cursor-pointer"
                onClick={loginSignupHandler}
              >
                {isLogin ? "Signup !" : "Login"}
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
