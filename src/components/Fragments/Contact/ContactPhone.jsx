import React from "react";
import Whatsapp from "../../../assets/Icons/whatsapp.svg";
import Email from "../../../assets/Icons/email.svg";
import Location from "../../../assets/Icons/location.svg";
import Card from "./Card";

const ContactPhone = () => {
  return (
    <div className="dekstop:hidden tablet:hidden flex justify-center flex-col items-center py-10 px-3 box-border gap-5">
      <Card logo={Whatsapp} alt="Whatsapp" title="+62895360778397" />
      <Card logo={Email} alt="Email" title="muhfikriantoaji@gmail.com" />

      <Card logo={Location} alt="Location" title="Tangerang, Banten" />
    </div>
  );
};

export default ContactPhone;
