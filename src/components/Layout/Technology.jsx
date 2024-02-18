import React from "react";
import Card from "../Fragments/Technology/Card";
import JS from "../../assets/Icons/JS.svg";
import HTML from "../../assets/Icons/HTML.svg";
import CSS from "../../assets/Icons/CSS.svg";
import ReactLogo from "../../assets/Icons/React.svg";
import NestJS from "../../assets/Icons/nestjs.svg";
import ExpressJS from "../../assets/Icons/expressjs.svg";
import TailwindCSS from "../../assets/Icons/TailwindCSS.svg";
import NodeJS from "../../assets/Icons/nodejs.svg";
import Boostrap from "../../assets/Icons/bootstrap.svg";
import NextJS from "../../assets/Icons/Nextjs.svg";
import MongoDB from "../../assets/Icons/mongodb.svg";
import MySQL from "../../assets/Icons/mysql.svg";
import { motion } from "framer-motion";

const Technology = () => {
  return (
    <>
      <div>
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
              <Card logo={HTML} alt="HTML" title="HTML" duration={0.1} />
              <Card logo={CSS} alt="CSS" title="CSS" duration={0.2} />
              <Card
                logo={Boostrap}
                alt="Boostrap"
                title="Boostrap"
                duration={0.3}
              />
              <Card
                logo={TailwindCSS}
                alt="Tailwind CSS"
                title="Tailwind CSS"
                duration={0.4}
              />
              <Card
                logo={JS}
                alt="Javascript"
                title="Javascript"
                duration={0.5}
              />
              <Card
                logo={ReactLogo}
                alt="React JS"
                title="React JS"
                duration={0.1}
              />
              <Card
                logo={NextJS}
                alt="Next JS"
                title="Next JS"
                duration={0.2}
              />
              <Card
                logo={NodeJS}
                alt="Node JS"
                title="Node JS"
                duration={0.3}
              />
              <Card
                logo={ExpressJS}
                alt="Express JS"
                title="Express JS"
                duration={0.4}
              />
              <Card
                logo={NestJS}
                alt="Nest JS"
                title="Nest JS"
                duration={0.5}
              />
              <Card
                logo={MongoDB}
                alt="MongoDB"
                title="MongoDB"
                duration={0.1}
              />
              <Card logo={MySQL} alt="MySQL" title="MySQL" duration={0.2} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology;
