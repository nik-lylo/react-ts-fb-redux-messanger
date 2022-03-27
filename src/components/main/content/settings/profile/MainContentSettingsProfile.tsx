import React, { FC, useEffect, useState } from "react";
import { dateFromCreatedAt } from "../../../../../lib/helper/dateFromCreatedAt";
import { parseBirthdayField } from "../../../../../lib/helper/parseBirthdayField";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import AvatarRound from "../../../../UI/avatar/AvatarRound/AvatarRound";
import InfoUserCard from "../../../../UI/cards/InfoUserCard/InfoUserCard";
import BarLoader from "../../../../UI/loader/BarLoader/BarLoader";

const MainContentSettingsProfile: FC = () => {
  const [birthday, setBirthday] = useState<null | string>(null);
  const { user } = useTypedSelector((s) => s.profileReducer);

  return (
    <div className="main-content-settings-profile">
      <div className="main-content-settings-profile__title main-24-title">
        My Profile
      </div>
      <div className="main-content-settings-profile__body">
        <div className="main-content-settings-profile__my settings-profile-my">
          <div className="settings-profile-my__avatar">
            <AvatarRound width="96px" height="96px" urlAvatar={user.urlPhoto} />
          </div>
          <div className="settings-profile-my__fullname settings-fullname">
            {user.fullname}
          </div>
        </div>
        <div className="settings-profile__subtitle main-17-title">Info</div>
        <div className="settings-profile__info settings-profile-info">
          <div className="settings-profile-info__item">
            <InfoUserCard icon="icon-dog-mail" infoText={user.info.email} />
          </div>
          <div className="settings-profile-info__item">
            <InfoUserCard icon="icon-location" infoText={user.info.location} />
          </div>
          <div className="settings-profile-info__item">
            <InfoUserCard
              icon="icon-birthday"
              infoText={parseBirthdayField(user.info.birthDay)}
            />
          </div>
          <div className="settings-profile-info__item">
            <InfoUserCard
              icon="icon-mail-contact"
              infoText={user.info.instagram}
            />
          </div>
          <div className="settings-profile-info__item">
            <InfoUserCard icon="icon-twitter" infoText={user.info.twitter} />
          </div>
          <div className="settings-profile-info__item">
            <InfoUserCard
              icon="icon-flag"
              infoText={`Joined ${
                dateFromCreatedAt(user.info.joined)?.fulldate
              }`}
            />
          </div>
        </div>
        <div className="main-content-settings-profile__subtitle main-17-title">
          Hobby
        </div>
        <div className="main-content-settings-profile__hobby">
          {user.info.hobby}
        </div>
      </div>
    </div>
  );
};

export default MainContentSettingsProfile;
