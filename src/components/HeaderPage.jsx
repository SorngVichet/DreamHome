import React from "react";

const HeaderPage = (props) => {
  return (
    <div
      style={{ top: "85px" }}
      className=" w-full  bg-yellow-500 text-white font-bold border-b text-2xl py-2 z-20 sticky  "
    >
      {props.heading}
    </div>
  );
};

export default HeaderPage;
