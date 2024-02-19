import React from "react";
import Whatsapp from "../../../assets/Icons/whatsapp.svg";
import Email from "../../../assets/Icons/email.svg";
import Location from "../../../assets/Icons/location.svg";
import Card from "./Card";

const ContactPhone = () => {
  return (
    <div className="flex justify-center items-center py-10 px-3 box-border gap-5">
      <Card
        logo={Whatsapp}
        alt="Whatsapp"
        title="+62895360778397"
        bg="#108b1b"
        href="https://api.whatsapp.com/send?phone=62895360778397"
      />
      <Card
        logo={Email}
        alt="Email"
        title="muhfikriantoaji@gmail.com"
        bg="#a00"
        href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZcQxphwQCjsdnsMSxflbLWtRbCJsSjdWbtBSlBbJgGbBgWJCBGFwMDWhRrNvSCBfcmxhL"
      />

      <Card
        logo={Location}
        alt="Location"
        title="Tangerang, Banten"
        bg="#134ce9"
        href="https://www.google.com/maps/place/Kabupaten+Tangerang,+Banten/data=!4m2!3m1!1s0x2e69ffb6b0ad7ae3:0x301576d14feb9b0?sa=X&ved=2ahUKEwidhOS7g7eEAxUf1zgGHSrIDC0Q8gF6BAgPEAA"
      />
    </div>
  );
};

export default ContactPhone;
