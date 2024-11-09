import { FC } from "react";
import { headerItems, userInfo } from "@/constants/Constant";
import Image from "next/image";

const About: FC = () => {
  return (
    <section id={headerItems.about.page} className="h-screen flex-col md:flex text-center justify-evenly items-center">
      {/* Left Section */}
      <div className="m-4 md:ml-20 sm:ml-12 md:w-1/2">
        <h1 className="text-6xl">About</h1>
        <h2 className="text-3xl my-4">Get to know me!</h2>
        <p className="mt-4 mb-4" dangerouslySetInnerHTML={{ __html: userInfo.about }} />
      </div>
      {/* Right Section */}
      <div className="flex flex-col justify-center items-center text-center">
        <Image src={userInfo.picture} alt="dp" width={300} height={300} className="m-auto" />
      </div>
      <div className="mt-3 break-words">
        {userInfo.skills.map((skill, index) => (
          <span className="bg-gray-200 m-1 p-2 rounded-md" key={index}>{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default About;
