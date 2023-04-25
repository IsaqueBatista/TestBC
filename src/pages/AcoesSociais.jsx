// import React from "react";
import React, { useEffect, useState } from "react";

import loginNextImg from "../../public/assets/projects/loginNext.png";
import hamburgueriaImg from "../../public/assets/projects/hamburgueria.png";
import travelImg from "../../public/assets/projects/travel.png";
import ProgramaA from "../../public/assets/projects/programaA.png";
import ProjectItem from "@/components/ProjectItem";

import { fetchUserData } from "../components/Api";

export default function AcoesSociais() {

  const [programs, setPrograms] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      setPrograms(await fetchUserData());
    };
    loadData();
  }, []);
  
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto px-2 py-16">
        <h2 className="py-4">Veja outras de nossas ações</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            tittle="Projeto A"
            backgroundImg={ProgramaA}
            technologies="Ação Social - Programa A"
            projectUrl="/ProgramaA"
          />
          <ProjectItem
            tittle="Programa B"
            backgroundImg={loginNextImg}
            technologies="Ação Social - Programa B"
            projectUrl="/ProgramaB"
          />
          <ProjectItem
            tittle="Programa C"
            backgroundImg={travelImg}
            technologies="Ação Social - Programa C"
            projectUrl="/ProgramaC"
          />
          <ProjectItem
            tittle="Programa D"
            backgroundImg={hamburgueriaImg}
            technologies="Ação Social - Programa D"
            projectUrl="/ProgramaD"
          />
        </div>
      </div>
    </div>
  );
}
