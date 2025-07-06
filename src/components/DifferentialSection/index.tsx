"use client";
import React from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { IoMdCheckboxOutline } from "react-icons/io";

export default function DifferentialSection() {
  return (
    <section
      className="py-[2rem] xl:py-[7.5rem] px-2 xl:px-0 my-[2rem]"
      id="differential"
    >
      <div className="max-w-7xl mx-auto">
        <div>
          <div className="text-center mb-4 md:mb-0">
            <h2 className="inline md:flex xl:after:bg-[#1b2c40] relative items-center w-full xl:w-auto after:content-[''] after:absolute after:bottom-[-0.3em] after:left-0 after:w-[3rem] hover:after:w-[5rem] after:h-[0.3em] after:transition-all after:duration-[500ms] rounded-md after:bg-[#1b2c40] text-[1.5em] xl:text-[40px] font-semibold mb-10">
              Diferencial
            </h2>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-end md:items-end gap-3 md:gap-32">
            <div className="border-l-1 border-[#637788]">
              <div className="mx-auto w-16 xl:mx-0 xl:w-auto mb-1">
                <FaEdit className="icon_ text-[4rem] text-center" />
              </div>
              <h2 className="text-center xl:text-left w-full xl:w-auto rounded-md text-[1.5em] my-2 xl:text-[40px] font-semibold">
                MISSÃO
              </h2>
              <p className=" text-center xl:text-left text-xl leading-[30px]">
                Promover o crescimento sustentável de micro e pequenas empresas
                através do fornecimento de soluções tecnológicas empreendedoras
                de fácil utilização.
              </p>
            </div>
            <div>
              <div className="mx-auto w-16 xl:mx-0 xl:w-auto mb-1">
                <FaEye className="text-[4rem]" />
              </div>
              <h2 className="text-center xl:text-left w-full xl:w-auto rounded-md text-[1.5em] xl:text-[40px] font-semibold my-2">
                VISÃO
              </h2>
              <p className=" text-center xl:text-left text-xl leading-[30px]">
                Ser líder no fornecimento de software de alta qualidade, com
                preços justos e soluções personalizadas.
              </p>
            </div>
            <div>
              <div className="mx-auto w-16 xl:mx-0 xl:w-auto mb-1">
                <IoMdCheckboxOutline className="text-[4rem]" />
              </div>
              <h2 className="text-center xl:text-left w-full xl:w-auto rounded-md text-[1.5em] xl:text-[40px] font-semibold my-2">
                VALORES
              </h2>
              <p className=" text-center xl:text-left text-xl leading-[30px]">
                Aperfeiçoamento contínuo de processos e tecnologias para
                oferecer o melhor serviço.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
