import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import {
  RoutesFullMainEnum,
  RoutesMainSettingsEnum,
} from "../../../../lib/enum/router/RoutesMainEnum";
import { useTypedSelector } from "../../../../lib/hooks/useTypedSelector";
import BarLoader from "../../../UI/loader/BarLoader/BarLoader";
import MainContentSettingsEdit from "./edit/MainContentSettingsEdit";
import MainContentSettingsGroup from "./group/MainContentSettingsGroup";
import MainContentSettingsProfile from "./profile/MainContentSettingsProfile";
import MainContentSettingsSignout from "./signout/MainContentSettingsSignout";
import MainContentSettingsWrapper from "./wrapper/MainContentSettingsWrapper";

const MainContentSettings: FC = () => {
  const location = useLocation();
  const {
    isFriendsControllerLoaded,
    isGroupsControllerLoaded,
    isUsersControllerLoaded,
  } = useTypedSelector((s) => s.appReducer);
  const { isUserInstalled } = useTypedSelector((s) => s.profileReducer);

  return (
    <>
      {isUserInstalled &&
      isGroupsControllerLoaded &&
      isFriendsControllerLoaded &&
      isUsersControllerLoaded ? (
        <div className="main-content-settings">
          <div className="main-content-settings__container">
            {(() => {
              if (location.pathname.endsWith(RoutesMainSettingsEnum.EDIT)) {
                return <MainContentSettingsEdit />;
              }
              if (location.pathname.endsWith(RoutesMainSettingsEnum.GROUP)) {
                return <MainContentSettingsGroup />;
              }
              if (location.pathname.endsWith(RoutesMainSettingsEnum.SIGN_OUT)) {
                return <MainContentSettingsSignout />;
              }
              if (location.pathname.endsWith(RoutesMainSettingsEnum.PROFILE)) {
                return <MainContentSettingsProfile />;
              }
              if (location.pathname === RoutesFullMainEnum.MAIN_SETTINGS) {
                return <MainContentSettingsWrapper />;
              }
            })()}
          </div>
        </div>
      ) : (
        <BarLoader blockSize="25px" />
      )}
    </>
  );
};

export default MainContentSettings;
