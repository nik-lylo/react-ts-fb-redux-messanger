import React, { FC } from "react";
import { RoutesMainSettingsEnum } from "../../../../../lib/utilits/RoutesEnum";
import SideLink from "../../../../UI/link/SideLink/SideLink";

const MainSideSettingsButtons: FC = () => {
  return (
    <div className="main-side-settings-buttons">
      <SideLink
        to={RoutesMainSettingsEnum.EDIT}
        icon="icon-pencil"
        text="Edit profile"
      />
      <SideLink
        to={RoutesMainSettingsEnum.GROUP}
        icon="icon-web"
        text="Group"
      />
      <div className="main-side-settings-buttons__title">Other</div>
      <SideLink
        to={RoutesMainSettingsEnum.SIGN_OUT}
        icon="icon-signout"
        text="Sign out"
      />
    </div>
  );
};

export default MainSideSettingsButtons;
