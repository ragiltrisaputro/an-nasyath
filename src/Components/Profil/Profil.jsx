import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Profil() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className="bg-white max-w-6xl mx-auto pt-16 px-4 lg:px-0">
      <section className="mt-4" data-aos="fade-right">
        <h2 className="text-3xl font-poppins font-bold text-center">
          Profil Pesantren
        </h2>
        <p className="text-justify mt-2 font-poppins font-semibold text-lg">
          Assalamu'alaikum Warahmatullahi Wabarakatuh,
        </p>
        <p className="text-justify font-poppins text-md indent-8 my-2">
          Selamat datang di Pondok Pesantren An-Nasyath. Kami berkomitmen untuk
          mencetak generasi muslim yang berakhlakul karimah, cerdas, dan
          mandiri.
        </p>
      </section>

      <section className="mt-8" data-aos="fade-right">
        <h2 className="text-2xl font-poppins font-bold">Sejarah</h2>
        <p className="text-justify font-poppins text-md mt-2">
          Pondok Pesantren An-Nasyath didirikan pada tahun XXXX oleh K.H.
          Muhammad Unsul Jalis dengan tujuan menciptakan lembaga pendidikan
          Islam yang mampu menghasilkan santri yang berilmu dan berakhlak mulia.
        </p>
      </section>

      <section className="mt-8" data-aos="fade-right">
        <h2 className="text-2xl font-poppins font-bold">Visi dan Misi</h2>
        <h3 className="text-xl font-poppins font-semibold mt-2">Visi</h3>
        <p className="text-justify font-poppins text-md mt-2">
          Menjadi lembaga pendidikan Islam terkemuka yang mencetak generasi
          muslim berilmu, beriman, dan berakhlak mulia.
        </p>
        <h3 className="text-xl font-poppins font-semibold mt-4">Misi</h3>
        <ul className="list-disc list-inside mt-2 font-poppins text-md">
          <li>Menyelenggarakan pendidikan yang berkualitas dan terjangkau.</li>
          <li>Membentuk karakter santri yang berakhlakul karimah.</li>
          <li>
            Mengembangkan potensi santri dalam bidang akademik dan non-akademik.
          </li>
          <li>
            Meningkatkan keterampilan hidup santri untuk mandiri dan berdaya
            saing.
          </li>
        </ul>
      </section>

      <section className="mt-8 mb-8" data-aos="fade-right">
        <h2 className="text-2xl font-poppins font-bold">Fasilitas</h2>
        <p className="text-justify font-poppins text-md mt-2">
          Pondok Pesantren An-Nasyath dilengkapi dengan berbagai fasilitas untuk
          menunjang kegiatan belajar dan mengajar, seperti asrama yang nyaman,
          ruang kelas yang modern, perpustakaan, laboratorium komputer, dan
          sarana olahraga.
        </p>
      </section>
    </div>
  );
}
