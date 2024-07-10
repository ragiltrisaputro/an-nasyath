import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SambutanP from "./Pages/Sambutan/SambutanP";
import DonasiPages from "./Pages/Donasi/DonasiPages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail-sambutan" element={<SambutanP />} />
        <Route path="/donasi" element={<DonasiPages />} />
      </Routes>
    </Router>
  );
}

export default App;
