import React from "react";

function SkillsIcon({ icon, alt }) {
  return (
    <div
      data-aos="slide-up"
      className="group  p-2 shadow-lg border border-gray-300 bg-blue-50 m-2 w-20 rounded hover:scale-150 hover:rotate-0 hover:z-49 duration-300 rotate-0 md:-rotate-30 flex justify-center items-center gap-3 "
    >
      <img src={icon} alt={alt} />
    </div>
  );
}

export default SkillsIcon;
