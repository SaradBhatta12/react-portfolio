import { connectDb, prisma } from "@/utils/connectDB";
import Image from "next/image";
import { AiOutlineEdit } from "react-icons/ai";
import Delete from "../components/Delete";
import Experiences from "../components/Experiences";
import Logout from "../components/Logout";

await connectDb();
const admin = await prisma.admin.findFirst({
  where: {
    email: "saradbhatt2@gmail.com",
  },
});

const projects = await prisma.project.findMany();

const AdminPage = () => {
  return (
    <div className="p-4 sm:ml-20 flex flex-col items-center min-h-screen bg-gray-900 text-white">
      {/* Profile Card */}
      <div className="rounded-lg p-6 w-full max-w-xs sm:max-w-sm md:max-w-md text-center flex flex-col items-center shadow-lg">
        {/* Profile Picture */}
        <div className="w-24 h-24 mx-auto mb-4 relative">
          <Image
            src={admin?.profile || ""}
            alt="Admin Profile"
            className="rounded-full w-full h-full object-cover"
            width={96}
            height={96}
            priority
          />
        </div>

        <div>
          {/* Admin Details */}
          <h2 className="text-xl font-bold">{admin?.name}</h2>
          <p className="text-sm text-gray-300">{admin?.email}</p>

          <div className="mt-4 text-gray-400">
            <p>
              <strong>Role:</strong> Administrator
            </p>
            <p>
              <strong>Joined:</strong> 2024-jan-3
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <button className="flex items-center gap-2 px-3 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600">
            <AiOutlineEdit className="text-lg" />
            Edit Profile
          </button>
          <Logout />
        </div>
      </div>

      {/* Projects Section */}
      <div className="w-full mt-8">
        <h3 className="text-lg font-bold text-center mb-4">Projects</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-4 rounded-md shadow-lg flex flex-col w-full max-w-xs sm:max-w-sm"
            >
              <h4 className="text-lg font-semibold">{project.title}</h4>
              <p className="text-sm text-gray-400 mt-2">
                {project.description}
              </p>
              <Delete id={project.id} />
            </div>
          ))}
        </div>
      </div>

      {/* Experiences Sections */}
      <Experiences />
    </div>
  );
};

export default AdminPage;
