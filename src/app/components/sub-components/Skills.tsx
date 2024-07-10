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
      className="flex justify-center items-center gap-4 flex-wrap opacity-70"
      id="skills"
    >
      <div className="p1 border border-blue-400 rounded text-[7rem] p-5">
        <BiLogoReact />
      </div>
      <div className="p1 border border-blue-400 rounded text-[7rem] p-5">
        <RiNextjsLine />
      </div>
      <div className="p1 border border-blue-400 rounded text-[7rem] p-5">
        <SiExpress />
      </div>
      <div className="p1 border border-blue-400 rounded text-[7rem] p-5">
        <FaHtml5 />
      </div>
      <div className="p1 border border-blue-400 rounded text-[7rem] p-5">
        <FaCss3Alt />
      </div>
      <div className="p1 border border-blue-400 rounded text-[7rem] p-5">
        <TbBrandJavascript />
      </div>
      <div className="p1 border border-blue-400 rounded text-[7rem] p-5">
        <RiTailwindCssFill />
      </div>
      <div className="p1 border border-blue-400 rounded text-[7rem] p-5">
        <BsBootstrap />
      </div>
      <div className="p1 border border-blue-400 rounded text-[7rem] p-5">
        <DiMongodb />
      </div>
      <div className="p1 border border-blue-400 rounded text-[7rem] p-5">
        <SiMui />
      </div>
      <div className="p1 border border-blue-400 rounded text-[7rem] p-5">
        <BsGithub />
      </div>
      <div className="p1 border border-blue-400 rounded text-[7rem] p-5">
        <TbBrandOffice />
      </div>
    </div>
  );
};

export default Skills;
