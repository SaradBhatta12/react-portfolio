"use client";

import React, { useState } from "react";
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
      jobTitle: "Web Developer",
      duration: "2024 January - Present",
      tasks: [
        "Worked on Frontend technology while implementing the UI. Implemented website design and enhanced interactivity.",
        "Conducted testing tasks to ensure website functionality and quality. Created and implemented API calls.",
      ],
    },
    {
      company: "NeemInfotech.",
      jobTitle: "Software Engineer",
      duration: "2022 March - 2023 December",
      tasks: [
        "Developed backend services and integrated them with frontend components.",
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
        <div className="right bg-[#436581] w-full h-[20rem] p-3 rounded">
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

export default Experience;
