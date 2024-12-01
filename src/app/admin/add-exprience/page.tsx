"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ExperienceForm = () => {
  const [formData, setFormData] = useState({
    position: "",
    companyName: "",
    startDate: "",
    endDate: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post("/api/auth/exprience", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        toast.success(
          response.data.message || "Experience added successfully!"
        );
        setTimeout(() => {
          router.push("/admin/exprience");
        }, 1000);
      } else {
        toast.error(response.data.message || "Failed to add experience.");
      }
    } catch (error: any) {
      toast.error(
        error.response.data.message ||
          error.message ||
          "Error adding experience."
      );
    } finally {
      setLoading(false);
      setFormData({
        position: "",
        companyName: "",
        startDate: "",
        endDate: "",
        description: "",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#113b5d] sm:w-[18rem] sm:ml-20">
      <ToastContainer />
      <form
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center text-[#113b5d] mb-6">
          Add New Experience
        </h2>

        {/* Position Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Position
          </label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleInputChange}
            placeholder="Enter position"
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </div>

        {/* Company Name Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            placeholder="Enter company name"
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </div>

        {/* Start Date Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Start Date
          </label>
          <input
            type="text"
            name="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
            placeholder="Enter start date (e.g., 2024-01-01)"
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </div>

        {/* End Date Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            End Date
          </label>
          <input
            type="text"
            name="endDate"
            value={formData.endDate}
            onChange={handleInputChange}
            placeholder="Enter end date (e.g., 2024-12-31) or 'Present'"
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        {/* Description Field */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Enter a description"
            className="w-full border border-gray-300 p-2 rounded-md h-20"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#113b5d] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#0e2f4a] transition"
        >
          {loading ? "Submitting..." : "Add Experience"}
        </button>
      </form>
    </div>
  );
};

export default ExperienceForm;
