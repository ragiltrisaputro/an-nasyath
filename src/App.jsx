import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SambutanP from "./Pages/Sambutan/SambutanP";
import DonasiPages from "./Pages/Donasi/DonasiPages";
import ProfilPesantren from "./Pages/ProfilPesantren/ProfilPesantren";
import PrestasiPage from "./Pages/PrestasiPages/PrestasiPages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail-sambutan" element={<SambutanP />} />
        <Route path="/donasi" element={<DonasiPages />} />
        <Route path="/profil-pesantren" element={<ProfilPesantren />} />
        <Route path="/prestasi-pesantren" element={<PrestasiPage />} />
      </Routes>
    </Router>
  );
}

export default App;
