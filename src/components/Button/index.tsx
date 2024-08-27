import React from "react";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title?: string;
  className?: string;
  icon?: React.ReactNode;
}

export default function Button(Props: ButtonProps) {
  const { title, className, icon, children } = Props;
  return (
    <>
      <button
        {...Props}
        className={` relative flex justify-center items-center btn-primary max-w-[250px] p-3 w-full mt-5 bg-[#000] hover:bg-[#1F2740] text-white font-bold rounded-xl text-[16px] duration-700 text-center ${className} `}
      >
        <span className="ml-3">{title ?? children}</span>
        {icon && (
          <div className="transition-all duration-700 ease-[ease-in-out]">
            {icon}
          </div>
        )}
      </button>
    </>
  );
}
