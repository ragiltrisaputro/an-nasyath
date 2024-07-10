import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Abah } from "../../assets/Image/Home/Sambutan";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Sambutan() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-start mt-2 mb-4 mx-auto max-w-6xl">
      <div
        className="md:w-1/2 p-4 flex flex-col justify-center md:justify-start"
        data-aos="fade-right"
      >
        <img
          src={Abah}
          alt="Abah"
          className="w-full h-auto object-cover max-w-md border-2 rounded-lg border-blue-500"
        />
        <p className="mt-2 text-center md:text-left text-sm text-gray-500">
          K. Muhammad Unsul Jalis
        </p>
      </div>
      <div className="md:w-1/2 p-4" data-aos="fade-left">
        <h2 className="text-2xl font-poppins font-bold mb-0.5 text-[#2BA7E2]">
          Sambutan Pengasuh
        </h2>
        <h2 className="text-md font-semibold font-poppins mb-4 text-[#2BA7E2]">
          Pondok Pesantren An-Nasyath
        </h2>
        <p className="text-[#919FAE] text-sm font-poppins mb-4">
          Puji dan syukur mari kita panjatkan kehadirat Allah SWT. Yang
          senantiasa dengan sifat kasih dan sayangnya banyak memberikan nikmat
          ...
        </p>
        <button className="bg-[#0193DC] hover:bg-[#2BA7E2] text-white font-poppins rounded-lg px-6 py-2">
          <Link to="/detail-sambutan">Lebih Lanjut</Link>
        </button>
      </div>
    </div>
  );
}
