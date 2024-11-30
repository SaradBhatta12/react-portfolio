"use client";

import axios from "axios";
import Link from "next/link";
import React, { memo, useCallback, useEffect, useState } from "react";
import { ImBriefcase } from "react-icons/im";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../loading";

interface ExperienceProps {
  position: string;
  companyName: string;
  startDate: string;
  endDate: string;
  description: string;
  id: string;
}

const Experience: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("");
  const [experiences, setExperiences] = useState<ExperienceProps[]>([]);
  console.log(experiences);

  const [loading, setLoading] = useState(false);
  console.log(experiences);

  // Fetch experiences
  const fetchExperiences = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/auth/exprience");
      const data = response.data.expriences;
      setExperiences(data);
      if (data.length > 0) {
        setActiveItem(data[0].companyName); // Default active item
      }
    } catch (error: any) {
      toast.error(
        error.response?.data?.message || "Error fetching experiences"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchExperiences();
  }, [fetchExperiences]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="mt-20 p-10">
      <h1 className="text-4xl font-extrabold flex gap-3 justify-center items-center opacity-50">
        <ImBriefcase />
        Experience
      </h1>
      <div className="experience flex flex-wrap gap-5 m-10">
        <div className="left flex flex-col w-64 gap-2">
          {experiences?.map((exp) => (
            <li
              key={exp.id}
              className={`list-none p-2 bg-blue-800 hover:bg-blue-700 cursor-pointer text-white rounded ${
                activeItem === exp.companyName ? "bg-blue-600" : ""
              }`}
              onClick={() => setActiveItem(exp.companyName)}
            >
              {exp.companyName}
            </li>
          ))}
        </div>
        <div
          className={`right ${
            experiences.length > 0 ? "bg-blue-900" : ""
          } w-full p-5 rounded text-white`}
        >
          {experiences
            ?.filter((exp) => exp.companyName === activeItem)
            ?.map((exp) => (
              <ExperienceComponent
                key={exp.id}
                position={exp.position}
                companyName={exp.companyName}
                startDate={exp.startDate}
                endDate={exp.endDate}
                description={exp.description}
                id={""}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

const ExperienceComponent: React.FC<ExperienceProps> = ({
  position,
  companyName,
  startDate,
  endDate,
  description,
}) => {
  // Split description by "•" and trim any extra spaces.
  const descriptionItems = description.split("•").map((item) => item.trim());

  return (
    <div className="job">
      <h2 className="text-2xl font-bold">
        🌐 {position} @{" "}
        <Link
          href={`${companyName.replace(/\s+/g, "").toLowerCase()}`}
          className=" hover:text-blue-400"
        >
          {companyName}
        </Link>
      </h2>
      <p className="text-sm mt-2">
        {startDate} - {endDate}
      </p>

      {/* Render the description as a list */}
      <div className="mt-4">
        {descriptionItems.map((item, index) => (
          <p key={index} className="mb-2">
            • {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default memo(Experience);
