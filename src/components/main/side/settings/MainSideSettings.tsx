import React, { FC } from "react";
import MainSideSettingsButtons from "./buttons/MainSideSettingsButtons";
import MainSideSettingsProfile from "./profile/MainSideSettingsProfile";

const MainSideSettings: FC = () => {
  return (
    <div className="main-side-settings">
      <MainSideSettingsProfile />
      <MainSideSettingsButtons />
    </div>
  );
};

export default MainSideSettings;
