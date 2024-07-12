import React from "react";
import { Header } from "../../assets/Image/Home/Header";

export default function Cover() {
  return (
    <div className="relative mt-16">
      <img
        src={Header}
        alt="imgcover"
        className="w-full h-auto object-cover opacity-80"
      />
      <div className="absolute inset-0 flex flex-col items-start justify-start p-4 pt-20 sm:p-6 md:p-10 lg:p-12 lg:pt-72">
        <h1 className="text-white font-poppins text-xs sm:text-sm md:text-xl lg:text-3xl font-bold mb-2">
          Pondok Pesantren An-Nasyath
        </h1>
        <p className="text-white font-poppins text-xs sm:text-sm md:text-base lg:text-lg mb-4">
          Mlangi Nogotirto Gamping Sleman Yogyakarta
        </p>
        <button className="bg-[#0193DC] hover:bg-[#2BA7E2] text-white font-poppins font-bold rounded-lg px-4 py-1  md:px-5 md:py-3 lg:px-8 lg:py-2">
          <a href="#" className="text-sm">
            Daftar
          </a>
        </button>
      </div>
    </div>
  );
}
