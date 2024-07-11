import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";

const IconPack = () => {
  return (
    <div className="iconpack flex flex-col w-[40px] fixed  items-center left-0 bottom-4 z-20 opacity-50">
      <div className="flex gap-5 text-[1rem] flex-col items-center">
        <Link href={""} className=" text-cyan-300 no-underline">
          {" "}
          <BsGithub />
        </Link>
        <Link href={""} className=" text-cyan-300 no-underline">
          {" "}
          <FaLinkedin />
        </Link>
        <Link href={""} className=" text-cyan-300 no-underline">
          {" "}
          <FaFacebook />
        </Link>
        <Link href={""} className=" text-cyan-300 no-underline">
          {" "}
          <FaTwitter />
        </Link>
      </div>
      <div className="border-bottom h-[10rem] bg-cyan-300 w-[3px] mt-4"></div>
    </div>
  );
};

export default IconPack;
