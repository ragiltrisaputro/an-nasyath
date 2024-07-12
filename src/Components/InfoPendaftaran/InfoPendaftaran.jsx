import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Brosur } from "../../assets/Image/Brosur/Brosur";
import { Brosur2 } from "../../assets/Image/Brosur/brosur2";

const RegistrationInfo = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const fees = [
    { item: "Pendaftaran", cost: "Rp 500.000" },
    { item: "SPP Bulanan", cost: "Rp 300.000" },
    { item: "Seragam", cost: "Rp 250.000" },
    { item: "Buku Pelajaran", cost: "Rp 150.000" },
  ];

  const brochureImages = [Brosur, Brosur2, Brosur, Brosur];

  return (
    <div className="bg-white max-w-6xl mx-auto pt-16 pb-20 px-4 lg:px-8">
      <section className="mt-8 mb-16" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-4 font-poppins">
          Informasi Pendaftaran
        </h2>
        <p className="text-lg text-center text-gray-700 font-poppins">
          Berikut adalah rincian biaya pendaftaran dan informasi lainnya.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div data-aos="fade-up">
          <h3 className="text-2xl font-bold text-blue-700 mb-4 font-poppins">
            Rincian Biaya
          </h3>
          <table className="min-w-full bg-white border rounded-lg shadow-md divide-y divide-gray-200">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="py-3 px-6 text-left font-poppins">Item</th>
                <th className="py-3 px-6 text-left font-poppins">Biaya</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {fees.map((fee, index) => (
                <tr key={index}>
                  <td className="py-4 px-6 font-poppins">{fee.item}</td>
                  <td className="py-4 px-6 font-poppins">{fee.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div data-aos="fade-up">
          <h3 className="text-2xl font-bold text-blue-700 mb-4 font-poppins">
            Brosur Pendaftaran
          </h3>
          <Carousel
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
          >
            {brochureImages.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  className="rounded-xl"
                  alt={`Brosur ${index + 1}`}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default RegistrationInfo;