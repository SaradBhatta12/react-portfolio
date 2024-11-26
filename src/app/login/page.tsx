"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import Loading from "../loading";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post("/api/auth/login", {
        email,
        password,
      });
      if (res.data.success) {
        setTimeout(() => {
          toast.success(res.data.message || "Login successful");
        }, 2000);
        setTimeout(() => {
          router.push("/admin");
        }, 2000);
      } else {
        toast.error(
          res.data.message || res.data.error.message || "Login failed"
        );
      }
    } catch (error) {
      toast.error("Login failed");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <Toaster />
      <div
        className="bg-white shadow-md rounded-lg p-6 sm:p-4 sm:w-[19rem] sm:mr-8 w-full max-w-md"
        style={{ marginLeft: "2rem", marginTop: "1rem" }}
      >
        <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div className="relative">
            <AiOutlineMail className="absolute text-gray-900 text-lg top-1/2 left-3 transform -translate-y-1/2" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400 text-gray-900"
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <AiOutlineLock className="absolute text-gray-900 text-lg top-1/2 left-3 transform -translate-y-1/2" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-10 pr-12 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400 text-gray-900"
            />
            <button
              type="button"
              onClick={handleShowPassword}
              className="absolute text-gray-400 top-1/2 right-3 transform -translate-y-1/2"
            >
              {showPassword ? (
                <MdVisibilityOff size={20} />
              ) : (
                <MdVisibility size={20} />
              )}
            </button>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              {loading ? "Submiting" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
