import React from "react";
import img from "../assets/adnan.png";
import { FaDownload } from "react-icons/fa6";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am <span className="text-blue-500 font-bold">Md Adnan Shiragee</span> and I am a passionate full stack web
            developer. I love to work on web application using technologies like
            React, Tailwind, Node, Express and Mongodb.
          </p>
          <div>
            <a href="../../public/Adnan Shiragee Resume.pdf" download={true}>
              <button className="group text-white w-fit px-6 py-3 my-2 flex gap-3 items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                Resume
                <span className="">
                  <FaDownload size={20} className="" />
                </span>
              </button>
            </a>
          </div>
        </div>

        <div>
          <img
            src={img}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
