import React, { FC } from "react";
import { RoutesMainSettingsEnum } from "../../../../../lib/enum/router/RoutesMainEnum";
import SideLink from "../../../../UI/link/SideLink/SideLink";

const MainSideSettingsLinks: FC = () => {
  return (
    <div className="main-side-settings-links">
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
      <div className="main-side-settings-links__title main-17-title">Other</div>
      <SideLink
        to={RoutesMainSettingsEnum.SIGN_OUT}
        icon="icon-signout"
        text="Sign out"
      />
    </div>
  );
};

export default MainSideSettingsLinks;
