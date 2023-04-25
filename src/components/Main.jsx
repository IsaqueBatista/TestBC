import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div className="mb-0 w-full h-screen text-center ">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="mt-10">
          <p className="uppercase text-sm tracking-widest text-gray-600 mt-10">
            Vamos construir algo incrível juntos
          </p>
          <h1 className="py-4 text-gray-700">
            Olá, sou <span className="text-[#5651e5]">Isaque Batista</span>.
          </h1>
          <h1 className="py-4 text-gray-700">Desenvolvedor Front-End</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Em meio a um mundo cada vez mais digital e com várias oportunidades
            surgindo, cada projeto desenvolvido significa um sonho sendo
            entregue e o sentimento da gratidão me move para entregar sempre o
            melhor de mim.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/isaque-batista-de-oliveira-a3b619236/"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer 
                hover:scale-110 ease-in duration-300"
              >
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/IsaqueBatista"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer 
                hover:scale-110 ease-in duration-300"
              >
                <FaGithub />
              </div>
            </a>
            <Link href="/Contact">
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer 
                hover:scale-110 ease-in duration-300"
              >
                <AiOutlineMail />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
