import Image from "next/image";
import React from "react";
import hamburgueriaImg from "../../public/assets/projects/hamburgueria.png";
import { RiRadioButtonFill } from "react-icons/ri";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";

export default function hamburgueria() {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={hamburgueriaImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Hamburgueria</h2>
          <h3>React JS / Node JS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2 className="pb-5">Sobre o projeto</h2>
          <p>
            Após criar o pedido na tela Home e ser encaminhado para a página dos
            pedidos já realizados, é possível editar o pedido e também
            excluí-lo. Este é um projeto para testes, em breve novas melhorias
            no qual teremos cadastro e login do usuário, página para escolha dos
            pedidos, carrinho de compras e também a página de
            administrador/proprietário.
          </p>
          <a
            href="https://github.com/IsaqueBatista/My-Hamburgueria-Front-End"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">
              Repositório Front-End
            </button>
          </a>
          <a
            href="https://github.com/IsaqueBatista/My-Hamburgueria-Back-End"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Repositório Back-End</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Tecnologias</p>

            <div className="grid grid-cols-2 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React.JS
              </p>

              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>

              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Node.JS
              </p>

              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Styled-Components
              </p>

              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Axios
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Express
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> uuid
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Cors
              </p>
            </div>
          </div>
        </div>
        <div>
          <Link className="flex items-center" href="/Projects">
            <button className="px-8 py-2 mt-4 flex items-center">
              <BsArrowLeft className="pr-1" /> Voltar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
