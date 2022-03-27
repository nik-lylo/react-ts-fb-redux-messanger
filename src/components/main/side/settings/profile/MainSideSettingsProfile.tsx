import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { RoutesFullMainSettingsEnum } from "../../../../../lib/enum/router/RoutesMainEnum";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import AvatarRound from "../../../../UI/avatar/AvatarRound/AvatarRound";

const MainSideSettingsProfile: FC = () => {
  const { user } = useTypedSelector((s) => s.profileReducer);

  return (
    <div className="main-side-settings-profile">
      <div className="main-side-settings-profile__title main-24-title">
        Settings
      </div>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "main-side-settings-profile__card main-side-settings-profile__card_selected"
            : "main-side-settings-profile__card"
        }
        to={RoutesFullMainSettingsEnum.PROFILE}
      >
        <div className="main-side-settings-profile__avatar">
          <AvatarRound width="56px" height="56px" urlAvatar={user.urlPhoto} />
        </div>
        <div className="main-side-settings-profile__info">
          <div className="main-side-settings-profile__name">
            {user.fullname}
          </div>
          <div className="main-side-settings-profile__mail">
            {user.info.email}
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default MainSideSettingsProfile;
