"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { memo, useEffect, useRef, useState } from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { BiLogIn, BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.2,
      },
    },
    closed: {
      x: "-100%",
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const linkVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target as Node)
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      <div className="z-20 fixed left-0 top-0 flex justify-between items-center w-full h-[70px] p-4">
        <div className="logo">
          <AiOutlineDollar
            className="text-5xl font-extrabold text-blue-300 cursor-pointer "
            onClick={() => {
              location.href = "/";
            }}
          />
        </div>
        <div className="Menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <CgClose className="text-4xl font-extrabold text-black cursor-pointer bg-slate-300 p-1 rounded" />
          ) : (
            <BiMenu className="text-4xl font-extrabold text-black cursor-pointer bg-slate-300 p-1 rounded" />
          )}
        </div>
      </div>
      <motion.div
        id="navbar"
        ref={navbarRef}
        className="nav-pack fixed w-[300px] top-0 left-0 h-[100vh] bg-[#164368] text-blue-300 font-extrabold z-40"
        variants={containerVariants}
        initial="closed"
        animate={menuOpen ? "open" : "closed"}
      >
        <div className="links flex gap-5 items-center flex-col text-3xl opacity-70 mt-6">
          <motion.div
            variants={linkVariants}
            className=" font-normal text-xl hover:text-3xl duration-200 font-serif uppercase"
          >
            <Link href={"/"}>About</Link>
          </motion.div>
          <motion.div
            variants={linkVariants}
            className=" font-normal text-xl hover:text-3xl duration-200 font-serif uppercase"
          >
            <Link href={"/projects"}>Projects</Link>
          </motion.div>
          <motion.div
            variants={linkVariants}
            className=" font-normal text-xl hover:text-3xl duration-200 font-serif uppercase"
          >
            <Link href={"/exprience"}>Exprience</Link>
          </motion.div>
          <motion.div
            variants={linkVariants}
            className=" font-normal text-xl hover:text-3xl duration-200 font-serif uppercase"
          >
            <Link href={"/contacts"}>Contacts</Link>
          </motion.div>

          <div className="login flex items-center justify-center absolute bottom-3 left-5">
            <BiLogIn />
            <Link href={"/login"}>Admin Login</Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default memo(Navbar);
