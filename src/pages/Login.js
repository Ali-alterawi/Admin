import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { mdiLocationEnter } from "@mdi/js";
import Icon from "@mdi/react";

export default function LogIn() {
  const [email, setemail] = useState("");
  const [emailp, setemailp] = useState("");
  const [password, setpassword] = useState("");
  const [passwordp, setpasswordp] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/loginUser", {
        email,
        password,
      });
      const token = await response.data.token;
      localStorage.setItem("token", token);

      window.location.href = "/";
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-6/12 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">
              Admin Dashboard
            </h1>
            <div className="w-full flex-1 mt-8">
              <form onSubmit={handleSubmit}>
                <div className="mx-auto max-w-xs">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                  <p className="text-red-500">{emailp}</p>
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                    value={password}
                    required
                    onChange={(e) => setpassword(e.target.value)}
                  />
                  <p className="text-red-500">{passwordp}</p>
                  <button
                    type="submit"
                    className="mt-5 bg-[#322f89] tracking-wide font-semibold text-white w-full py-4 rounded-lg hover:bg-[#2d3bb5] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    
                      Log In <span className="ml-3"><Icon path={mdiLocationEnter} size={1} /></span>
                    
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
