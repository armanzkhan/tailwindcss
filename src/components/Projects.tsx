import { FC } from "react";
import { headerItems, projects } from "@/constants/Constant";
import Image from "next/image";

const Projects: FC = () => {
  return (
    <section
      id={headerItems.projects.page}
      className="flex text-center justify-center items-center mt-3 break-words flex-wrap"
    >
      {/* Left Section */}

      <h1 className="text-6xl text-white">Proj</h1>

      {Object.keys(projects).map((project) => (
        <Image
          src={projects[project as keyof Projects].image}
          alt="proj"
          width={300}
          height={300}
          className="mt-4 p-2"
        />
      ))}
    </section>
  );
};

export default Projects;
