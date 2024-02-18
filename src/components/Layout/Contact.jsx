import React from "react";
import Whatsapp from "../../assets/Icons/whatsapp.svg";
import Email from "../../assets/Icons/email.svg";
import Location from "../../assets/Icons/location.svg";
import Card from "../Fragments/Contact/Card";
import ContactPhone from "../Fragments/Contact/ContactPhone";
import Contacts from "../Fragments/Contact/Contacts";

const Contact = () => {
  return (
    <>
      <div className="divider divider-info text-white overflow-hidden h-max text-3xl before:bg-white after:bg-white after:opacity-70 before:opacity-70 font-[PoppinsBold]">
        Contact Me
      </div>
      <div className="hp:hidden flex justify-center flex-col items-center py-10 px-3 box-border gap-5">
        <Contacts />
      </div>

      <ContactPhone />
      {/* <div className="divider divider-info text-white overflow-hidden h-max before:bg-white after:bg-white after:opacity-70 before:opacity-70 mb-0">
        &copy; Muhammad Fikrianto Aji
    </div> */}
      <span id="contact" className="opacity-0 w-[100vw] block">
        .
      </span>
    </>
  );
};

export default Contact;
