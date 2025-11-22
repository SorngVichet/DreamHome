import React from "react";
import Cart from "./Cart";
import Headbar from "./Headbar";
import HeaderPage from "./HeaderPage";
const Gallerypage = () => {
  return (
    <>
      <div
        id="gallerypage"
        style={{ minHeight: "100vh" }}
        className=" pt-16 px-2  "
      >
        <Headbar />
        <HeaderPage heading="All Categories" />
        <div className="  flex flex-wrap py-2  md:justify-between justify-center gap-4 px-3 w-full h-fit">
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
        </div>
      </div>
    </>
  );
};

export default Gallerypage;
