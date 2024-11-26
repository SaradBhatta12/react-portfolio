"use client";
import { AiOutlineDelete } from "react-icons/ai";

interface DeleteProps {
  id: number; // Ensure id is a number
}

const Delete = ({ id }: DeleteProps) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/auth/project`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Projectid: id }), // Send numeric ID
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message); // Optional: Replace with toast notifications
        window.location.reload();
      } else {
        alert(result.message || "Failed to delete the project");
      }
    } catch (error) {
      console.error("Error deleting project:", error);
      alert("An error occurred while deleting the project");
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="mt-4 flex items-center justify-center gap-2 px-4 py-2 bg-red-500 text-white text-sm font-semibold rounded hover:bg-red-600"
    >
      <AiOutlineDelete className="text-lg" />
      Delete
    </button>
  );
};

export default Delete;
