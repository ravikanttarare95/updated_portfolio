import React from "react";

function Button({ btnTitle, btnVariant, onBtnClick }) {
  return (
    <button
      className={`${
        btnVariant === "primary"
          ? " px-6 py-3  bg-cyan-700 text-white  hover:bg-cyan-800 "
          : btnVariant === "secondary"
          ? "px-6 py-3  border border-cyan-700 text-cyan-700 hover:bg-cyan-50"
          : ""
      } cursor-pointer text-base font-medium rounded-lg transition`}
      onClick={onBtnClick}
    >
      {btnTitle}
    </button>
  );
}

export default Button;
