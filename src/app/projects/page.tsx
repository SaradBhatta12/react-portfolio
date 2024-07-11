"use client";
import React from "react";
import project from "./project.json";

interface ProjectData {
  imageUrl: string;
  title: string;
  description: string;
  live: string;
  github: string;
}

const Page: React.FC = () => {
  return (
    <div className="mt-[80px] p-8">
      <div className="flex items-center justify-center gap-4 flex-wrap">
        {project.projects.map((proj: ProjectData) => {
          return (
            <Card
              key={Math.floor(Math.random() * 1000000)} // Use a more realistic key generation logic
              imageUrl={proj.imageUrl}
              title={proj.title}
              description={proj.description}
              live={proj.live}
              github={proj.github}
            />
          );
        })}
      </div>
    </div>
  );
};

const Card: React.FC<ProjectData> = (props) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:border hover:cursor-pointer hover:border-white transition-all">
      <img className="w-full" src={props.imageUrl} alt={props.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.title}</div>
        <p className="text-gray-200 text-base">{props.description}</p>
      </div>
      <div className="px-6 py-4">
        <button
          onClick={() => {
            location.href = props.live;
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Live View
        </button>
        <button
          onClick={() => {
            location.href = props.github;
          }}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Github
        </button>
      </div>
    </div>
  );
};

export default Page;
