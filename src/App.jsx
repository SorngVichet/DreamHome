import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";

import Footer from "./components/Footer.jsx";

import HomeRouter from "./components/HomeRouter.jsx";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <HomeRouter />
      <Footer />
    </>
  );
}

export default App;
