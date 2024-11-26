import { connectDb, prisma } from "@/utils/connectDB";
import Image from "next/image"; // Importing Image component from Next.js
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa"; // Importing icons from react-icons

interface ProjectData {
  imageUrl: string;
  title: string;
  description: string;
  live: string;
  github: string;
}

await connectDb();
const projects = await prisma.project.findMany({
  orderBy: {
    createdAt: "desc",
  },
});

console.log(projects);

const Page: React.FC = () => {
  if (projects.length <= 0) {
    return (
      <div className="no  text-center w-full mt-10 text-2xl">
        No Projects found <br /> 😒
      </div>
    );
  }

  return (
    <div className="mt-[80px] p-8">
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((proj) => (
          <Card
            key={proj.title} // Use a unique property for the key
            imageUrl={proj.image}
            title={proj.title}
            description={proj.description}
            live={proj.live}
            github={proj.github}
          />
        ))}
      </div>
    </div>
  );
};

// Card component to display individual project details
const Card: React.FC<ProjectData> = ({
  imageUrl,
  title,
  description,
  live,
  github,
}) => {
  const handleNavigation = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-700 hover:shadow-xl transition-all cursor-pointer hover:border hover:border-white">
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 text-white">{title}</h2>
        <p className="text-gray-300 text-base">{description.slice(0, 50)}</p>
      </div>
      <div className="px-6 py-4 flex justify-between gap-4">
        <Link href={live}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2">
            <FaLink /> Live View
          </button>
        </Link>
        <Link href={github}>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2">
            <FaGithub /> Github
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
