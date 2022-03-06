import React, { FC } from "react";

interface ContactAboutInfoProps {
  icon: string;
  infoText: string;
}

const ContactAboutInfo: FC<ContactAboutInfoProps> = ({ icon, infoText }) => {
  return (
    <div className="contact-about-info__row">
      <div className={`contact-about-info__icon ${icon}`}></div>
      <div className="contact-about-info__text">{infoText}</div>
    </div>
  );
};

export default ContactAboutInfo;
