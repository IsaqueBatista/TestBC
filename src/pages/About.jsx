import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import AboutImg from "../../public/assets/about.jpg";

export default function About() {
  return (
    <>
      <div className="w-full md:h-screen p-2 flex items-center py-16">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 px-2 py-16">
          <div className="col-span-2">
            <h2 className="py-4">Quem somos</h2>
            <p className="py-2 text-gray-900">Somos a Brasil Cursinhos.</p>
            <p className="py-2">
              A Brasil Cursinhos é uma organização sem fins lucrativos, de
              caráter socioeducativo, que tem como objetivo fomentar,
              desenvolver e integrar Cursinhos Universitários Populares em
              âmbito nacional.
            </p>
            <p>
              A nossa missão é representar e potencializar o Movimento de
              Cursinhos Universitários Populares (MCUP) a partir da integração e
              do desenvolvimento de lideranças para transformar a educação no
              Brasil. Atualmente, temos uma rede que possui 25 cursinhos
              associados, que juntos contabilizam mais de 1400 universitários
              voluntários trabalhando e 3800 estudantes de baixa renda sendo
              impactados pela educação popular.
            </p>

            <Link href="/Contact">
              <p className="py-2 mt-5 rounded-sm bg-cyan-900 text-slate-200 pl-3 underline cursor-pointer">
                Clique aqui e faça parte você também!
              </p>
            </Link>
          </div>
          <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-1 hover:scale-105 ease-in duration-300">
            <Image className="rounded-xl" src={AboutImg} alt="Minha foto" />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
