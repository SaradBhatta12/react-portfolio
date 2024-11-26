"use client";

import Link from "next/link";
import { useState } from "react";
import { FaDollarSign, FaProjectDiagram, FaUserPlus } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { IoIosMenu, IoMdClose } from "react-icons/io";
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="admin-layout">
      <Sidebar />

      <div className="admin-content">{children}</div>
    </div>
  );
}

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-gray-800 text-white 
      transition-all duration-300 ease-in-out
      ${isOpen ? "w-64" : "w-16"} 
      `}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute right-[-12px] top-3 bg-gray-800 p-2 rounded-full 
          hover:bg-gray-700 transition-colors"
      >
        {isOpen ? <IoMdClose size={20} /> : <IoIosMenu size={20} />}
      </button>

      {/* Logo Section */}
      <div className="flex items-center gap-4 p-4 border-b border-gray-700">
        <FaDollarSign size={24} className="text-green-400 min-w-[24px]" />
        <span
          className={`font-bold text-xl whitespace-nowrap
          ${!isOpen && " hidden"}`}
        >
          Admin Panel
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="p-4 flex flex-col gap-4">
        <Link
          href="/admin"
          className="flex items-center gap-4 p-2 rounded-lg 
            hover:bg-gray-700 transition-colors"
        >
          <ImProfile size={20} className="min-w-[20px]" />
          <span className={`whitespace-nowrap ${!isOpen && " hidden"}`}>
            Your Profile
          </span>
        </Link>
        <Link
          href="/admin/add-biodata"
          className="flex items-center gap-4 p-2 rounded-lg 
            hover:bg-gray-700 transition-colors"
        >
          <FaUserPlus size={20} className="min-w-[20px]" />
          <span className={`whitespace-nowrap ${!isOpen && " hidden"}`}>
            Add Biodata
          </span>
        </Link>

        <Link
          href="/admin/add-projects"
          className="flex items-center gap-4 p-2 rounded-lg 
            hover:bg-gray-700 transition-colors"
        >
          <FaProjectDiagram size={20} className="min-w-[20px]" />
          <span className={`whitespace-nowrap ${!isOpen && " hidden"}`}>
            Add Projects
          </span>
        </Link>
      </nav>
    </aside>
  );
};
