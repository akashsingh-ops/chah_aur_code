import React, { useState } from "react";
import Axios from "axios";
export const Signup = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  //   on submit
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/auth/signup", {
      username,
      email,
      password,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log("error:", err);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 antialiased px-4 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl mx-auto text-center">
        <span className="text-2xl font-light">Login to your account</span>
        <div className="relative mt-4 bg-white shadow-md sm:rounded-lg text-left">
          <div className="h-2 bg-indigo-400 rounded-t-md"></div>
          <div className="py-6 px-8">
            <form className="sign-up-container" onSubmit={handleSubmit}>
              <label className="block font-semibold">Username</label>
              <input
                type="text"
                placeholder="username"
                className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                onChange={(e) => setusername(e.target.value)}
              />

              <label className="block font-semibold"> Email</label>
              <input
                type="text"
                placeholder="Email"
                className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                onChange={(e) => setemail(e.target.value)}
              />

              <label className="block mt-3 font-semibold">Password</label>
              <input
                type="password"
                placeholder="Password"
                className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                onChange={(e) => setpassword(e.target.value)}
              />
              <div className="flex justify-between items-baseline">
                <button className="mt-4 bg-indigo-500 text-white py-2 px-6 rounded-lg hover:bg-indigo-600">
                  Login
                </button>

                <a href="#" className="text-sm hover:underline">
                  Forgot password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
