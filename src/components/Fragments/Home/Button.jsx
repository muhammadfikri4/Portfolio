import React from "react";
import { motion } from "framer-motion";
import Arrow from "../../../assets/Icons/arrow.svg";

const Button = () => {
  return (
    <motion.a
      href="https://www.linkedin.com/in/muhammad-fikrianto-aji-176169285"
      className="text-white bg-rainbow-full pl-5 pr-3 py-2 rounded-3xl flex items-center justify-center gap-2"
      initial={{ gap: "8px", opacity: 0, x: -100 }}
      whileHover={{ gap: "30px" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.25,
      }}
    >
      Let's Connect
      <img src={Arrow} alt="arrow" />
    </motion.a>
  );
};

export default Button;
