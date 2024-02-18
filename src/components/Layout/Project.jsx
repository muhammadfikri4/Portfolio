import React from "react";
import { motion } from "framer-motion";
import ecommerce from "../../assets/Image/ecommerce.png";
import notes from "../../assets/Image/notes.png";
import recycle from "../../assets/Image/RecycleApp.png";
import Card from "../Fragments/Project/Card";

const Project = () => {
  return (
    <div>
      <span id="project" className="py-10 opacity-0 w-[100vw] block">
        .
      </span>
      <div className="super-mini:hidden flex justify-center items-center px-10 hp:px-5 mb-28">
        <div>
          <motion.div
            initial={{ opacity: 0, transform: "scale(0)" }}
            whileInView={{ opacity: 1, transform: "scale(1)" }}
          >
            <h1 className="text-white font-[PoppinsBold] text-[40px] text-center">
              PROJECT
            </h1>
            <p className="text-[rgba(255,255,255,.7)] font-[PoppinsSemiBold] text-center text-lg">
              What Have I Ever Done?
            </p>
          </motion.div>

          <div className="flex justify-center items-center gap-7 flex-wrap py-7">
            <Card
              image={ecommerce}
              title="E-Commerce"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione iste, temporibus veritatis ab eos similique quam accusamus quasi, maiores officia nam modi tenetur vero autem."
              duration={0.1}
            />
            <Card
              image={notes}
              title="Notes App"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione iste, temporibus veritatis ab eos similique quam accusamus quasi, maiores officia nam modi tenetur vero autem."
              duration={0.2}
            />
            <Card
              image={recycle}
              title="Recycle App"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione iste, temporibus veritatis ab eos similique quam accusamus quasi, maiores officia nam modi tenetur vero autem."
              duration={0.3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

// 3d3e42
