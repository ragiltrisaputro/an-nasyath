import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SambutanP from "./Pages/Sambutan/SambutanP";
import DonasiPages from "./Pages/Donasi/DonasiPages";
import ProfilPesantren from "./Pages/ProfilPesantren/ProfilPesantren";
import PrestasiPage from "./Pages/PrestasiPages/PrestasiPages";
import ContactPages from "./Pages/Contact/ContactPages";
import InfoPendaftaranPage from "./Pages/InfoPendaftaranPage/InfoPendaftaranPage";
import FormPendaftaranPages from "./Pages/FormPendaftaranPages/FormPendaftaranPages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail-sambutan" element={<SambutanP />} />
        <Route path="/donasi" element={<DonasiPages />} />
        <Route path="/profil-pesantren" element={<ProfilPesantren />} />
        <Route path="/prestasi-pesantren" element={<PrestasiPage />} />
        <Route path="/kontak" element={<ContactPages />} />
        <Route
          path="/informasi-pendaftaran"
          element={<InfoPendaftaranPage />}
        />
        <Route path="/form-pendaftaran" element={<FormPendaftaranPages />} />
      </Routes>
    </Router>
  );
}

export default App;
