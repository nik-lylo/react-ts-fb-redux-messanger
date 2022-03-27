import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import { RoutesMainSettingsEnum } from "../../../../lib/enum/router/RoutesMainEnum";
import { useTypedSelector } from "../../../../lib/hooks/useTypedSelector";
import BarLoader from "../../../UI/loader/BarLoader/BarLoader";
import MainContentSettingsEdit from "./edit/MainContentSettingsEdit";
import MainContentSettingsProfile from "./profile/MainContentSettingsProfile";
import MainContentSettingsSignout from "./signout/MainContentSettingsSignout";

const MainContentSettings: FC = () => {
  const location = useLocation();
  const { isUserInstalled } = useTypedSelector((s) => s.profileReducer);

  if (!isUserInstalled) {
    console.log("work");

    return <BarLoader blockSize="25px" />;
  }

  return (
    <div className="main-content-settings">
      <div className="main-content-settings__container">
        {(() => {
          if (location.pathname.endsWith(RoutesMainSettingsEnum.EDIT)) {
            return <MainContentSettingsEdit />;
          }
          // if (location.pathname.endsWith(RoutesMainSettingsEnum.GROUP)) {
          //   return <MainContentSettingsGroup />;
          // }
          if (location.pathname.endsWith(RoutesMainSettingsEnum.SIGN_OUT)) {
            return <MainContentSettingsSignout />;
          }
          if (location.pathname.endsWith(RoutesMainSettingsEnum.PROFILE)) {
            return <MainContentSettingsProfile />;
          }
        })()}
      </div>
    </div>
  );
};

export default MainContentSettings;
