import React from "react";

function Button({ btnTitle, btnVariant, btnSize, onBtnClick, customStyle }) {
  return (
    <button
      className={`${
        btnVariant === "primary"
          ? "bg-cyan-700 text-white  hover:bg-cyan-800 "
          : btnVariant === "secondary"
          ? "border border-cyan-700 text-cyan-700 hover:bg-cyan-700 hover:text-white"
          : ""
      } 
      ${
        btnSize === "md"
          ? "px-5 py-2 text-sm"
          : btnSize === "lg"
          ? "px-6 py-3 text-md"
          : "px-4 py-2 "
      }
      cursor-pointer font-medium rounded-lg transition flex justify-center items-center gap-2
      ${customStyle}
      `}
      onClick={onBtnClick}
    >
      {btnTitle}
    </button>
  );
}

export default Button;
