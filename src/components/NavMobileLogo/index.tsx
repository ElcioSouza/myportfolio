import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

interface props {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  scrollMenu: boolean;
}

export default function NavMobileLogo({ openMenu, setOpenMenu, scrollMenu }: props) {
  const handleMenuClick = () => {
    if (window.innerWidth > 1024) { // Ajuste o valor conforme necessário
      setOpenMenu(!openMenu);
    }
  };
  return (
    <div className={` w-full flex justify-between items-center flex-row-reverse ${scrollMenu ? 'bg-white' : ' md:bg-transparent'}`}>
      <div className={`${openMenu ? 'self-start ' : 'self-center'}`}>
        <div className="relative z-[999] block xl:hidden w-[40px] self-end xl:self-start m-3">
          {openMenu ? (
            <div
              className={`${openMenu ? 'text-black' : 'text-white'} transform rotate-180 transition-all`}
              onClick={() => setOpenMenu(!openMenu)}
            >
              <FaTimes className={` ${openMenu || scrollMenu ? 'text-black' : 'text-white'} cursor-pointer text-[2em] text-black`} />
            </div>
          ) : (
            <div
              className="transform rotate-0 transition-all"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <FaBars className={` ${openMenu || scrollMenu ? 'text-black' : 'text-white'} cursor-pointer text-[2em] text-black`} />
            </div>
          )}
        </div>
      </div>
      <div className="flex xl:hidden">
        <Link href="/">
          {scrollMenu ?
            (
              <h1 className="font-bold pl-1 hover:tracking-widest duration-300 text-3xl sm:text-[40px]"><span className="text-blue-500">ELCIO </span>DEV</h1>
            ) :
            (
              <h1 className="font-oswald font-bold uppercase tracking-normal hover:tracking-widest duration-300 pl-2 md:pl-0 text-white shadow-md text-3xl sm:text-[40px]">
              ELCIO DEV
            </h1>
            )
          }

        </Link>
      </div>
    </div>
  );
}
