"use client";

import React from "react";
import Typewriter from "typewriter-effect";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const Home: React.FC = () => {
  const handleScroll = () => {
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
      const arrowButton = document.getElementById("db-button");
      if (arrowButton) {
        arrowButton.style.display = "none";
      }
    }
  };

  return (
    <div className="h-full w-full flex justify-center items-center flex-col gap-20">
      <div className="home sm:mr-[20px] flex justify-center flex-col xs:text-center xs:items-center md:ml-9 lg:ml-9 xl:ml-9">
        <p className="intro-s text-[17px]">My name is</p>
        <h1 className="name-prof text-7xl text-blue-400 sm:text-5xl">
          Sarad Bhatta. <br />
          <span className="text-blue-300 flex gap-3 p-2">
            {" "}
            I am
            <Typewriter
              options={{
                strings: [
                  "Web Devaloper",
                  "Web Designer",
                  "Freelancer",
                  "App Devaloper",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h1>
        <p className="desc-d text-[20px] text-blue-500 mt-1 xs:p-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima soluta
          quia nam explicabo iste? <br /> Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nisi soluta quod quasi earum distinctio sequi at{" "}
          <br />
          perspiciatis ab ipsam repudiandae!
        </p>
        <button
          id="resume"
          className="outline-none bg-transparent border border-blue-300 p-2 mt-4 w-[200px]"
        >
          Check out my resume
        </button>
      </div>
      <div
        className="arrow fixed text-6xl text-blue-300 bottom-2 left-[50%] opacity-50 cursor-pointer"
        id="db-button"
        onClick={handleScroll}
      >
        <MdOutlineKeyboardDoubleArrowDown />
      </div>
    </div>
  );
};

export default Home;
