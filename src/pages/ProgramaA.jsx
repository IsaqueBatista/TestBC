import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import { BsArrowLeft } from "react-icons/bs";

import ProgramaaA from "../../public/assets/projects/ProgramaA.png";
import { fetchUserData } from "../components/Api";

export default function ProgramaA() {
  const [programs, setPrograms] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      setPrograms(await fetchUserData());
    };
    loadData();
  }, []);
  
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={ProgramaaA}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">{programs.name}</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">

          <h2 className="pb-5">Sobre o programa</h2>
          <p>
          {programs.description}
          </p>

          <h3 className="pt-5">Objetivos</h3>
          <p>
          {programs.objectives}
          </p>

          <h3 className="pt-5">Metas</h3>
          <p>
          {programs.goals}
          </p>

          <h3 className="pt-5">Impactos</h3>
          <p className="pb-10">
          {programs.impact}
          </p>

          <a
            href="https://github.com/IsaqueBatista/TestBC"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Repositório</button>
          </a>
          <a
            href="https://brasilcursinhos.org/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Abrir</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Se envolva conosco</p>

            <div className="grid grid-cols-2 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Fazendo doações
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Sendo vonluntário
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Nos indicando
              </p>
            </div>
          </div>
        </div>
        <Link href="/AcoesSociais">
          <button className="px-8 py-2 mt-4 mr-8 flex items-center">
            <BsArrowLeft className="pr-1" /> Voltar
          </button>
        </Link>
      </div>
    </div>
  );
}
