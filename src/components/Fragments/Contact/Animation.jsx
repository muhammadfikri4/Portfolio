import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import AnimationContact from "../../../assets/Lottie/contact.json";

const Animation = () => {
  return (
    <motion.div
      initial={{ transform: "scale(0)" }}
      whileInView={{ transform: "scale(1)" }}
      transition={{
        duration: 0.4,
      }}
      className="p-0 max-w-max mini:ml-[10px] flex justify-center items-center hp:mt-[-40px]"
    >
      <Lottie
        animationData={AnimationContact}
        loop={true}
        className="dekstop:w-[600px] dekstop:h-[600px] hp:w-[450px] hp-large:h-[500px] hp-large:w-[500px] hp:h-[450px]"
      />
    </motion.div>
  );
};

export default Animation;
