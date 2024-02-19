import React from "react";
import { motion } from "framer-motion";

const Card = ({ logo, alt, title, duration }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, transform: "scale(0)" }}
        whileInView={{ opacity: 1, transform: "scale(1)" }}
        transition={{
          duration,
        }}
        className="hp:w-36 hp:h-36 mini:w-40 mini:h-40 w-40 h-40 py-8 flex flex-col justify-center  gap-5 hp:gap-3 items-center bg-[#151030] rounded-xl hover:bg-[#e6b71e] cursor-pointer"
      >
        <img
          src={logo}
          alt={alt}
          width={80}
          height={80}
          className="rounded-lg"
        />
        <h1 className="text-white text-wrap text-center hp:text-sm">{title}</h1>
      </motion.div>
    </>
  );
};

export default Card;
