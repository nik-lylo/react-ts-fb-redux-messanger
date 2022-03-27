import React, { FC, useEffect, useState } from "react";
// import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
// import AvatarRound from "../../../../UI/AvatarCustom/AvatarRound/AvatarRound";
// import InfoUserCard from "../../../../UI/cards/InfoUserCard/InfoUserCard";

const SettingsProfile: FC = () => {
  // const [birthday, setBirthday] = useState<null | string>(null);
  // const { user } = useTypedSelector((s) => s.profileReducer);

  // useEffect(() => {
  //   if (user.info.birthDay === null) {
  //     setBirthday(null);
  //   } else {
  //     setBirthday(
  //       `${user.info.birthDay?.date}-${user.info.birthDay?.month}-${user.info.birthDay?.year}`
  //     );
  //   }
  // }, []);

  return (
    <div className="settings-profile">
      {/* <div className="settings-profile__title settings-title">My Profile</div>
      <div className="settings-profile__body">
        <div className="settings-profile__my settings-profile-my">
          <div className="settings-profile-my__avatar">
            <AvatarRound width="96px" height="96px" urlAvatar={user.urlPhoto} />
          </div>
          <div className="settings-profile-my__fullname settings-fullname">
            {user.fullname}
          </div>
        </div>
        <div className="settings-profile__subtitle settings-subtitle">Info</div>
        <div className="settings-profile__info settings-profile-info">
          <div className="settings-profile-info__item">
            <InfoUserCard icon="icon-dog-mail" infoText={user.info.email} />
          </div>
          <div className="settings-profile-info__item">
            <InfoUserCard icon="icon-location" infoText={user.info.location} />
          </div>
          <div className="settings-profile-info__item">
            <InfoUserCard icon="icon-birthday" infoText={birthday} />
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
              infoText={`Joined ${user.info.joined}`}
            />
          </div>
        </div>
        <div className="settings-profile__subtitle settings-subtitle">
          Hobby
        </div>
        <div className="settings-profile__hobby">{user.info.hobby}</div>
      </div> */}
    </div>
  );
};

export default SettingsProfile;
