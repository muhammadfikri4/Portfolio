import React from "react";
import Whatsapp from "../../assets/Icons/whatsapp.svg";
import Email from "../../assets/Icons/email.svg";
import Location from "../../assets/Icons/location.svg";
import Card from "../Fragments/Contact/Card";
import ContactPhone from "../Fragments/Contact/ContactPhone";
import Lottie from "lottie-react";
import AnimationContact from "../../assets/Lottie/contact.json";
import { motion } from "framer-motion";
import Animation from "../Fragments/Contact/Animation";
import Form from "../Fragments/Contact/Form";
import Title from "../Fragments/Contact/Title";

const Contact = () => {
  return (
    <>
      <span id="contact" className="opacity-0 w-[100vw] block my-4">
        .
      </span>
      <div className="flex hp:flex-col tablet:flex-col w-screen">
        <Animation />
        <div className="pt-12 flex flex-col tablet:items-center hp:items-center hp:px-10">
          <Title />
          <Form />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <ContactPhone />
      </div>
    </>
  );
};

export default Contact;
