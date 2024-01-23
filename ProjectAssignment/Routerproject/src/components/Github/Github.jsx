import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  // The Loader is to fast as compare to useEffect , it increase the performace and fetch the data quick
  const data = useLoaderData();

  // const [data, setData] = useState([]);

  // use useEffect for api, it run when firstly component mount
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://api.github.com/users/akashsingh-ops"
  //       );
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch data");
  //       }
  //       const userData = await response.json();
  //       setData(userData);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <div class="grid grid-cols-3 gap-4 mb-3">
        <div class="...">
          <div className="group relative w-96 mt-4">
            <img
              className="w-full object-cover  "
              src={data.avatar_url}
              alt=""
            />
            <div className="absolute w-96 bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-80">
              <h3 className="text-xl text-white font-bold ">
                {" "}
                Hi 👋, I`m {data.name}
              </h3>
            </div>

            <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-white-500 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
              <h1 className="text-2xl px-8 py-4 text-white rounded bg-amber-400 hover:bg-amber-600 duration-300">
                Full Stack Developer
              </h1>
              <p className="mt-7 px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-600 duration-300">
                A passionate about Tech , Scienece and Program frontend
                developer from India 🔭 I’m currently working on EazEae |App-Web
                🌱 I’m currently learning React Native , Node JS and other
                backend Tech Stack 💬
              </p>
            </div>
          </div>
        </div>
        <div class=" ml-4 col-span-2 ...">
          <div class="grid grid-cols-3 gap-4 mt-5 p-0 mb-5">
            <div class="shadow-inner bg-orange-200  text-orange-700 ...">
              <h1 className="font-semibold font-sans text-xl">
                {" "}
                Github Followers:{data.followers}
              </h1>
            </div>
            <div class=" shadow-inner bg-orange-200  text-orange-700 ...">
              <h1 className="font-semibold font-sans text-xl">
                {" "}
                Github Following:{data.following}
              </h1>
            </div>
            <div class="shadow-inner bg-orange-200 text-orange-700 ...">
              <h1 className="font-semibold font-sans text-xl">
                {" "}
                Public Repository:{data.public_repos}
              </h1>
            </div>
          </div>
          <h1 className="text-1xl px-4 py-3 text-white rounded  bg-green-950 hover:bg-amber-600 duration-300">
            BIO: {data.bio}
          </h1>
          <p className="mt-7 px-4 py-3 rounded bg-amber-400 hover:bg-amber-600 duration-300">
            A passionate about Tech , Scienece and Program frontend developer
            from India 🔭 I’m currently working on EazEae |App-Web 🌱 I’m
            currently learning React Native , Node JS and other backend Tech
            Stack 💬
          </p>
        </div>
      </div>
    </>
  );
};
export default Github;
export const githubLoader = async () => {
  const response = await fetch("https://api.github.com/users/akashsingh-ops");
  return response.json();
};

//  <div class="bg-indigo-300 ...">
//    <img class="object-cover h-58 w-96 ..." src={data.avatar_url} alt="" />
//    <p>
//      Hi 👋, I'm AKASH SINGH A passionate about Tech , Scienece and Program
//      frontend developer from India 🔭 I’m currently working on EazEae |App-Web
//      🌱 I’m currently learning React Native , Node JS and other backend Tech
//      Stack 💬 Ask me about HTML CSS JS BOOTSTRAP REACT JS DBMS MYSQL OPPS 📫 How
//      to reach me akash.2024csit1199@kiet.edu 📄 Know about my experiences
//      https://drive.google.com/file/d/1zST2uN5fzpL1sxaqHJrWfrQDlHwewbRr/view?usp=share_link
//    </p>
//  </div>;
