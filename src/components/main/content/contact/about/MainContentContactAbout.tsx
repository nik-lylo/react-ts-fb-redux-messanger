import React, { FC, useEffect, useState } from "react";
import { dateFromCreatedAt } from "../../../../../lib/helper/dateFromCreatedAt";
import { parseBirthdayField } from "../../../../../lib/helper/parseBirthdayField";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import InfoUserCard from "../../../../UI/cards/InfoUserCard/InfoUserCard";

const MainContentContactAbout: FC = () => {
  const [birthday, setBirthday] = useState<null | string>(null);
  const { user } = useTypedSelector((s) => s.profileReducer);
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
      <div className="main-content-contact-about__group contact-about-group">
        <div className="contact-about-group__title">
          <div className="contact-about-group__text">Mutual groups</div>
          <div className="contact-about-group__number">1</div>
        </div>
        <div className="contact-about-group__container">
          {/* <GroupCardInfo urlAvatar={user.urlPhoto} name="Tesla" members={230} /> */}
        </div>
      </div>
    </div>
  );
};

export default MainContentContactAbout;
