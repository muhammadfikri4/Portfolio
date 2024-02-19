import React from "react";
import { motion } from "framer-motion";
import AnimationTechnology from "../../../assets/Lottie/Animation.json";
import Lottie from "lottie-react";

const Animation = () => {
  return (
    <motion.div
      initial={{ transform: "scale(0)" }}
      whileInView={{ transform: "scale(1)" }}
      transition={{
        duration: 0.4,
      }}
      className="p-0 max-w-max mini:ml-[10px] hp:mt-[-40px]"
    >
      <Lottie
        animationData={AnimationTechnology}
        loop={true}
        className="dekstop:w-[600px] dekstop:h-[600px] hp:w-[450px] hp-large:h-[500px] hp-large:w-[500px] hp:h-[450px]"
      />
    </motion.div>
  );
};

export default Animation;
