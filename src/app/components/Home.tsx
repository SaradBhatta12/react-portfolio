import { connectDb, prisma } from "@/utils/connectDB";
import Link from "next/link";
import React from "react";
import Type from "./Type";

await connectDb();
const bio = await prisma.admin.findFirst({
  where: {
    id: 1,
  },
});
const Home: React.FC = () => {
  return (
    <div className="h-full flex justify-center items-center flex-col gap-20">
      <div className="home w-[80%] sm:mr-[20px] flex justify-center flex-col xs:text-center xs:items-center md:ml-9 lg:ml-9 xl:ml-9">
        <p className="intro-s text-[17px] m-3">My name is</p>
        <h1 className="name-prof text-5xl text-blue-400 sm:text-3xl xs:text-2xl">
          {bio?.name} <br />
          <span className="text-blue-300 flex xs:w-full xs:justify-center gap-3 p-2 xs:text-2xl sm:text-3xl">
            I am
            <Type />
          </span>
        </h1>
        <p className="desc-d text-[20px] text-blue-500 mt-1 xs:p-3">
          {bio?.intro}
        </p>
        <Link href={bio?.resume || ""}>
          <button
            id="resume"
            className="outline-none bg-transparent border border-blue-300 p-2 mt-4 w-[200px]"
          >
            Check out my resume
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
