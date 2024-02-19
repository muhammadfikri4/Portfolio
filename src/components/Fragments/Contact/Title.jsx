import React from "react";
import { motion } from "framer-motion";

const Title = () => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
      }}
      className="text-white text-5xl overflow-hidden font-[PoppinsBold]"
    >
      Contact Me.
    </motion.h1>
  );
};

export default Title;
