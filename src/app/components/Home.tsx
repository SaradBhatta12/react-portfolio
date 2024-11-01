"use client";

import Link from "next/link";
import React, { memo } from "react";
import Typewriter from "typewriter-effect";

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
    <div className="h-full flex justify-center items-center flex-col gap-20">
      <div className="home  w-[80%] sm:mr-[20px] flex justify-center flex-col xs:text-center xs:items-center md:ml-9 lg:ml-9 xl:ml-9">
        <p className="intro-s text-[17px] m-3">My name is</p>
        <h1 className="name-prof text-5xl text-blue-400 sm:text-3xl xs:text-2xl">
          Sarad Bhatta. <br />
          <span className="text-blue-300 flex xs:w-full xs:justify-center gap-3 p-2 xs:text-2xl sm:text:3xl">
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
          I am a passionate and results-oriented engineer. Knowledge of
          programming languages with their technology and operations related to
          the computer.
        </p>
        <Link href={"https://drive.google.com/file/d/1gxz4rufhU2Fe3R6dJ9CDm1i3SpnJzP_-/view?usp=sharing"}>
          <button
            id="resume"
            className="outline-none bg-transparent border border-blue-300 p-2 mt-4 w-[200px]"
          >
            Check out my resume
          </button>
        </Link>
      </div>
      <div
        className="arrow fixed text-6xl text-blue-300 bottom-2 left-[50%] opacity-50 cursor-pointer"
        id="db-button"
        onClick={handleScroll}
      >
        {/* <MdOutlineKeyboardDoubleArrowDown /> */}
      </div>
    </div>
  );
};

export default memo(Home);
