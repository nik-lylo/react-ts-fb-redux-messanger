import React from "react";
import { useTypedSelector } from "../../../../lib/hooks/useTypedSelector";
import ContactAbout from "./about/ContactAbout";
import ContactProfile from "./profile/ContactProfile";
import ContactWrapper from "./wrapper/ContactWrapper";
import { isEmptyObj } from "../../../../lib/helper/isEmptyObj";
import BarLoader from "../../../UI/loader/BarLoader/BarLoader";
const MainContactContent = () => {
  const { selectedContact, isContactLoading } = useTypedSelector(
    (s) => s.contactReducer
  );
  return (
    <div className="main-content__contact content-contact">
      {isContactLoading ? (
        <div className="contact-side__loader-block">
          <BarLoader />
        </div>
      ) : isEmptyObj(selectedContact) ? (
        <ContactWrapper />
      ) : (
        <div className="content-contact__flex">
          <ContactProfile />
          <ContactAbout />
        </div>
      )}
    </div>
  );
};

export default MainContactContent;
