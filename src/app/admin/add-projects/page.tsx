"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  AiFillGithub,
  AiOutlineFileText,
  AiOutlineLink,
  AiOutlinePicture,
} from "react-icons/ai";

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    live: "",
    github: "",
  });
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const router = useRouter();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("live", formData.live);
    data.append("github", formData.github);

    if (imageFile) {
      data.append("image", imageFile); // Append the file to the FormData object
    } else {
      alert("Please upload an image.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("/api/auth/project", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (response.data.success) {
        toast.success("Project create successfully");
        router.push("/admin/add-projects");
      } else {
        toast.error("Failed to add project.");
      }
    } catch (error) {
      toast.error("Failed to add project.");
    } finally {
      setLoading(false);
      setFormData({
        title: "",
        description: "",
        live: "",
        github: "",
      });
      setImageFile(null);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#113b5d]">
      <Toaster />
      <form
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <h2 className="text-2xl font-bold text-center text-[#113b5d] mb-6">
          Add New Project
        </h2>

        {/* Title Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2 sm:w-[18rem] sm:ml-20">
            Title
          </label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-gray-50">
            <AiOutlineFileText className="text-gray-500 mr-2" />
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter project title"
              className="w-full bg-transparent outline-none text-gray-700"
              required
            />
          </div>
        </div>

        {/* Description Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <div className="flex items-start border border-gray-300 rounded-md px-3 py-2 bg-gray-50">
            <AiOutlineFileText className="text-gray-500 mr-2 mt-1" />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Write a short description"
              className="w-full bg-transparent outline-none text-gray-700 resize-none h-20"
              required
            />
          </div>
        </div>

        {/* Image Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Image
          </label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-gray-50">
            <AiOutlinePicture className="text-gray-500 mr-2" />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full bg-transparent outline-none text-gray-700"
              required
            />
          </div>
        </div>

        {/* Live Link Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Live URL
          </label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-gray-50">
            <AiOutlineLink className="text-gray-500 mr-2" />
            <input
              type="text"
              name="live"
              value={formData.live}
              onChange={handleInputChange}
              placeholder="Enter live project link"
              className="w-full bg-transparent outline-none text-gray-700"
              required
            />
          </div>
        </div>

        {/* GitHub Link Field */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            GitHub URL
          </label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-gray-50">
            <AiFillGithub className="text-gray-500 mr-2" />
            <input
              type="text"
              name="github"
              value={formData.github}
              onChange={handleInputChange}
              placeholder="Enter GitHub repository link"
              className="w-full bg-transparent outline-none text-gray-700"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#113b5d] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#0e2f4a] transition"
        >
          {loading ? "Adding..." : "Add Project"}
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;
