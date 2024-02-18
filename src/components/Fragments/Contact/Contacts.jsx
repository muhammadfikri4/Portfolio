import React from "react";
import Whatsapp from "../../../assets/Icons/whatsapp.svg";
import Email from "../../../assets/Icons/email.svg";
import Location from "../../../assets/Icons/location.svg";
import Card from "./Card";

const Contacts = () => {
  return (
    <>
      <div className="flex justify-center gap-10">
        <Card logo={Whatsapp} alt="Whatsapp" title="+62895360778397" />
        <Card logo={Email} alt="Email" title="muhfikriantoaji@gmail.com" />
      </div>
      <Card logo={Location} alt="Location" title="Tangerang, Banten" />
    </>
  );
};

export default Contacts;
