import React from "react";
import { motion } from "framer-motion";

const Card = ({ image, title, description, duration }) => {
  return (
    <motion.div
      initial={{ opacity: 0, transform: "scale(0)" }}
      whileInView={{ opacity: 1, transform: "scale(1)" }}
      transition={{
        duration,
      }}
      className="w-[500px] h-[400px] bg-[#151030] flex flex-col gap-2 rounded-3xl px-5 py-5 z-[-10]"
    >
      <div className="flex flex-col items-center ">
        <img src={image} alt="ecommerce" width="100%" className="rounded-xl" />
      </div>
      <h1 className="text-white font-[PoppinsBold] text-left text-2xl text-wrap">
        {title}
      </h1>
      <p className="text-white text-sm opacity-70 leading-5 text-wrap text">
        {description}
      </p>
    </motion.div>
  );
};

export default Card;
