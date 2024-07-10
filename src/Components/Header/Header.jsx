import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../assets/Image/logo-brand";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileProfilDropdownOpen, setIsMobileProfilDropdownOpen] =
    useState(false);
  const [isMobileUnitDropdownOpen, setIsMobileUnitDropdownOpen] =
    useState(false);
  const [isMobileKabarDropdownOpen, setIsMobileKabarDropdownOpen] =
    useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled
          ? "bg-blue-400 dark:bg-gray-800 shadow-md"
          : "bg-[#2BA7E2] dark:bg-gray-800"
      } text-slate-900 dark:text-white xl:px-24 px-10 py-4 font-semibold text-lg transition duration-300 ease-in-out font-poppins`}
    >
      <div
        id="navbar-menu"
        className="flex justify-between lg:mx-4 items-center"
      >
        <a
          href="/"
          className="flex font-poppins justify-center items-center gap-1 text-xl"
        >
          <img src={Logo} alt="logo" className="h-8 lg:h-9" />
        </a>
        <ul className="hidden lg:flex gap-6 items-center">
          <li>
            <a
              href="#"
              className="font-poppins text-slate-50 font-normal hover:font-bold transition duration-200"
            >
              Beranda
            </a>
          </li>
          <li>
            <a
              href="/donasi"
              className="font-poppins text-white font-normal hover:font-bold transition duration-200"
            >
              Donasi
            </a>
          </li>
          <li className="relative group">
            <a
              href="#"
              className="font-poppins text-white font-normal hover:font-bold flex items-center gap-1 transition duration-200"
            >
              Profil
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </a>
            <div className="absolute top-full left-0 bg-white dark:bg-gray-800 shadow-lg py-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10 w-auto">
              <a
                href="#"
                className="block px-4 py-2 text-sm font-poppins font-normal hover:font-bold hover:bg-blue-50 dark:hover:bg-gray-600 whitespace-nowrap"
              >
                Profil Pesantren
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm font-poppins font-normal hover:font-bold hover:bg-blue-50 dark:hover:bg-gray-600 whitespace-nowrap"
              >
                Visi & Misi
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm font-poppins font-normal hover:font-bold hover:bg-blue-50 dark:hover:bg-gray-600 whitespace-nowrap"
              >
                Masayikh
              </a>
            </div>
          </li>
          <li className="relative group">
            <a
              href="#"
              className="font-poppins text-white font-normal hover:font-bold flex items-center gap-1 transition duration-200"
            >
              Unit Sekolah
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </a>
            <div className="absolute top-full left-0 bg-white dark:bg-gray-800 shadow-lg py-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10 w-auto">
              <a
                href="#"
                className="block px-4 py-2 text-sm font-poppins font-normal hover:font-bold hover:bg-blue-50 dark:hover:bg-gray-600 whitespace-nowrap"
              >
                Madrasah Ibtidaiyah
              </a>
              <a
                href="https://mtsnuriman.sch.id/"
                target="_blank"
                className="block px-4 py-2 text-sm font-poppins font-normal hover:font-bold hover:bg-blue-50 dark:hover:bg-gray-600 whitespace-nowrap"
              >
                Madrasah Tsanawiyah
              </a>
              <a
                href="https://manuriman.sch.id/"
                target="_blank"
                className="block px-4 py-2 text-sm font-poppins font-normal hover:font-bold hover:bg-blue-50 dark:hover:bg-gray-600 whitespace-nowrap"
              >
                Madrasah Aliyah
              </a>
            </div>
          </li>
          <li className="relative group">
            <a
              href="#"
              className="font-poppins text-white font-normal hover:font-bold flex items-center gap-1 transition duration-200"
            >
              Kabar & Artikel
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </a>
            <div className="absolute top-full left-0 bg-white dark:bg-gray-800 shadow-lg py-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10 w-auto">
              <a
                href="#"
                className="block px-4 py-2 text-sm font-poppins font-normal hover:font-bold hover:bg-blue-50 dark:hover:bg-gray-600 whitespace-nowrap"
              >
                Gallery
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm font-poppins font-normal hover:font-bold hover:bg-blue-50 dark:hover:bg-gray-600 whitespace-nowrap"
              >
                Artikel
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm font-poppins font-normal hover:font-bold hover:bg-blue-50 dark:hover:bg-gray-600 whitespace-nowrap"
              >
                Kabar
              </a>
            </div>
          </li>
          <li>
            <a
              href="#"
              className="font-poppins text-white font-normal hover:font-bold transition duration-200"
            >
              Kontak
            </a>
          </li>
        </ul>
        <button
          className="lg:hidden flex flex-col justify-evenly border border-white w-8 h-8 rounded items-center"
          onClick={() => setIsMobileMenuOpen((previous) => !previous)}
        >
          <div className="w-5/6 rounded h-[2px] bg-white"></div>
          <div className="w-5/6 rounded h-[2px] bg-white"></div>
          <div className="w-5/6 rounded h-[2px] bg-white"></div>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="flex flex-col lg:hidden absolute top-[64px] left-0 bg-white dark:bg-gray-900 text-slate-900 dark:text-white min-h-screen w-full items-center text-lg font-semibold gap-4 py-1 font-poppins"
        >
          <a href="/" className="font-poppins font-normal hover:font-bold">
            Beranda
          </a>
          <a
            href="/donasi"
            className="font-poppins font-normal hover:font-bold"
          >
            Donasi
          </a>
          <div className="w-full flex flex-col items-center">
            <button
              onClick={() => setIsMobileProfilDropdownOpen((prev) => !prev)}
              className="font-poppins font-normal hover:font-bold flex items-center gap-1"
            >
              Profil
              <svg
                className={`w-4 h-4 transform transition-transform ${
                  isMobileProfilDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {isMobileProfilDropdownOpen && (
              <div className="flex flex-col w-full items-center bg-gray-100 dark:bg-gray-700 transition-opacity duration-300 ease-in-out">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm font-poppins font-normal hover:font-bold w-full text-center"
                >
                  Profil Pesantren
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm font-poppins font-normal hover:font-bold w-full text-center"
                >
                  Visi & Misi
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm font-poppins font-normal hover:font-bold w-full text-center"
                >
                  Masayikh
                </a>
              </div>
            )}
          </div>
          <div className="w-full flex flex-col items-center">
            <button
              onClick={() => setIsMobileUnitDropdownOpen((prev) => !prev)}
              className="font-poppins font-normal hover:font-bold flex items-center gap-1"
            >
              Unit Pendidikan
              <svg
                className={`w-4 h-4 transform transition-transform ${
                  isMobileUnitDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {isMobileUnitDropdownOpen && (
              <div className="flex flex-col w-full items-center bg-gray-100 dark:bg-gray-700 transition-opacity duration-300 ease-in-out">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm font-poppins font-normal hover:font-bold w-full text-center"
                >
                  Madrasah Ibtidaiyah
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm font-poppins font-normal hover:font-bold w-full text-center"
                >
                  Madrasah Tsanawiyah
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm font-poppins font-normal hover:font-bold w-full text-center"
                >
                  Madrasah Aliyah
                </a>
              </div>
            )}
          </div>
          <div className="w-full flex flex-col items-center">
            <button
              onClick={() => setIsMobileKabarDropdownOpen((prev) => !prev)}
              className="font-poppins font-normal hover:font-bold flex items-center gap-1"
            >
              Kabar & Artikel
              <svg
                className={`w-4 h-4 transform transition-transform ${
                  isMobileKabarDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {isMobileKabarDropdownOpen && (
              <div className="flex flex-col w-full items-center bg-gray-100 dark:bg-gray-700 transition-opacity duration-300 ease-in-out">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm font-poppins font-normal hover:font-bold w-full text-center"
                >
                  Gallery
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm font-poppins font-normal hover:font-bold w-full text-center"
                >
                  Artikel
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm font-poppins font-normal hover:font-bold w-full text-center"
                >
                  Kabar
                </a>
              </div>
            )}
          </div>
          <a href="#" className="font-poppins font-normal hover:font-bold">
            Kontak
          </a>
        </div>
      )}
    </nav>
  );
}
