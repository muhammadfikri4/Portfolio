import React from "react";
import { motion } from "framer-motion";
import ReactLogo from "../../assets/Icons/React.svg";
import Card from "../Fragments/Skills/Card";
import System from "../../assets/Icons/System.svg";
import Web from "../../assets/Icons/Web.svg";
import Frontend from "../../assets/Icons/frontend.svg";

const Skills = () => {
  return (
    <div className="-mt-52">
      <span id="skills" className="py-10 opacity-0 w-[100vw] block">
        .
      </span>
      <div className="super-mini:hidden flex justify-center items-center px-10 hp:px-5 mb-28">
        <div className="flex flex-col hp:gap-5">
          <motion.div
            initial={{ opacity: 0, transform: "scale(0)" }}
            whileInView={{ opacity: 1, transform: "scale(1)" }}
          >
            <h1 className="text-white font-[PoppinsBold] text-[40px] text-center">
              SKILLS
            </h1>
            <p className="text-[rgba(255,255,255,.7)] font-[PoppinsSemiBold] text-center text-lg">
              What Can I Do Best?
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-7">
            <Card
              title="Web Developer"
              description="I am a web developer, I understand about frontend developer and a little ability about backend developer. To create a website I use React JS or Next JS as the Frontend Framework and Express JS or Nest JS as the Backend framework"
              logo={Web}
              duration={0.1}
            />
            <Card
              title="Frontend Developer"
              description="As a Frontend Developer,. I work closely with UI/UX and backend developers to deliver an optimized user experience. I create responsive and enganging using HTML, CSS, and JavaScript, and use frontend frameworks such as React JS and Next JS."
              logo={Frontend}
              duration={0.2}
            />

            <Card
              title="Backend Developer"
              description="As a Backend Developer, I master the Javascript programming language and understand popular backend frameworks such as Express.js or Nest JS. I can also use databases like MySQL, or MongoDB and have a strong understanding of RESTful API concepts."
              logo={System}
              duration={0.3}
            />
            <Card
              title="React Developer"
              description="I use React JS to build interactive and responsive user
                  interfaces. React has become my top choice because of its
                  amazing ability to organize code in a modular way and speed up
                  the development process."
              logo={ReactLogo}
              duration={0.4}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
