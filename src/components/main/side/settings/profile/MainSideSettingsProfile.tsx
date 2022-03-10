import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import { RoutesMainSettingsEnum } from "../../../../../lib/utilits/RoutesEnum";
import AvatarRound from "../../../../UI/AvatarCustom/AvatarRound/AvatarRound";

const MainSideSettingsProfile: FC = () => {
  const profile = useTypedSelector((s) => s.profileReducer);
  return (
    <div className="main-side-settings-profile">
      <div className="main-side-settings-profile__title">Settings</div>
      <NavLink
        to={RoutesMainSettingsEnum.PROFILE}
        className={({ isActive }) =>
          isActive
            ? "main-side-settings-profile__card main-side-settings-profile__card_selected"
            : "main-side-settings-profile__card"
        }
      >
        <div className="main-side-settings-profile__avatar">
          <AvatarRound
            width="56px"
            height="56px"
            urlAvatar={profile.urlPhoto}
          />
        </div>
        <div className="main-side-settings-profile__info">
          <div className="main-side-settings-profile__name">
            {profile.fullname}
          </div>
          <div className="main-side-settings-profile__mail">
            {profile.info.email}
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default MainSideSettingsProfile;
