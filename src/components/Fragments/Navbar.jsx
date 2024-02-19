import React, { useState } from "react";
import Linkedin from "../../assets/Icons/Linkedin.svg";
import Instagram from "../../assets/Icons/Instagram.svg";
import Github from "../../assets/Icons/Github.svg";
import LinkedinBlack from "../../assets/Icons/Linkedin-Black.svg";
import InstagramBlack from "../../assets/Icons/Instagram-Black.svg";
import GithubBlack from "../../assets/Icons/Github-Black.svg";
import Logo from "../../assets/Icons/M-white.svg";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

const Navbar = ({ open, setOpen }) => {
  const [githubLogo, setGithubLogo] = useState(Github);
  const [linkedinLogo, setLinkedinLogo] = useState(Linkedin);
  const [instagramLogo, setInstagramLogo] = useState(Instagram);

  const [active, setActive] = useState("home");
  return (
    <>
      <nav className="super-mini:hidden px-4 py-5 sm:px-10 flex items-center w-full justify-center fixed top-0 left-0 right-0 bg-[#070b1b] z-[10]">
        <div className="w-full max-w-7xl flex items-center hp:items-start justify-between">
          <a
            href="/"
            className="flex items-center max-w-max p-0 gap-3 sm:gap-5"
          >
            <img src={Logo} alt="Logo" className="w-[45px] h-[45px]" />
            <h1 className="text-white text-xl font-[PoppinsSemiBold] max-w-max">
              Muhammad Fikri
            </h1>
          </a>

          <div className="hp:hidden hp-large:hidden tablet:hidden  dekstop:flex flex-row items-center justify-between lg:justify-center gap-10">
            <div className="flex items-center justify-between gap-10">
              <div className="flex item-center gap-2">
                <motion.div
                  initial={{ transform: "scale(0)" }}
                  animate={{ transform: "scale(1)" }}
                  transition={{
                    duration: 0.25,
                    delay: 0.25,
                  }}
                >
                  <a
                    href="https://www.linkedin.com/in/muhammad-fikrianto-aji-176169285"
                    target="_blank"
                    className="border border-[rgba(255,255,255,.7)] w-[40px] h-[40px] flex justify-center items-center rounded-full z-99 before:content-[''] before:w-[40px] before:h-[40px] before:opacity-0 before:absolute before:bg-white before:rounded-full before:z-[-10] linkedin"
                    onMouseEnter={() => setLinkedinLogo(LinkedinBlack)}
                    onMouseLeave={() => setLinkedinLogo(Linkedin)}
                  >
                    <img
                      src={linkedinLogo}
                      alt="Linkedin"
                      width={18}
                      height={18}
                    />
                  </a>
                </motion.div>
                <motion.div
                  initial={{ transform: "scale(0)", opacity: 0 }}
                  animate={{ transform: "scale(1)", opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: 0.25,
                  }}
                >
                  <a
                    href="https://www.instagram.com/muhfikrii_?igsh=MXF2aXhoN3g4aWk5dA=="
                    target="_blank"
                    className="border border-[rgba(255,255,255,.7)] w-[40px] h-[40px] flex justify-center items-center rounded-full z-99 before:content-[''] before:w-[40px] before:h-[40px] before:opacity-0 before:absolute before:bg-white before:rounded-full before:z-[-10] instagram"
                    onMouseEnter={() => setInstagramLogo(InstagramBlack)}
                    onMouseLeave={() => setInstagramLogo(Instagram)}
                  >
                    <img
                      src={instagramLogo}
                      alt="Instagram"
                      width={18}
                      height={18}
                    />
                  </a>
                </motion.div>
                <motion.div
                  initial={{ transform: "scale(0)" }}
                  animate={{ transform: "scale(1)" }}
                  transition={{
                    duration: 0.25,
                    delay: 0.25,
                  }}
                >
                  <a
                    href="https://github.com/muhammadfikri4"
                    target="_blank"
                    className="border border-[rgba(255,255,255,.7)] w-[40px] h-[40px] flex justify-center items-center rounded-full z-99 before:content-[''] before:w-[40px] before:h-[40px] before:opacity-0 before:absolute before:bg-white before:rounded-full before:z-[-10] github"
                    onMouseEnter={() => setGithubLogo(GithubBlack)}
                    onMouseLeave={() => setGithubLogo(Github)}
                  >
                    <img src={githubLogo} alt="Github" width={18} height={18} />
                  </a>
                </motion.div>
              </div>

              <ul className="hp:hidden hp-large:hidden tablet:hidden dekstop:flex gap-7 font-[Poppins]">
                <li
                  className={`text-[18px] ${
                    active === "home" ? "text-[#fff]" : "text-[#999]"
                  }`}
                  title="Home"
                  onClick={() => setActive("home")}
                >
                  <a href="#home">Home</a>
                </li>
                <li
                  className={`text-[18px] ${
                    active === "skills" ? "text-[#fff]" : "text-[#999]"
                  }`}
                  title="Skills"
                  onClick={() => setActive("skills")}
                >
                  <a href="#skills">Skills</a>
                </li>
                <li
                  className={`text-[18px] ${
                    active === "technology" ? "text-[#fff]" : "text-[#999]"
                  }`}
                  title="Tech"
                  onClick={() => setActive("technology")}
                >
                  <a href="#technology">Tech</a>
                </li>
                {/* <li
                  className={`text-[18px] ${
                    active === "project" ? "text-[#fff]" : "text-[#999]"
                  }`}
                  onClick={() => setActive("project")}
                >
                  <a href="#project">Project</a>
                </li> */}
                <li
                  className={`text-[18px] ${
                    active === "contact" ? "text-[#fff]" : "text-[#999]"
                  }`}
                  title="Contact"
                  onClick={() => setActive("contact")}
                >
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="dekstop:hidden hp:inline-block tablet:inline-block">
            {open ? (
              <IoMdClose
                className="inline-block lg:hidden w-[40px] h-[40px] text-white cursor-pointer"
                onClick={() => setOpen(!open)}
              />
            ) : (
              <BiMenuAltRight
                className="inline-block lg:hidden w-[40px] h-[40px] text-white cursor-pointer"
                onClick={() => setOpen(!open)}
              />
            )}
          </div>
        </div>
      </nav>
      <div
        className={`w-100 fixed right-3 top-[85px] py-3 gap-2 bg-linear-black rounded-xl ${
          open ? "flex" : "hidden"
        } sm:hidden flex-col text-white z-10`}
      >
        <a
          href="#home"
          className={`text-[18px] px-5 py-2 ${
            active === "home" ? "text-[#fff]" : "text-[#999]"
          }`}
          onClick={() => setActive("home")}
          title="Home"
        >
          Home
        </a>
        <a
          href="#skills"
          className={`text-[18px] px-5 py-2 ${
            active === "skills" ? "text-[#fff]" : "text-[#999]"
          }`}
          onClick={() => setActive("skills")}
          title="Skills"
        >
          Skills
        </a>
        <a
          href="#technology"
          className={`text-[18px] px-5 py-2 ${
            active === "technology" ? "text-[#fff]" : "text-[#999]"
          }`}
          onClick={() => setActive("technology")}
          title="Tech"
        >
          Tech
        </a>
        {/* <a
          href="#project"
          className={`text-[18px] px-5 py-2 ${
            active === "project" ? "text-[#fff]" : "text-[#999]"
          }`}
          onClick={() => setActive("project")}
        >
          Project
        </a> */}

        <a
          href="#contact"
          className={`text-[18px] px-5 py-2 ${
            active === "contact" ? "text-[#fff]" : "text-[#999]"
          }`}
          onClick={() => setActive("contact")}
          title="Contact"
        >
          Contact
        </a>
        <div className="flex item-center gap-2 w-100 px-5">
          <motion.div
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{
              duration: 0.25,
              delay: 0.25,
            }}
          >
            <a
              href="https://www.linkedin.com/in/muhammad-fikrianto-aji-176169285"
              target="_blank"
              className="border border-[rgba(255,255,255,.5)] w-[35px] h-[35px] flex justify-center items-center rounded-full z-99 before:content-[''] before:w-[35px] before:h-[35px] before:absolute before:bg-white before:rounded-full before:z-[-10] linkedin"
              onMouseEnter={() => setLinkedinLogo(LinkedinBlack)}
              onMouseLeave={() => setLinkedinLogo(Linkedin)}
            >
              <img src={linkedinLogo} alt="Linkedin" width={15} height={15} />
            </a>
          </motion.div>
          <motion.div
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{
              duration: 0.25,
              delay: 0.25,
            }}
          >
            <a
              href="https://www.instagram.com/muhfikrii_?igsh=MXF2aXhoN3g4aWk5dA=="
              target="_blank"
              className="border border-[rgba(255,255,255,.5)] w-[35px] h-[35px] flex justify-center items-center rounded-full z-99 before:content-[''] before:w-[35px] before:h-[35px] before:absolute before:bg-white before:rounded-full before:z-[-10] instagram"
              onMouseEnter={() => setInstagramLogo(InstagramBlack)}
              onMouseLeave={() => setInstagramLogo(Instagram)}
            >
              <img src={instagramLogo} alt="Instagram" width={15} height={15} />
            </a>
          </motion.div>
          <motion.div
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{
              duration: 0.25,
              delay: 0.25,
            }}
          >
            <a
              href="https://github.com/muhammadfikri4"
              target="_blank"
              className="border border-[rgba(255,255,255,.5)] w-[35px] h-[35px] flex justify-center items-center rounded-full z-99 before:content-[''] before:w-[35px] before:h-[35px] before:absolute before:bg-white before:rounded-full before:z-[-10] github"
              onMouseEnter={() => setGithubLogo(GithubBlack)}
              onMouseLeave={() => setGithubLogo(Github)}
            >
              <img src={githubLogo} alt="Github" width={15} height={15} />
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
