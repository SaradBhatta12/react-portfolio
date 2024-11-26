"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  AiOutlineFileText,
  AiOutlineUpload,
  AiOutlineUser,
} from "react-icons/ai";

const AdminForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    intro: "",
    resume: "",
    profile: null as File | null,
  });
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFormData((prevData) => ({ ...prevData, profile: file || null }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formDataToSubmit = new FormData();
    formDataToSubmit.append("name", formData.name);
    formDataToSubmit.append("intro", formData.intro);
    formDataToSubmit.append("resume", formData.resume);
    if (formData.profile) {
      formDataToSubmit.append("profile", formData.profile);
    }

    try {
      setLoading(true);
      const response = await axios.put("/api/auth/login", formDataToSubmit, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.data.success) {
        toast.success(response.data.message || "Successfully update profile.");
        setFormData({
          name: "",
          intro: "",
          resume: "",
          profile: null,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#113b5d] sm:w-[18rem] sm:ml-20">
      <Toaster />
      <form
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <h2 className="text-2xl font-bold text-center text-[#113b5d] mb-6">
          Admin Form
        </h2>

        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-gray-50">
            <AiOutlineUser className="text-gray-500 mr-2" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className="w-full bg-transparent outline-none text-gray-700"
              required
            />
          </div>
        </div>

        {/* Intro Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Intro
          </label>
          <div className="flex items-start border border-gray-300 rounded-md px-3 py-2 bg-gray-50">
            <AiOutlineFileText className="text-gray-500 mr-2 mt-1" />
            <textarea
              name="intro"
              value={formData.intro}
              onChange={handleInputChange}
              placeholder="Write a short intro"
              className="w-full bg-transparent outline-none text-gray-700 resize-none h-20"
              required
            />
          </div>
        </div>

        {/* Resume Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Resume
          </label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-gray-50">
            <AiOutlineFileText className="text-gray-500 mr-2" />
            <input
              type="text"
              name="resume"
              value={formData.resume}
              onChange={handleInputChange}
              placeholder="Enter your resume link"
              className="w-full bg-transparent outline-none text-gray-700"
              required
            />
          </div>
        </div>

        {/* Profile Photo Field */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Profile Photo
          </label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-gray-50">
            <AiOutlineUpload className="text-gray-500 mr-2" />
            <input
              type="file"
              name="profile"
              onChange={handleFileChange}
              className="w-full bg-transparent outline-none text-gray-700"
              accept="image/*"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#113b5d] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#0e2f4a] transition"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AdminForm;
