import React, { useEffect, useState } from "react";

import ProgramaaA from "../../public/assets/projects/ProgramaA.png";
import ProgramaaB from "../../public/assets/projects/ProgramaB.png"
import ProgramaaC from "../../public/assets/projects/ProgramaC.png";
import ProgramaaD from "../../public/assets/projects/ProgramaD.png";
import ProjectItem from "../components/ProjectItem";

// import { fetchUserData } from "../components/Api";

import Footer from "../components/Footer";

export default function AcoesSociais() {
  // const [programs, setPrograms] = useState([]);
  // useEffect(() => {
  //   const loadData = async () => {
  //     setPrograms(await fetchUserData());
  //   };
  //   loadData();
  // }, []);

  return (
    <>
      <div className="w-full md:h-screen p-2 flex items-center py-16">
        <div className="max-w-[1200px] h-full m-auto px-12 py-16">
          <h2 className="py-4 pb-6">Veja algumas de nossas ações</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectItem
              tittle="Projeto A"
              backgroundImg={ProgramaaA}
              technologies="Ação Social - Programa A"
              projectUrl="/ProgramaA"
            />
            <ProjectItem
              tittle="Programa B"
              backgroundImg={ProgramaaB}
              technologies="Ação Social - Programa B"
              projectUrl="/ProgramaB"
            />
            <ProjectItem
              tittle="Programa C"
              backgroundImg={ProgramaaC}
              technologies="Ação Social - Programa C"
              projectUrl="/ProgramaC"
            />
            <ProjectItem
              tittle="Programa D"
              backgroundImg={ProgramaaD}
              technologies="Ação Social - Programa D"
              projectUrl="/ProgramaD"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
