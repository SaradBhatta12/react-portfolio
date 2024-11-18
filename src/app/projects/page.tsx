"use client";
import React, { memo, useCallback } from "react";
import project from "./project.json";
import Image from "next/image"; // Importing Image component from Next.js

interface ProjectData {
  imageUrl: string;
  title: string;
  description: string;
  live: string;
  github: string;
}

const Page: React.FC = () => {
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
      </div>
    </div>
  );
};

// Explicitly setting displayName for the Card component
const Card: React.FC<ProjectData> = memo((props) => {
  const handleNavigation = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-700 hover:shadow-xl transition-all cursor-pointer hover:border hover:border-white">
      <div className="relative w-full h-48">
        <Image
          src={props.imageUrl}
          alt={props.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/fallback-image.jpg";
          }}
        />
      </div>
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{props.title}</h2>
        <p className="text-gray-300 text-base">{props.description}</p>
      </div>
      <div className="px-6 py-4 flex justify-between">
        <button
          onClick={() => handleNavigation(props.live)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Live View
        </button>
        <button
          onClick={() => handleNavigation(props.github)}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Github
        </button>
      </div>
    </div>
  );
});

// Adding displayName to Card component
Card.displayName = "Card";

export default memo(Page);
