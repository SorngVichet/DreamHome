import React from "react";
import img1 from "../assets/img1.jpg";
import bg from "../assets/Bgpayment.png";
const Cart = () => {
  return (
    <div
      style={{ height: "400px" }}
      className=" bg-amber-300 p-2   sm:w-80 w-full
      border"
    >
      <div
        style={{ height: "50%" }}
        className=" flex items-center justify-center  rounded-br-2xl relative w-full bg-amber-50"
      >
        <img src={img1} className=" rounded-br-2xl h-full" alt="" />
        <div className=" absolute transform rotate-180 h-full w-full">
          <img src={bg} className=" rounded-tl-2xl" alt="" />
        </div>
        <div className=" coverimgcart flex items-end  justify-center z-10 absolute h-full w-full">
          <h5
            className=" text-white px-2
           py-1"
          >
            Best Condo In Phnom Penh
          </h5>
        </div>
      </div>
      <div style={{ height: "50%" }} className=" p-3 w-full">
        <div className=" h-full w-full bg-gray-300"></div>
      </div>
    </div>
  );
};

export default Cart;
