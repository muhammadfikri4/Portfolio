import React from "react";
import { motion } from "framer-motion";
import Arrow from "../../../assets/Icons/arrow.svg";
import Button from "./Button";

const Introduction = () => {
  return (
    <div className="flex flex-col justify-center gap-[10px] z-[9]">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          delay: 0.1,
        }}
      >
        <h2 className="text-white px-[10px] py-[7px] font-[PoppinsSemiBold] border border-[rgba(255,255,255,.5)] inline-block max-w-max rounded-sm bg-rainbow">
          Welcome to My Portofolio
        </h2>
      </motion.div>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.75,
          delay: 0.25,
        }}
      >
        <h1 className="text-[#ffffff] overflow-hidden hp:text-[22px] hp-large:text-3xl hp-large:w-[90vw] hp:w-[90%] text-wrap tablet:text-4xl dekstop:text-5xl font-bold tablet:flex tablet:justify-center tablet:flex-col">
          <span>I'm</span> Muhammad Fikrianto Aji
        </h1>
      </motion.div>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.75,
          delay: 0.25,
        }}
      ></motion.div>
      <motion.div
        initial={{ transform: "scale(0)", opacity: 0 }}
        animate={{ transform: "scale(1)", opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.25,
        }}
        className="tablet:flex tablet:justify-center"
      >
        <p className="tablet:w-[85vw] hp:w-[85vw] hp-large:w-[85vw] dekstop:w-[50vw] hp:text-lg dekstop:text-base text-[#ddd]">
          I am a web developer, I understand about frontend developer and a
          little ability about backend developer. I am familiar with HTML, CSS
          and Javascript. I can also use javascript frameworks like React and I
          can also use Node JS frameworks like Express JS and Nest JS.
        </p>
      </motion.div>
      <div className="flex items-center justify-start">
        <Button />
      </div>
    </div>
  );
};

export default Introduction;
