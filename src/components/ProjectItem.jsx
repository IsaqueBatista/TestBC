import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ tittle, backgroundImg, technologies, projectUrl }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-500 rounded-xl p-1 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff38]">
      <Image
        className="rounded-xl group-hover:opacity-20 duration-500"
        src={backgroundImg}
        alt="Login Next Project"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {tittle}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{technologies}</p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            Saiba mais
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
