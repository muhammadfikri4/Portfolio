import React from "react";
import Card from "./Card";
import JS from "../../../assets/Icons/JS.svg";
import HTML from "../../../assets/Icons/HTML.svg";
import CSS from "../../../assets/Icons/CSS.svg";
import ReactLogo from "../../../assets/Icons/React.svg";
import NestJS from "../../../assets/Icons/nestjs.svg";
import ExpressJS from "../../../assets/Icons/expressjs.svg";
import TailwindCSS from "../../../assets/Icons/TailwindCSS.svg";
import NodeJS from "../../../assets/Icons/nodejs.svg";
import Bootstrap from "../../../assets/Icons/bootstrap.svg";
import NextJS from "../../../assets/Icons/Nextjs.svg";
import MongoDB from "../../../assets/Icons/mongodb.svg";
import MySQL from "../../../assets/Icons/mysql.svg";
import Github from "../../../assets/Icons/Github.svg";
import Git from "../../../assets/Icons/git.svg";

const CardList = () => {
  return (
    <>
      <Card logo={HTML} alt="HTML" title="HTML" duration={0.1} />
      <Card logo={CSS} alt="CSS" title="CSS" duration={0.15} />
      <Card logo={Bootstrap} alt="Bootstrap" title="Bootstrap" duration={0.2} />
      <Card
        logo={TailwindCSS}
        alt="Tailwind CSS"
        title="Tailwind CSS"
        duration={0.25}
      />
      <Card logo={JS} alt="Javascript" title="Javascript" duration={0.3} />
      <Card logo={ReactLogo} alt="React JS" title="React JS" duration={0.35} />
      <Card logo={NextJS} alt="Next JS" title="Next JS" duration={0.1} />
      <Card logo={Github} alt="Github" title="Github" duration={0.15} />
      <Card logo={Git} alt="Git" title="Git Source Control" duration={0.2} />
      <Card logo={NodeJS} alt="Node JS" title="Node JS" duration={0.25} />
      <Card
        logo={ExpressJS}
        alt="Express JS"
        title="Express JS"
        duration={0.3}
      />
      <Card logo={NestJS} alt="Nest JS" title="Nest JS" duration={0.35} />
      <Card logo={MongoDB} alt="MongoDB" title="MongoDB" duration={0.1} />
      <Card logo={MySQL} alt="MySQL" title="MySQL" duration={0.15} />
    </>
  );
};

export default CardList;
