import React, { useEffect } from "react";
import { Berita } from "../../assets/Image/Berita/Berita";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CoverGalery() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="bg-[#F9FBFD]">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-10">
        <div className="mt-8 mb-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
          <h2
            className="text-2xl mt-8 font-semibold font-poppins"
            data-aos="fade-right"
          >
            Galery
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <img
            src={Berita}
            alt="Berita"
            className="w-full h-full object-cover rounded-lg"
            data-aos="fade-up"
          />
          <img
            src={Berita}
            alt="Berita"
            className="w-full h-full object-cover rounded-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          />
          <img
            src={Berita}
            alt="Berita"
            className="w-full h-full object-cover rounded-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          />
          <img
            src={Berita}
            alt="Berita"
            className="w-full h-full object-cover rounded-lg"
            data-aos="fade-up"
            data-aos-delay="300"
          />
          <img
            src={Berita}
            alt="Berita"
            className="w-full h-full object-cover rounded-lg"
            data-aos="fade-up"
            data-aos-delay="400"
          />
          <img
            src={Berita}
            alt="Berita"
            className="w-full h-full object-cover rounded-lg"
            data-aos="fade-up"
            data-aos-delay="500"
          />
        </div>
        <div className="flex justify-center mt-8" data-aos="fade-up">
          <button className="bg-blue-500 px-6 py-2 rounded-lg">
            <Link to="#" className="text-white font-poppins">
              Lainnya
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
