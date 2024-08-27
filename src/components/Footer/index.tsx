"use client";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import React from "react";
import { date } from "@/utils/date";
import NavLinksController from "@/controllers/NavLinksController";

type MenuItem = {
  id: string;
  label?: string;
  href: string;
};

export interface FooterProps {
  className?: string;
  ItemMenu?: MenuItem[];
}

export default function Footer({
  className = "",
  ItemMenu,
}: FooterProps) {
  const currentData = date();
  return (
    <footer className="bg-[#1F2740] text-white pt-8">
      <div className="max-w-[280px] md:max-w-7xl w-full mx-auto">
        <div className="flex flex-col justify-center md:flex-row gap-7 md:justify-between md:px-5">
          <div className="self-center">
            <Link href="/" className="block">
              <div
                className="w-[300px] h-[100px] md:w-[300px] md:h-[300px] bg-contain bg-no-repeat bg-left md:bg-center"
                style={{ backgroundImage: `url('/img/logowhite.png')` }}
              ></div>
            </Link>
          </div>
          <div>
            <h2 className="text-[1.5rem] font-bold">Check Mate Tecnologia</h2>
            <div>
              <ul>
                {ItemMenu &&
                  ItemMenu.map((item, index) => (
                    <li
                      className="py-2 text-[20px]"
                      key={index}
                      onClick={() => {
                        NavLinksController.execute(item.id);
                      }}
                    >
                      <Link
                        href={item.href}
                        className="text-[#fff] text-[1em] font-semibold"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="foooter-social xl:max-w-[150px] w-full md:max-w-auto md:w-auto md:self-start">
            <h2 className="text-[1.5rem] font-bold text-left">Siga-me</h2>
            <Link target="_blank" href="https://www.linkedin.com/in/elciomonico">
              <div className="social bg-white h-[40px] w-[40px] rounded-full flex justify-center items-center hover:bg-[#0a66c2] hover:text-white transition duration-700 hover:scale-125 mt-4">
                <FaLinkedinIn className="linkedin text-[20px] text-black" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t-[0.2px] border-white pt-[1.2rem] mt-[2.4rem] md:mt-[2rem] py-4 md:py-auto">
        <p className="text-center">
          © {currentData.getFullYear()} Elcio de Souza Monico. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
