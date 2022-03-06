import React, { FC } from "react";

const ContactWrapper: FC = () => {
  return (
    <div className="main-content-contact__wrapper contact-wrapper">
      <div className="contact-wrapper__image">
        <img
          src={require("../../../../../assets/image/main/contact/addContact.png")}
          alt="friend"
        />
      </div>
      <div className="contact-wrapper__block">
        <div className="contact-wrapper__title">Add your friends</div>
        <div className="contact-wrapper__subtitle">
          You can view user profiles and make new acquaintances.
        </div>
      </div>
    </div>
  );
};

export default ContactWrapper;
