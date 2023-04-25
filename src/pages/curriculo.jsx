import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {BsCloudDownload} from 'react-icons/bs'

export default function curriculo() {
  return (
    <>
      <Head>
        <title>Isaque | CV</title>
        <meta
          name="description"
          content="Sou um Desenvolvedor Front-End com experiência na construção de projetos e-commerce."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Currículo</h2>

        {/*  */}
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Isaque Batista de Oliveira</h2>
          <div className="flex">
            <div className="flex items-center">
              <a
                href="https://www.linkedin.com/in/isaque-batista-de-oliveira-a3b619236/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
              </a>
              <a
                href="https://github.com/IsaqueBatista"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={20} style={{ marginRight: "1rem" }} />
              </a>
            </div>

            <div className="bg-[#959c9f] rounded-md text-[#ffffff] p-1 pr-0">
              <div className="p-1">
                <div className="p-1 pr-0">
                  <a
                    className="underline"
                    href="./assets/CV-ISAQUE_BATISTA_DE_OLIVEIRA.pdf"
                    download
                    type="application/pdf"
                  >
                    <p className="flex items-center">
                      Curriculo.pdf
                      <BsCloudDownload className="w-10" />
                    </p>
                  </a>
                </div>

                <div className="p-1 pr-0">
                  <a
                    className="underline"
                    href="./assets/CV-ISAQUE_BATISTA_DE_OLIVEIRA.docx"
                    dowload
                    type="application/docx"
                  >
                    <p className="flex items-center">
                      Curriculo.docx
                      <BsCloudDownload className="w-10" />
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>Desenvolvedor Front-End</p>
          </div>
          <div className="block sm:hidden">
            <p>Desenvolvedor Front-End</p>
          </div>
        </div>
        <p>
          Olá! Sou Desenvolvedor Front-End, utilizo JavaScript como linguagem,
          React.JS como framework principal e também me dedico aos estudos do
          NextJS e Typescript. Para compreender melhor cada etapa do
          desenvolvimento, busco me tornar um Desenvolvedor Full Stack. Tenho
          experiência com desenvolvimento de projetos e-commerce. Sempre busco
          desafios para aumentar minha experiência profissional, prezo muito
          pela entrega do melhor resultado e busco me tornar cada vez melhor na
          minha área de atuação.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Habilidades técnicas</span>
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>Git/Github
            <span className="px-2">|</span>React JS
            <span className="px-2">|</span>Node JS
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>Typescript
            <span className="px-2">|</span>React Hooks
            <span className="px-2">|</span>Material UI
            <span className="px-2">|</span>Docker
            <span className="px-2">|</span> Tailwind
            <span className="px-2">|</span> REST API
            <span className="px-2">|</span> MongoDB
            <span className="px-2">|</span> Sequelize
            <span className="px-2">|</span> PostgreSQL
            <span className="px-2">|</span> Express
            <span className="px-2">|</span> Axios
            <span className="px-2">|</span> GIMP / Figma
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Experiência Profissional
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Freelancer</span>
            <span className="px-2">|</span>Cristália, MG
          </p>
          <p className="py-1 italic">Desenvolvedor Front End (2022 - Atual)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Criação de projetos responsivos utilizando HTML, CSS e JavaScript.
            </li>
            <li>
              Conhecendo e introduzindo tecnologias Back-End nos novos projetos.
            </li>
            <li>
              Criação de projetos e-commerce e adquirindo conhecimentos mais
              aprofundados no Back-End.
            </li>
            <li>
              Adicionando novas funcionalidades aos projetos já existentes.
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className="text-center underline text-[18px] py-4">
          Outras experiências profissionais
        </h5>

        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">CDI Imagem</span>
            <span className="px-2">|</span>Uberlândia-MG
          </p>
          <p className="py-1 italic">Recepcionista (2018 – 2019)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Fui recepcionista nesta, que é uma das maiores clínicas
              radiológicas de Uberlândia-MG. Realizava consultas nos convênios,
              agendava consultas, emitia notas fiscais, etc e no exercício da
              função treinei novos recepcionistas. Após minha saída da empresa,
              um dos profissionais, na qual eu instrui se tornou chefe da
              recepção, visto que desempenhou um trabalho de qualidade.
            </li>
          </ul>

          {/*  */}
          <p className="italic pt-6">
            <span className="font-bold">Exército Brasileiro</span>
            <span className="px-2">|</span>Uberlândia-MG
          </p>
          <p className="py-1 italic">Soldado (2016 – 2018)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Foram 3 anos como militar e muitos ensinamentos, aprendi a
              importância e aprimorei algumas habilidades, sendo elas:
              liderança, pontualidade, cumprimento de metas, análise crítica,
              análise comportamental, serenidade, seriedade, hombridade,
              hierarquia e disciplina.
            </li>
          </ul>

          {/*  */}
          <p className="italic pt-6">
            <span className="font-bold">Markenge Engenharia e Construções</span>
            <span className="px-2">|</span>Uberlândia-MG
          </p>
          <p className="py-1 italic">
            Auxiliar de Almoxarifado / Secretário (2015 – 2016)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed pb-6">
            <li>
              Atuei como auxiliar de almoxarifado e posteriormente como
              secretário/recepcionista, tive contato com alguns projetos
              apresentados pelos engenheiros Civis, que utilizava por exemplo, o
              AutoCad e aprendi vários cálculos matemáticos utilizados nos
              projetos. Sempre tive interesse de aprender a profissão e
              compreender melhor o dia-a-dia empresarial. Estive presente desde
              a área administrativa, até a área construtiva do edifício.
            </li>
          </ul>

          {/*  */}
          <div className="py-6">
            <h5 className="text-center underline text-[18px] py-4">
              Formação e Certificados
            </h5>
            <p className="italic">
              <span className="font-bold">Cursos</span>
            </p>

            {/*  */}
            <p className="italic pt-5">
              <span className="font-bold">Dev Club</span>
              <span className="px-2">|</span>Programação FullStack - Rodolfo
              Mori / Cursando (2023)
            </p>
            {/*  */}
            <p className="italic">
              <span className="font-bold">Dev Club</span>
              <span className="px-2">|</span>Missão Programação do Zero -
              Rodolfo Mori / Concluído (2022)
            </p>

            {/*  */}
            <p className="italic">
              <span className="font-bold">CURSO EM VIDEO</span>
              <span className="px-2">|</span>Curso de JavaScript - Gustavo
              Guanabara / Concluído (2022)
            </p>

            {/*  */}
            <p className="italic">
              <span className="font-bold">CURSO EM VIDEO</span>
              <span className="px-2">|</span>Curso de HTML e CSS - Gustavo
              Guanabara / Concluído (2022)
            </p>


            {/*  */}
            <p className="italic">
              <span className="font-bold">
                Pratik Cursos Profssionalizantes{" "}
              </span>
              <span className="px-2">|</span>- Informática Básica, Avançada e
              Digitação / Concluído (2014)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
