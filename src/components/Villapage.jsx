import React from "react";
import Headbar from "./Headbar";
import HeaderPage from "./HeaderPage";
const Villapage = () => {
  return (
    <div
      id="gallerypage"
      style={{ minHeight: "100vh" }}
      className=" pt-16  w-full"
    >
      <Headbar />
      <HeaderPage heading="All Villas" />
    </div>
  );
};

export default Villapage;
