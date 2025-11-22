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
import Pay1 from "./components/Pay1.jsx";
import Pay2 from "./components/Pay2.jsx";
import Pay3 from "./components/Pay3.jsx";
import Pay4 from "./components/Pay4.jsx";
import ScrollToTop from "./ScrollTop.jsx";
function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dreamhome/" element={<Homepage />} />
        <Route path="/dreamhome/service" element={<Service />} />
        <Route path="/dreamhome/contact" element={<Contactpage />} />
        <Route path="/dreamhome/about" element={<About />} />
        <Route path="/dreamhome/gallery" element={<Gallerypage />} />
        <Route path="/dreamhome/hotel" element={<Hotelpage />} />
        <Route path="/dreamhome/condo" element={<Condopage />} />
        <Route path="/dreamhome/villa" element={<Villapage />} />
        <Route path="/dreamhome/apartment" element={<Apartmentpage />} />
        <Route path="/dreamhome/pay1" element={<Pay1 />} />
        <Route path="/dreamhome/pay2" element={<Pay2 />} />
        <Route path="/dreamhome/pay3" element={<Pay3 />} />
        <Route path="/dreamhome/pay4" element={<Pay4 />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
