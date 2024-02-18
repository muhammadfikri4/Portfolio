import React from "react";
import AnimationTechnology from "../../assets/Lottie/Animation.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import Introduction from "../Fragments/Home/Introduction";
import Animation from "../Fragments/Home/Animation";

const Home = () => {
  return (
    <div
      className={`super-mini:hidden flex dekstop:flex-row flex-col justify-center dekstop:justify-center hp:items-start dekstop:items-center flex-wrap mt-[100px] dekstop:mt-10 dekstop:px-[30px] hp:px-0 hp:ml-[-40px] hp-large:ml-[-40px] mini:ml-[-60px] mb-20`}
      id="home"
    >
      <div className="flex dekstop:flex-row tablet:flex-col hp:flex-col hp-large:flex-col justify-center items-center">
        <Introduction />
        <Animation />
      </div>
    </div>
  );
};

export default Home;
