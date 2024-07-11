import React from "react";
import { BiLogoReact } from "react-icons/bi";
import { RiNextjsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsBootstrap } from "react-icons/bs";
import { DiMongodb } from "react-icons/di";
import { SiMui } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { TbBrandOffice } from "react-icons/tb";

const Skills: React.FC = () => {
  return (
    <div
      className="flex justify-center items-center gap-4 flex-wrap opacity-70 p-10 sm:p-2 w-[90%] h-full"
      id="skills"
    >
      <div className="p1 border border-blue-400 rounded text-[7rem] p-5 xs:text-[4rem]">
        <BiLogoReact />
      </div>
      <div className="p1 border border-blue-400 rounded text-[7rem] p-5 xs:text-[4rem]">
        <RiNextjsLine />
      </div>
      <div className="p1 border border-blue-400 rounded text-[7rem] p-5 xs:text-[4rem]">
        <SiExpress />
      </div>
      <div className="p1 border border-blue-400 rounded text-[7rem] p-5 xs:text-[4rem]">
        <FaHtml5 />
      </div>
      <div className="p1 border border-blue-400 rounded text-[7rem] p-5 xs:text-[4rem]">
        <FaCss3Alt />
      </div>
      <div className="p1 border border-blue-400 rounded text-[7rem] p-5 xs:text-[4rem]">
        <TbBrandJavascript />
      </div>
      <div className="p1 border border-blue-400 rounded text-[7rem] p-5 xs:text-[4rem]">
        <RiTailwindCssFill />
      </div>
      <div className="p1 border border-blue-400 rounded text-[7rem] p-5 xs:text-[4rem]">
        <BsBootstrap />
      </div>
      <div className="p1 border border-blue-400 rounded text-[7rem] p-5 xs:text-[4rem]">
        <DiMongodb />
      </div>
      <div className="p1 border border-blue-400 rounded text-[7rem] p-5 xs:text-[4rem]">
        <SiMui />
      </div>
      <div className="p1 border border-blue-400 rounded text-[7rem] p-5 xs:text-[4rem]">
        <BsGithub />
      </div>
      <div className="p1 border border-blue-400 rounded text-[7rem] p-5 xs:text-[4rem]">
        <TbBrandOffice />
      </div>
    </div>
  );
};

export default Skills;
