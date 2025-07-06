"use client";
import React from "react";

export default function WhatsAppButton() {
  return (
    <div>
      <a 
        href="https://api.whatsapp.com/send?phone=5527997813275&amp;text=Olá, Elcio, tudo bem? Vi seu portfólio e me interessei pelo seu trabalho"
        className="fixed  m-2 w-full max-w-[60px] h-[60px] text-center text-3xl shadow-[2px_2px_3px_#999] z-[100] animate-[sm-shake-animation_linear_1.5s_infinite] rounded-[50px] right-2.5 bottom-2.5
  -webkit-animation: sm-shake-animation linear 1.5s infinite"
        target="_blank"
      >
        <div
          className="w-full max-w-[60px] h-[60px] bg-contain"
          style={{ backgroundImage: `url('/img/whatsapp.gif')` }}
        ></div>
      </a>
    </div>
  );
}
