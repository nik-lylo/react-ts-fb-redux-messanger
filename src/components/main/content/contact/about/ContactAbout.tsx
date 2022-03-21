import React, { FC, useEffect, useState } from "react";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import GroupCard from "../../../../UI/cards/GroupCard/GroupCard";
import InfoUserCard from "../../../../UI/cards/InfoUserCard/InfoUserCard";

const ContactAbout: FC = () => {
  const { user } = useTypedSelector((s) => s.profileReducer);
  const { selectedContact, usersCollectionList } = useTypedSelector(
    (s) => s.contactReducer
  );
  const [birthday, setBirthday] = useState<null | string>(null);

  useEffect(() => {
    if (usersCollectionList[selectedContact.userID].info.birthDay === null) {
      setBirthday(null);
    } else {
      setBirthday(
        `${usersCollectionList[selectedContact.userID].info.birthDay?.date}-${
          usersCollectionList[selectedContact.userID].info.birthDay?.month
        }-${usersCollectionList[selectedContact.userID].info.birthDay?.year}`
      );
    }
  }, [usersCollectionList]);
  return (
    <div className="main-content-contact__about contact-about">
      <div className="contact-about__title">About</div>
      <div className="contact-about__text">
        {usersCollectionList[selectedContact.userID].info.hobby}
      </div>
      <div className="contact-about__info contact-about-info">
        <div className="contact-about-info__column_left">
          <InfoUserCard
            icon="icon-dog-mail"
            infoText={usersCollectionList[selectedContact.userID].info.email}
          />
          <InfoUserCard
            icon="icon-location"
            infoText={usersCollectionList[selectedContact.userID].info.location}
          />
          <InfoUserCard icon="icon-birthday" infoText={birthday} />
        </div>
        <div className="contact-about-info__column_right">
          <InfoUserCard
            icon="icon-mail-contact"
            infoText={
              usersCollectionList[selectedContact.userID].info.instagram
            }
          />
          <InfoUserCard
            icon="icon-twitter"
            infoText={usersCollectionList[selectedContact.userID].info.twitter}
          />
          <InfoUserCard
            icon="icon-flag"
            infoText={`Joined ${
              usersCollectionList[selectedContact.userID].info.joined
            }`}
          />
        </div>
      </div>
      <div className="contact-about__group about-group">
        <div className="about-group__title">
          <div className="about-group__title__text">Mutual groups</div>
          <div className="about-group__title__number">1</div>
        </div>
        <div className="about-group__container">
          <GroupCard urlAvatar={user.urlPhoto} name="Tesla" members={230} />
        </div>
      </div>
    </div>
  );
};

export default ContactAbout;
