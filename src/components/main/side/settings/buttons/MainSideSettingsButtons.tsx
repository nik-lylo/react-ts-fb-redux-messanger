import React, { FC } from "react";
import { RoutesMainSettingsEnum } from "../../../../../lib/utilits/RoutesEnum";
import SettingsLink from "../../../../UI/link/SettingsLink/SettingsLink";

const MainSideSettingsButtons: FC = () => {
  return (
    <div className="main-side-settings-buttons">
      <SettingsLink
        to={RoutesMainSettingsEnum.EDIT}
        icon="icon-pencil"
        text="Edit profile"
      />
      <SettingsLink
        to={RoutesMainSettingsEnum.GROUP}
        icon="icon-web"
        text="Group"
      />
      <div className="main-side-settings-buttons__title">Other</div>
      <SettingsLink
        to={RoutesMainSettingsEnum.SIGN_OUT}
        icon="icon-signout"
        text="Sign out"
      />
    </div>
  );
};

export default MainSideSettingsButtons;
