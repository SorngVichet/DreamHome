import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Homepage from "./Homepage.jsx";
import Categories from "./Categories.jsx";
import Contactpage from "./Contactpage.jsx";

const HomeRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/HomeeRenter/" element={<Homepage />} />
        <Route path="/HomeeRenter/categoires" element={<Categories />} />
        <Route path="/HomeeRenter/contact" element={<Contactpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default HomeRouter;
