"use client";
import React from "react";
import Button from "@/components/Button";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
import NavLinksController from "@/controllers/NavLinksController";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="bg-[url('/img/banner.jpg')] bg-cover bg-center min-h-[500px]"
      id="home"
    >
      <div className="max-w-7xl mx-auto flex justify-center items-center min-h-[600px]">
        <div className="mt-[4rem]">
          <div>
            <div>
              <div className="mt-10 xl:mt-auto">
                <div className="rounded-full bg-[url('/img/profile.jpg')] bg-cover bg-center w-[120px] h-[120px] mx-auto   border-white border-[1.4px] duration-700 hover:scale-110"></div>
                <div>
                  <h1 className="text-center text-white font-bold text-3xl mt-3">
                    Elcio de Souza Monico.
                  </h1>
                  <p className="text-center text-white mt-3 ">
                    Full Stack Developer
                  </p>
                </div>
                <div className="flex justify-center items-center mt-3 gap-3">
                  <div className="bg-black h-[40px] w-[40px] rounded-full flex justify-center items-center hover:bg-green-700 transition duration-700 hover:scale-125">
                    <Link
                      target="_blank"
                      href="https://api.whatsapp.com/send?phone=5527997813275&amp;text=Gostaria de falar com um atendente? Estou à disposição para ajudar."
                    >
                      <FaWhatsapp className="text-white text-[20px]" />
                    </Link>
                  </div>
                  <div className="bg-black h-[40px] w-[40px] rounded-full flex justify-center items-center hover:bg-[#0a66c2] transition duration-700 hover:scale-125">
                    <Link
                      target="_blank"
                      href="https://www.linkedin.com/in/elciomonico"
                    >
                      <FaLinkedin className="text-[20px] text-white" />
                    </Link>
                  </div>
                  <div className="bg-black h-[40px] w-[40px] rounded-full flex justify-center items-center hover:bg-[#212556] transition duration-700 hover:scale-125">
                    <Link target="_blank" href="https://github.com/ElcioSouza">
                      <FaGithub className="text-[20px] text-white " />
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center xl:justify-center items-center">
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
        </div>
      </div>
    </section>
  );
}
