import React from "react";
import Cover from "../Cover/Cover";
import WhatsAppChatButton from "../WhatsAppChatButton/WhatsAppChatButton";

export default function Donasi() {
  return (
    <>
      <div className="bg-white lg:max-w-6xl mx-auto pt-16">
        <div className="mt-4 mx-4">
          <div className="">
            <h2 className="text-3xl font-poppins font-bold text-center">
              Donasi
            </h2>
            <p className="text-justify mt-2 font-poppins font-semibold text-lg">
              Assalamu'alaikum Warahmatullahi Wabarakatuh,
            </p>
            <p className="text-justify font-poppins text-md indent-8 my-2">
              Kami dari Pondok Pesantren An-Nasyath mengajak Anda untuk
              berpartisipasi dalam pembangunan fasilitas pesantren kami. Donasi
              dapat disalurkan melalui transfer ke rekening berikut:
            </p>
          </div>
          <div className="mt-4">
            <div className="">
              <h2 className="text-2xl font-poppins font-bold">Rekening</h2>
              <h2 className="font-poppins font-semibold text-xl mt-4">BRI</h2>
              <p className="font-poppins text-lg mt-2">02358789516</p>
              <p className="font-poppins mt-2 text-md">
                Yayasan An-Nasyath Yogyakarta
              </p>
            </div>
          </div>
          <div className="mt-6">
            <div className="">
              <h2 className="font-poppins font-semibold text-xl mt-4">BCA</h2>
              <p className="font-poppins text-lg mt-2">02358789516</p>
              <p className="font-poppins mt-2 text-md">
                Yayasan An-Nasyath Yogyakarta
              </p>
            </div>
          </div>
          <div className="mt-4">
            <p className="font-poppins text-md mb-2 text-justify">
              Setelah melakukan donasi, mohon konfirmasi melalui nomor berikut :
            </p>
            <p className="text-md font-poppins mb-4">0896-2349-1166</p>
            <button className="bg-primary px-6 py-2 rounded-lg">
              <a href="#" className="text-white font-semibold text-lg">
                Konfirmasi
              </a>
            </button>
            <p className="mt-4 font-poppins text-md text-justify indent-8">
              Kami sangat menghargai setiap donasi yang diberikan. Semoga Allah
              SWT membalas kebaikan Anda dengan pahala yang berlipat ganda.
            </p>
            <p className="mt-4 font-poppins text-md text-justify font-bold text-lg pb-8">
              Wassalamu'alaikum Warahmatullahi Wabarakatuh.
            </p>
          </div>
        </div>
      </div>
      <WhatsAppChatButton />
    </>
  );
}
