import React from "react";
import loginNextImg from "../../public/assets/projects/loginNext.png";
import hamburgueriaImg from "../../public/assets/projects/hamburgueria.png";
import travelImg from "../../public/assets/projects/travel.png";
import amakhaParis from "../../public/assets/projects/amakhaparis.png";
import ProjectItem from "@/components/ProjectItem";

export default function Projects() {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto px-2 py-16">
        <h2 className="py-4">Meus Projetos</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            tittle="Amakha Paris"
            backgroundImg={amakhaParis}
            technologies="Next.JS/ Tailwind /JavaScript"
            projectUrl="/amakhaParis"
          />
          <ProjectItem
            tittle="Login & Cadastro"
            backgroundImg={loginNextImg}
            technologies="Next.JS / TypeScript"
            projectUrl="/loginNext"
          />
          <ProjectItem
            tittle="Travel website"
            backgroundImg={travelImg}
            technologies="React.JS"
            projectUrl="/travel"
          />
          <ProjectItem
            tittle="Hamburgueria"
            backgroundImg={hamburgueriaImg}
            technologies="React.JS / NodeJS"
            projectUrl="/hamburgueria"
          />
        </div>
      </div>
    </div>
  );
}
