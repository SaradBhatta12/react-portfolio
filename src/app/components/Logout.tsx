"use client";
import axios from "axios";
import { useRouter } from "next/navigation"; // For redirection
import { AiOutlineLogout } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";

const Logout = () => {
  const router = useRouter();

  const logoutHandler = async () => {
    const isConfirmed = window.confirm("Are you sure you want to logout?");
    if (!isConfirmed) return;

    try {
      const response = await axios.get("/api/auth/logout"); // Assuming the logout endpoint is `/api/auth/logout`

      if (response.status === 200) {
        toast.success(response.data.message); // Show success message
        router.push("/"); // Redirect to login page after successful logout
      }
    } catch (error) {
      toast.error("An error occurred while logging out. Please try again.");
      console.error("Logout error:", error);
    }
  };

  return (
    <>
      <ToastContainer />
      <button
        onClick={logoutHandler}
        className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white text-sm font-semibold rounded-md hover:bg-red-600"
      >
        <AiOutlineLogout className="text-lg" />
        Logout
      </button>
    </>
  );
};

export default Logout;
