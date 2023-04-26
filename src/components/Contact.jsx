import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import Footer from "../components/Footer";

import contact from "../../public/assets/contact.jpeg";

export default function Contact() {
  return (
    <>
      <div className="w-full md:h-screen p-2 flex items-center py-16">
        <div className="max-w-[1240px] m-auto px-2 py-16 w-full pb-40">
          <h2 className="py-4 text-cyan-900"> Brasil Cursinhos</h2>
          <div className="grid lg:grid-cols-5 gap-8">
            {/* left */}
            <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-3">
              <div className="lg:p-4 h-full">
                <div>
                  <Image
                    className="rounded-xl shadow-md shadow-slate-900 hover:scale-105 ease-in duration-300 mx-auto"
                    src={contact}
                    alt="/"
                    width="300"
                  />
                </div>
                <div>
                  <h2 className="pt-7 text-slate-800">Entre em contato</h2>
                </div>
                <div>
                  <p className="uppercase pt-5">
                    Faça a diferença junto conosco
                  </p>

                  <div className="flex items-center justify-around py-3">
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

                    <a
                      href="https://api.whatsapp.com/send?phone=5534992225485&text=Ol%C3%A1%2C%20meu%20nome%20%C3%A9%20Isaque%2C%20seja%20bem-vindo!"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div
                        className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer 
                    hover:scale-110 ease-in duration-300"
                      >
                        <FaWhatsapp />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* right */}
            <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
              <div className="p-3">
                <form
                  action="https://formsubmit.co/isaquebatista1716@gmail.com"
                  method="POST"
                >
                  <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <input type="hidden" name="_captcha" value="false" />
                    <input
                      type="hidden"
                      name="_next"
                      value="https://tela-obrigado-portfolio.netlify.app/"
                    />

                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-1">Nome</label>
                      <input
                        className="border-2 rounded-lg p-1 flex border-gray-300"
                        type="text"
                        name="name"
                        placeholder="Nome"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-1">Telefone</label>
                      <input
                        className="border-2 rounded-lg p-1 flex border-gray-300"
                        type="number"
                        name="phone"
                        placeholder="Digite seu telefone"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-1">Email</label>
                    <input
                      className="border-2 rounded-lg p-1 flex border-gray-300"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-1">Assunto</label>
                    <input
                      className="border-2 rounded-lg p-1 flex border-gray-300"
                      type="text"
                      name="subject"
                      placeholder="Assunto"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-1">Mensagem</label>
                    <textarea
                      className="border-2 rounded-lg p-3 border-gray-300"
                      rows={6}
                      type="text"
                      name="message"
                      placeholder="Digite sua mensagem..."
                    ></textarea>
                  </div>
                  <button className=" w-full p-2 text-gray-100 mt-4">
                    Enviar mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
