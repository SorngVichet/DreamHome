import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage.jsx";
import Service from "./components/Service.jsx";
import Contactpage from "./components/Contactpage.jsx";
import About from "./components/Aboutpage.jsx";
import Gallerypage from "./components/Gallerypage.jsx";
import Hotelpage from "./components/Hoteltel.jsx";
import Condopage from "./components/Condopage.jsx";
import Villapage from "./components/Villapage.jsx";
import Apartmentpage from "./components/Apartmentpage.jsx";
import Pay from "./components/Pay1.jsx";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/DreamHome/" element={<Homepage />} />
        <Route path="/DreamHome/service" element={<Service />} />
        <Route path="/DreamHome/contact" element={<Contactpage />} />
        <Route path="/DreamHome/about" element={<About />} />
        <Route path="/DreamHome/gallery" element={<Gallerypage />} />
        <Route path="/DreamHome/hotel" element={<Hotelpage />} />
        <Route path="/DreamHome/condo" element={<Condopage />} />
        <Route path="/DreamHome/villa" element={<Villapage />} />
        <Route path="/DreamHome/apartment" element={<Apartmentpage />} />
        <Route path="/DreamHome/pay1" element={<Pay />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
