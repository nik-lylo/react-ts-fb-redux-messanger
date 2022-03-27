import React, { FC } from "react";
import MainSideSettingsLinks from "./links/MainSideSettingsLinks";
import MainSideSettingsProfile from "./profile/MainSideSettingsProfile";

const MainSideSettings: FC = () => {
  return (
    <div className="main-side-settings">
      <MainSideSettingsProfile />
      <MainSideSettingsLinks />
    </div>
  );
};

export default MainSideSettings;
