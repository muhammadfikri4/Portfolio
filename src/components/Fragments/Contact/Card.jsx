import React from "react";
import { motion } from "framer-motion";

const Card = ({ logo, alt, title, href = "#", bg, duration }) => {
  return (
    <>
      <motion.a
        initial={{ transform: "scale(0)" }}
        whileInView={{ transform: "scale(1)" }}
        transition={{
          duration,
        }}
        target="_blank"
        href={href}
        className="hp:hidden hp-large:hidden mini:hidden super-mini:hidden bg-[rgba(20,15,53,1)] px-5 py-[6px] rounded-lg text-white flex items-center gap-3 justify-center hover:bg-[rgba(20,15,53,.6)]"
      >
        <img src={logo} alt={alt} className="w-7 h-7 hp:w-5 hp:h-5" />
        <p className="text-sm">{title}</p>
      </motion.a>
      <motion.a
        initial={{ transform: "scale(0)" }}
        whileInView={{ transform: "scale(1)" }}
        transition={{
          duration,
        }}
        href={href}
        style={{ backgroundColor: bg }}
        className="dekstop:hidden tablet:hidden p-2 rounded-full"
        target="_blank"
      >
        <img src={logo} alt={alt} className="w-5 h-5 " />
      </motion.a>
    </>
  );
};

export default Card;
