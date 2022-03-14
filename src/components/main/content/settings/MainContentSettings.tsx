import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import { RoutesMainSettingsEnum } from "../../../../lib/utilits/RoutesEnum";
import SettingsCommunities from "./communities/SettingsCommunities";
import SettingsEdit from "./edit/SettingsEdit";
import SettingsProfile from "./profile/SettingsProfile";
import SettingsSignOut from "./signout/SettingsSignOut";

const MainContentSettings: FC = () => {
  const location = useLocation();

  return (
    <div className="main-content-settings">
      <div className="main-content-settings__container">
        {(() => {
          if (location.pathname.endsWith(RoutesMainSettingsEnum.EDIT)) {
            return <SettingsEdit />;
          }
          if (location.pathname.endsWith(RoutesMainSettingsEnum.COMMUNITIES)) {
            return <SettingsCommunities />;
          }
          if (location.pathname.endsWith(RoutesMainSettingsEnum.SIGN_OUT)) {
            return <SettingsSignOut />;
          }
          if (location.pathname.endsWith(RoutesMainSettingsEnum.PROFILE)) {
            return <SettingsProfile />;
          }
        })()}
      </div>
    </div>
  );
};

export default MainContentSettings;
