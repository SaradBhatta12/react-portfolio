"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
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

const Experiences = () => {
  const [exp, setExp] = useState<ExperienceProps[]>([]);
  const [loading, setLoading] = useState(false);
  const handleDelete = async (id: string) => {
    try {
      const res = await axios.delete(`/api/auth/exprience`, {
        data: {
          exprienceId: id,
        },
      });
      toast.success(res.data.message || "Deleted successfully");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error: any) {
      toast.error(
        error.response.data.message ||
          error.response.message ||
          "faild to deleted"
      );
    }
  };

  useEffect(() => {
    const getExp = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/api/auth/exprience");
        setExp(res.data.expriences);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getExp();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="w-full mt-8">
      <ToastContainer />
      <h3 className="text-lg font-bold text-center mb-4">Experiences</h3>
      <div className="flex flex-wrap justify-center gap-6">
        {!exp ? (
          <div className="notfound w-full text-center rounded">
            No Experiences found
          </div>
        ) : (
          exp.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-4 rounded-md shadow-lg flex flex-col w-full max-w-xs sm:max-w-sm"
            >
              <h4 className="text-lg font-semibold">{project.companyName}</h4>
              <p className="text-sm text-gray-400 mt-2">{project.position}</p>
              <button
                onClick={() => handleDelete(project.id)}
                className="mt-4 flex items-center justify-center gap-2 px-4 py-2 bg-red-500 text-white text-sm font-semibold rounded hover:bg-red-600"
              >
                <AiOutlineDelete className="text-lg" />
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Experiences;
