import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Berita } from "../../assets/Image/Berita/Berita";
import { IoSearch } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CoverBerita() {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const beritaData = [
    {
      title: "Belajar di Rumah",
      description:
        "Lorem ipsum dolor sit amet adipcing amet adipcingamet adipci aqua lorem ipsum.",
      imgSrc: Berita,
    },
    {
      title: "Kegiatan di Sekolah",
      description:
        "Lorem ipsum dolor sit amet adipcing amet adipcingamet adipci aqua lorem ipsum.",
      imgSrc: Berita,
    },
    {
      title: "Belajar di Masjid",
      description:
        "Lorem ipsum dolor sit amet adipcing amet adipcingamet adipci aqua lorem ipsum.",
      imgSrc: Berita,
    },
    {
      title: "Kegiatan di Lapangan",
      description:
        "Lorem ipsum dolor sit amet adipcing amet adipcingamet adipci aqua lorem ipsum.",
      imgSrc: Berita,
    },
  ];

  const filteredBerita = beritaData.filter(
    (berita) =>
      berita.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      berita.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-10">
      <div className="mt-10 mb-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
        <h2
          className="text-2xl font-semibold font-poppins mb-2"
          data-aos="fade-right"
        >
          Kegiatan Pesantren
        </h2>
        <div
          className="flex items-center space-x-2 bg-slate-200 rounded-lg py-1 px-2"
          data-aos="fade-left"
        >
          <IoSearch className="text-gray-600" />
          <input
            type="text"
            className="bg-slate-200 focus:outline-none font-poppins"
            placeholder="Cari kegiatan"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredBerita.map((berita, index) => (
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center"
            key={index}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <img src={berita.imgSrc} alt="Berita" className="w-full sm:w-1/3" />
            <div className="ml-0 sm:ml-4 w-full sm:w-2/3 mt-4 sm:mt-0">
              <h2 className="text-xl font-semibold">{berita.title}</h2>
              <p className="mt-2 text-gray-600">{berita.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-8" data-aos="fade-up">
        <Link
          to="#"
          className="font-poppins text-blue-500 relative hover:text-black underline-link"
        >
          Lihat Semua
        </Link>
      </div>
    </div>
  );
}
