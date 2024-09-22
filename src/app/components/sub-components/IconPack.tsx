import Link from "next/link";
import { memo } from "react";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const IconPack = () => {
  return (
    <div className="iconpack flex flex-col w-[40px] fixed h-[30%] items-center justify-center left-0 bottom-4 z-20 opacity-50 bg-slate-500 pt-4 pb-4">
      <div className="flex gap-5 text-[14px] flex-col items-center">
        <Link href={""} className=" text-cyan-300 no-underline">
          {" "}
          <BsGithub />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/sarad-bhatt-89070b281/"}
          className=" text-cyan-300 no-underline"
        >
          {" "}
          <FaLinkedin />
        </Link>
        <Link
          href={"https://www.facebook.com/profile.php?id=100069794144427"}
          className=" text-cyan-300 no-underline"
        >
          {" "}
          <FaFacebook />
        </Link>
        <Link
          href={"https://www.instagram.com/sarad984046/"}
          className=" text-cyan-300 no-underline"
        >
          {" "}
          <BsInstagram />
        </Link>
      </div>
    </div>
  );
};

export default memo(IconPack);
