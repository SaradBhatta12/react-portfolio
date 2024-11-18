"use client";
<<<<<<< HEAD
import React, { memo } from "react";
=======
import React, { memo, useCallback } from "react";
>>>>>>> b9b8e6c (resume update)
import project from "./project.json";

interface ProjectData {
  imageUrl: string;
  title: string;
  description: string;
  live: string;
  github: string;
}

const Page: React.FC = () => {
<<<<<<< HEAD
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
=======
  const renderProjectCard = useCallback((proj: ProjectData) => {
    return (
      <Card
        key={proj.title} // Use a unique property for the key
        imageUrl={proj.imageUrl}
        title={proj.title}
        description={proj.description}
        live={proj.live}
        github={proj.github}
      />
    );
  }, []);

  return (
    <div className="mt-[80px] p-8">
      <div className="flex flex-wrap justify-center gap-6">
        {project.projects.map(renderProjectCard)}
>>>>>>> b9b8e6c (resume update)
      </div>
    </div>
  );
};

<<<<<<< HEAD
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
=======
const Card: React.FC<ProjectData> = memo((props) => {
  const handleNavigation = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-700 hover:shadow-xl transition-all cursor-pointer hover:border hover:border-white ">
      <img
        className="w-full h-48 object-cover lazy-load"
        src={props.imageUrl}
        alt={props.title}
        loading="lazy" // Lazy load the image
        onError={(e) => {
          (e.target as HTMLImageElement).src = "/fallback-image.jpg"; // Use a fallback image
        }}
      />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{props.title}</h2>
        <p className="text-gray-300 text-base">{props.description}</p>
      </div>
      <div className="px-6 py-4 flex justify-between">
        <button
          onClick={() => handleNavigation(props.live)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
>>>>>>> b9b8e6c (resume update)
        >
          Live View
        </button>
        <button
<<<<<<< HEAD
          onClick={() => {
            location.href = props.github;
          }}
=======
          onClick={() => handleNavigation(props.github)}
>>>>>>> b9b8e6c (resume update)
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Github
        </button>
      </div>
    </div>
  );
<<<<<<< HEAD
};
=======
});
>>>>>>> b9b8e6c (resume update)

export default memo(Page);
