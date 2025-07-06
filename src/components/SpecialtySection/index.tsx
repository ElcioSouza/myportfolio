"use client";
import React from "react";
import Button from "@/components/Button";
import { BiChevronRight } from "react-icons/bi";
import NavLinksController from "@/controllers/NavLinksController";

export default function SpecialtySection() {
  return (
    <section
      className="bg-[#eff1f4] my-[2rem] md:my-[0]  py-[2rem] xl:py-[7.5rem]"
      id="specialty"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-3 md:gap-32 ">
          <div>
            <div className="rounded-full bg-[url('/img/profile.jpg')] bg-cover bg-center w-[200px] h-[200px] md:w-[350px] md:h-[350px] mx-auto   border-white border-[1.4px] duration-700 hover:scale-110 mt-7"></div>
          </div>
          <div className="w-[100%] xl:w-[55%] text-center md:text-left">
            <div className="mb-5">
              <h2 className="inline md:flex xl:after:bg-[#1b2c40] relative items-center w-full xl:w-auto after:content-[''] after:absolute after:bottom-[-0.3em] after:left-0 after:w-[3rem] hover:after:w-[5rem] after:h-[0.3em] after:transition-all after:duration-[500ms] rounded-md after:bg-[#1b2c40] text-[1.5em] xl:text-[40px] font-semibold mb-10">
                Especialidade
              </h2>
            </div>

            <p className="text-gray-600 mb-4 text-xl leading-[30px]">
              Sou desenvolvedor fullstack com mais de 5 anos de experiência em
              desenvolvimento, atuo tanto no front-end quanto no back-end,
              seguindo a metodologia Scrum para gerenciamento ágil de projetos.
              Trabalho com arquitetura de software e microserviços, aplico
              testes unitários e de integração para garantir qualidade e
              confiabilidade. Utilizo o padrão MVC e sigo boas práticas como
              SOLID e Clean Code, sempre focado em desenvolver soluções
              eficientes, escaláveis e de alto desempenho.
            </p>

            <div className="grid justify-center md:justify-start md:grid-cols-2 gap-4">
              <div>
                <h2 className="font-semibold text-gray-700 mb-2 border-b pb-1">
                  Front End
                </h2>
                <div className="flex flex-wrap justify-center  lg:justify-start gap-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    JavaScript
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    React.js
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    Vue.js
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    Next.js
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    HTML5
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    CSS3
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    SASS
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    Tailwind
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    Bootstrap
                  </span>
                </div>
              </div>
              <div>
                <h2 className="font-semibold text-gray-700 mb-2 border-b pb-1">
                  Back End
                </h2>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    PHP
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    Node.js
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    TypeScript
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    Laravel
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    Slim Framework{" "}
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    CodeIgniter
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    Express
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    Nest.js
                  </span>
                </div>
              </div>
              <div>
                <h2 className="font-semibold text-gray-700 mb-2 border-b pb-1">
                  Banco de Dados
                </h2>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                    MySQL
                  </span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                    MongoDB
                  </span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                    PostgreSQL
                  </span>
                </div>
              </div>
              <div>
                <h2 className="font-semibold text-gray-700 mb-2 border-b pb-1">
                  Ferramentas
                </h2>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                    Git
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                    GitHub
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                    Docker
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                    Azure
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                    Trello
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                    Jira
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start text-center">
              <Button
                onClick={() => NavLinksController.execute("contact")}
                className="md:mx-0 mt-8"
                icon={
                  <BiChevronRight
                    className="text-[2em] text-white"
                    type="submit"
                  />
                }
              >
                Entre em contato
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
