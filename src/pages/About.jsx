import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import myImage from "../../public/assets/about.jpg";
import Skills from "@/components/Skills";

import { fetchUserData } from "../components/Api";

export default function About() {
  const [programs, setPrograms] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      setPrograms(await fetchUserData());
    };
    loadData();
  }, []);

  return (
    <>
      <div className="w-full md:h-screen p-2 flex items-center py-16">      
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 px-2 py-16">
          <div className="col-span-2">
            <h2 className="py-4">Quem somos</h2>
            <p className="py-2 text-gray-600">
              Meu nome é Isaque Batista, músico clarinetista, admirador de
              idiomas, casado e pai da Rebeca de 2 anos.
            </p>
            <p className="py-2 text-gray-600">
              Desenvolvendo projetos Front-End desde 2022, com maior foco e
              experiência na criação de projetos e-commerce. No <b>Front-End</b>{" "}
              utilizo HTML, CSS, Javascript, React e agora me dedico na
              construção de novos projetos com Nextjs, Typescript e Tailwind. No{" "}
              <b>Back-End</b> utilizo Nodejs e tecnologias como Docker,
              PostgreSQL, MongoDB, dentre outros. Aprendo rápido e posso estudar
              novas tecnologias sempre que necessário. Acredito que ser um
              grande desenvolvedor não é usar uma linguagem específica, mas
              escolher a melhor ferramenta para cada tipo de trabalho.
            </p>
            <Link href="/Projects">
              <p className="py-2 text-gray-600 underline cursor-pointer">
                Confira alguns dos meus últimos projetos.
              </p>
            </Link>
          </div>
          <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-1 hover:scale-105 ease-in duration-300">
            <Image className="rounded-xl" src={myImage} alt="Minha foto" />
          </div>
        </div>
      </div>
      <Skills />
    </>
  );
}
