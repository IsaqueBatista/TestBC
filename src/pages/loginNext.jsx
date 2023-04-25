  import Image from "next/image";
import React from "react";
import loginNextImg from "../../public/assets/projects/loginNext.png";
import { RiRadioButtonFill } from "react-icons/ri";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";

export default function loginNext() {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={loginNextImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Login & Cadastro</h2>
          <h3>Next JS / Typescript</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2 className="pb-5">Sobre o projeto</h2>
          <p>
            Sistema de Login utilizando Typescript e NextJs. <br/>
            O projeto simula todo o fluxo de cadastro e login do usuário. Nele temos
            validação de formulários, ciptografia e descriptografia de senha, página Home informando os dados do usuário cadastrado e armazenamento dos dados no LocalStorage.
          </p>
          <a
            href="https://github.com/IsaqueBatista/Login-NextJS"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Repositório</button>
          </a>
          <a
            href="https://login-nextjs-isaquebatista.vercel.app/login"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Abrir</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Tecnologias</p>

            <div className="grid grid-cols-2 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next.JS
              </p>

              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Typescript
              </p>

              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React-hook-form
              </p>

              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React-Toastify
              </p>

              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> atob/btoa
              </p>

              
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> LocalStorage
              </p>
            </div>
          </div>
        </div>
        <Link href="/Projects">
          <button className="px-8 py-2 mt-4 mr-8 flex items-center">
            <BsArrowLeft className="pr-1" /> Voltar
          </button>
        </Link>

      </div>
    </div>
  );
}
