import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { memo } from "react";

const IconPack = () => {
  return (
    <div className="iconpack flex flex-col w-[40px] fixed h-[30%] items-center justify-center left-0 bottom-4 z-20 opacity-50 bg-slate-500 pt-4 pb-4">
      <div className="flex gap-5 text-[14px] flex-col items-center">
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
    </div>
  );
};

export default memo(IconPack);
