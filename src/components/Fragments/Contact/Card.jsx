import React from "react";

const Card = ({ logo, alt, title }) => {
  return (
    <>
      {" "}
      <div className="bg-[#140f35] hp:w-max hp:py-2 px-5 py-1 rounded-lg text-white flex items-center gap-3 justify-center hp:justify-start hp:gap-5">
        <img src={logo} alt={alt} className="w-7 h-7 hp:w-5 hp:h-5" />
        <p className="text-sm">{title}</p>
      </div>
    </>
  );
};

export default Card;
