import React from "react";
import Headbar from "./Headbar";
import HeaderPage from "./HeaderPage";
const Condopage = () => {
  return (
    <div
      id="gallerypage"
      style={{ minHeight: "100vh" }}
      className=" pt-16  w-full"
    >
      <Headbar />
      <HeaderPage heading="All Condos" />
    </div>
  );
};

export default Condopage;
