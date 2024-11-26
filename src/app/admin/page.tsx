import { connectDb, prisma } from "@/utils/connectDB";
import Image from "next/image";
import { AiOutlineEdit } from "react-icons/ai";
import Logout from "../components/Logout";

await connectDb();
const admin = await prisma.admin.findFirst({
  where: {
    email: "saradbhatt2@gmail.com",
  },
});
const AdminPage = () => {
  return (
    <div className="p-4 md:p-8 flex flex-col items-center justify-center min-h-screen text-nowrap">
      {/* Profile Card */}
      <div className=" rounded-lg p-6 w-full md:w-1/2 lg:w-1/3 text-center flex flex-col justify-center items-center">
        {/* Profile Picture */}
        <div className="w-24 h-24 mx-auto mb-4 relative">
          <Image
            src={admin?.profile || ""} // Replace with your actual image path
            alt="Admin Profile"
            className="rounded-full mb-10 w-full h-full object-cover"
            width={96}
            height={96}
            priority={true}
          />
        </div>

        <div>
          {/* Admin Details */}
          <h2 className="text-xl font-bold text-gray-100">{admin?.name}</h2>
          <p className="text-sm text-gray-200">{admin?.email}</p>

          {/* Additional Info */}
          <div className="mt-4 text-gray-300">
            <p>
              <strong>Role:</strong> Administrator
            </p>
            <p>
              <strong>Joined:</strong> 2024-jan-3
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-md hover:bg-blue-600">
            <AiOutlineEdit className="text-lg" />
            Edit Profile
          </button>
          <Logout />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
