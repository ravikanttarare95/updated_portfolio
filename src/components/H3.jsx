import React from "react";

function H3({ headingTitle }) {
  return (
    <h3 className="text-3xl font-semibold text-gray-800 mb-4 text-start pb-2 flex gap-2 sm:gap-5 justify-center items-center">
      {headingTitle}
    </h3>
  );
}

export default H3;
