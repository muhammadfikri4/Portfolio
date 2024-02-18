import { useEffect, useMemo, useState } from "react";
import AnimationTechnology from "./assets/Lottie/Animation.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import Navbar from "./components/Fragments/Navbar";
import Home from "./components/Layout/Home";
import Skills from "./components/Layout/Skills";
import Project from "./components/Layout/Project";
import Technology from "./components/Layout/Technology";
import Contact from "./components/Layout/Contact";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Navbar open={open} setOpen={setOpen} />
      <Home />
      <Skills />
      <Technology />
      <Project />
      <Contact />
    </>
  );
}

export default App;

// flex flex-col justify-center items-center
// flex sm:flex-row flex-col justify-center sm:justify-end items-center flex-wrap relative top-[100px]
