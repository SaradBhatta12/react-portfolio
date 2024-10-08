"use client";

import React, { memo, useState } from "react";
import { ImBriefcase } from "react-icons/im";
import Link from "next/link";

interface ExperienceProps {
  jobTitle: string;
  company: string;
  duration: string;
  tasks: string[];
}

const Experience: React.FC = () => {
  const [activeItem, setActiveItem] = useState("Sofsee Tech.");

  const experiences = [
    {
      company: "Sofsee Tech.",
      jobTitle: "Web Developer Intern",
      duration: "2024 January - 2024 May",
      tasks: [
        "Enhanced my front-end development skills by creating responsive and user-friendly web pages with HTML, CSS, and JavaScript.",
        "Gained valuable experience developing and maintaining a variety of websites using the MERN stack (MongoDB,Express, React, Node.js).",
        "Contributed to the development of interactive features using JavaScript frameworks like React and animation library like GSAP",
      ],
    },
    {
      company: "NeemInfotech.",
      jobTitle: "Frontend Developer",
      duration: "2024 May - 2024 Present",
      tasks: [
        "Optimized application performance and collaborated with cross-functional teams.",
      ],
    },
  ];

  return (
    <div className="mt-[80px] p-10">
      <h1 className="text-4xl flex gap-3 font-extrabold justify-center items-center opacity-50">
        <ImBriefcase /> &nbsp;Experience
      </h1>
      <div className="experience m-20 sm:m-2 flex gap-5 sm:flex-wrap">
        <div className="left flex flex-col w-[16rem] gap-2 sm:flex-row sm:flex-wrap sm:justify-center sm:items-center">
          {experiences.map((exp, index) => (
            <li
              key={index}
              className={`list-none p-2 bg-[#1d4d75] hover:bg-[#31648d] cursor-pointer text-slate-300 ${
                activeItem === exp.company ? "bg-[#31648d]" : ""
              }`}
              onClick={() => setActiveItem(exp.company)}
            >
              {exp.company}
            </li>
          ))}
        </div>
        <div className="right bg-[#436581] w-full h-[20rem] sm:h-full  md:h-full lg:h-full xs:h-full p-3 rounded">
          {experiences.map(
            (exp, index) =>
              activeItem === exp.company && (
                <ExperienceComponent
                  key={index}
                  jobTitle={exp.jobTitle}
                  company={exp.company}
                  duration={exp.duration}
                  tasks={exp.tasks}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

const ExperienceComponent: React.FC<ExperienceProps> = ({
  jobTitle,
  company,
  duration,
  tasks,
}) => {
  return (
    <div className="job">
      <h1 className="title-job text-xl">
        🌐 {jobTitle}{" "}
        <Link
          href={`/${company.replace(/\s+/g, "").toLowerCase()}.com`}
          className="decoration-white"
        >
          @{company}
        </Link>
      </h1>
      <h4 className="date-duration ml-2 text-[13px]">{duration}</h4>
      <h3 className="task opacity-80">
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </h3>
    </div>
  );
};

export default memo(Experience);
