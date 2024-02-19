import React from "react";
import Card from "../Fragments/Technology/Card";
import { motion } from "framer-motion";
import CardList from "../Fragments/Technology/CardList";

const Technology = () => {
  return (
    <>
      <div className="-mt-24">
        <span id="technology" className="py-10 opacity-0 w-[100vw] block">
          .
        </span>
        <div className="super-mini:hidden flex justify-center items-center px-10 hp:px-5 mb-28">
          <div>
            <motion.div
              initial={{ opacity: 0, transform: "scale(0)" }}
              whileInView={{ opacity: 1, transform: "scale(1)" }}
            >
              <h1 className="text-white font-[PoppinsBold] text-[40px] text-center">
                Technology
              </h1>
              <p className="text-[rgba(255,255,255,.7)] font-[PoppinsSemiBold] text-center text-lg">
                What I Often Use?
              </p>
            </motion.div>

            <div className="flex justify-center items-center gap-7 flex-wrap py-7">
              <CardList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology;
