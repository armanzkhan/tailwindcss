"use client";
import { FC } from "react";
import { headerItems, userInfo } from "@/constants/Constant";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";


const Intro: FC = () => {
  return (
    <section id={headerItems.home.page} className="h-screen flex-col md:flex  text-center justify-evenly items-center">
      {/* Left Section */}
      {/* Right Section */}
      <div className="md:ml-20 sm:ml-12 md:w-1/2">
        <h1 className="text-7xl uppercase hidden md:block">Software Developer</h1>
        <h1 className="text-2xl mt-5 md:text-3xl">Hi, I&#39;m <span className="text-green-600 text-3xl md:text-4xl"><b>{userInfo.name}</b></span></h1>
        <p className="mt-4 mb-4" dangerouslySetInnerHTML={{__html: userInfo.heading}} />
        <ScrollLink to={headerItems.projects.page} className="w-38 h-16 text-2xl border-separate rounded-none text-teal-400 box-border"
        spy={true}
        smooth={true}>Projects</ScrollLink>
      </div>
    </section>
  );
};

export default Intro;
