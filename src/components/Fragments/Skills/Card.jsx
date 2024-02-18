import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, description, logo, duration }) => {
  return (
    <motion.div
      initial={{ opacity: 0, transform: "scale(0)" }}
      whileInView={{ opacity: 1, transform: "scale(1)" }}
      transition={{
        duration,
      }}
    >
      <div className="flex flex-col items-center">
        <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-rainbow-full relative top-3 z-99">
          <img src={logo} alt="React" width={30} />
        </div>
        <div className="w-60 bg-[#151030] flex flex-col items-center gap-5 rounded-3xl px-5 py-5 z-[-10] h-[270px]">
          <h1 className="text-white text-center font-[PoppinsSemiBold]">
            {title}
          </h1>
          <p className="text-white text-xs opacity-70 leading-5 text-wrap text">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
