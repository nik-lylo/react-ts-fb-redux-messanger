import React, { FC } from "react";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import GroupCard from "../../../../UI/cards/GroupCard/GroupCard";
import ContactAboutInfo from "./info/ContactAboutInfo";

const ContactAbout: FC = () => {
  const { urlPhoto } = useTypedSelector((s) => s.profileReducer);
  const { selectedContact } = useTypedSelector((s) => s.contactReducer);

  return (
    <div className="main-content-contact__about contact-about">
      <div className="contact-about__title">About</div>
      <div className="contact-about__text">{selectedContact.info.hobby}</div>
      <div className="contact-about__info contact-about-info">
        <div className="contact-about-info__column_left">
          <ContactAboutInfo
            icon="icon-dog-mail"
            infoText={selectedContact.info.email}
          />
          {selectedContact.info.location && (
            <ContactAboutInfo
              icon="icon-location"
              infoText={selectedContact.info.location}
            />
          )}

          {selectedContact.info.birthDay && (
            <ContactAboutInfo
              icon="icon-birthday"
              infoText={selectedContact.info.birthDay}
            />
          )}
        </div>
        <div className="contact-about-info__column_right">
          {selectedContact.info.instagram && (
            <ContactAboutInfo
              icon="icon-mail-contact"
              infoText={selectedContact.info.instagram}
            />
          )}

          {selectedContact.info.twitter && (
            <ContactAboutInfo
              icon="icon-twitter"
              infoText={selectedContact.info.twitter}
            />
          )}

          <ContactAboutInfo
            icon="icon-flag"
            infoText={`Joined ${selectedContact.info.joined}`}
          />
        </div>
      </div>
      <div className="contact-about__group about-group">
        <div className="about-group__title">
          <div className="about-group__title__text">Mutual groups</div>
          <div className="about-group__title__number">1</div>
        </div>
        <div className="about-group__container">
          <GroupCard urlAvatar={urlPhoto} />
        </div>
      </div>
    </div>
  );
};

export default ContactAbout;