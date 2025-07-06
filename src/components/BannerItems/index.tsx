"use client";
import React from "react";
import { ItemBanner } from "@/constant/ItemBanner";

export default function BannerItems() {
  return (
    <section className="banner-item flex flex-col md:flex-row justify-center items-start flex-wrap gap-7 mt-[10px]  md:mt-[10px] xl:mt-[10px] px-2 md:px-0">
      {ItemBanner &&
        ItemBanner.map((item, index) => (
          <div
            key={index}
            className="item hover:bg-[#1b2c40] flex p-9 justify-start items-center w-full md:w-auto max-w-[100%] md:max-w-[292px] flex-col  h-[328px] min-h-[328px] bg-white shadow-[0px_0px_3px_#00000026] translate-y-[-50px] text-base leading-[1.4] transition-all duration-[0.6s] ease-[ease] mb-5 px-5 rounded-xl"
          >
            <div className="hovdder::text-white flex justify-center text-[60px]">
              {item.icon}
            </div>
            <div>
              <h2 className="text-[22px] text-center my-2 font-bold">
                {item.title}
              </h2>
              <p className="text-xl leading-[30px] text-center">
                {item.describe}
              </p>
            </div>
          </div>
        ))}
    </section>
  );
}
