import React, { FC, useEffect, useState } from "react";
import { dateFromCreatedAt } from "../../../../../lib/helper/dateFromCreatedAt";
import { parseBirthdayField } from "../../../../../lib/helper/parseBirthdayField";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import InfoUserCard from "../../../../UI/cards/InfoUserCard/InfoUserCard";
import MCCAboutMutualGroup from "./mutual_group/MCCAboutMutualGroup";

const MainContentContactAbout: FC = () => {
  const { selectedContact } = useTypedSelector((s) => s.contactReducer);
  const { usersObjectCollectionList } = useTypedSelector((s) => s.appReducer);
  return (
    <div className="main-content-contact-about ">
      <div className="main-content-contact-about__title main-17-title">
        About
      </div>
      <div className="main-content-contact-about__text">
        {selectedContact &&
          usersObjectCollectionList[selectedContact].info.hobby}
      </div>
      <div className="main-content-contact-about__info contact-about-info">
        <div className="contact-about-info__column_left">
          <InfoUserCard
            icon="icon-dog-mail"
            infoText={
              selectedContact &&
              usersObjectCollectionList[selectedContact].info.email
            }
          />
          <InfoUserCard
            icon="icon-location"
            infoText={
              selectedContact &&
              usersObjectCollectionList[selectedContact].info.location
            }
          />
          <InfoUserCard
            icon="icon-birthday"
            infoText={
              selectedContact
                ? parseBirthdayField(
                    usersObjectCollectionList[selectedContact].info.birthDay
                  )
                : ""
            }
          />
        </div>
        <div className="contact-about-info__column_right">
          <InfoUserCard
            icon="icon-mail-contact"
            infoText={
              selectedContact &&
              usersObjectCollectionList[selectedContact].info.instagram
            }
          />
          <InfoUserCard
            icon="icon-twitter"
            infoText={
              selectedContact &&
              usersObjectCollectionList[selectedContact].info.twitter
            }
          />
          <InfoUserCard
            icon="icon-flag"
            infoText={
              selectedContact &&
              `Joined ${
                dateFromCreatedAt(
                  usersObjectCollectionList[selectedContact].info.joined
                )?.fulldate
              }`
            }
          />
        </div>
      </div>
      <MCCAboutMutualGroup />
    </div>
  );
};

export default MainContentContactAbout;
