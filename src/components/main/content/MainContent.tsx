import React, { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { RoutesNames } from "../../../lib/enum/router/RoutesEnum";
import { RoutesFullMainEnum } from "../../../lib/enum/router/RoutesMainEnum";
import { useActions } from "../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../lib/hooks/useTypedSelector";
import BarLoader from "../../UI/loader/BarLoader/BarLoader";
import MainContentChat from "./chat/MainContentChat";
import MainContentContact from "./contact/MainContentContact";
import MainContentNots from "./notifications/MainContentNots";
import MainContentSettings from "./settings/MainContentSettings";
import MainWrapper from "./wrapper/MainContentWrapper";

const MainContent: FC = () => {
  const location = useLocation();
  const { isGroupsControllerLoaded, isFriendsControllerLoaded } =
    useTypedSelector((s) => s.appReducer);
  const { isUserInstalled } = useTypedSelector((s) => s.profileReducer);

  return (
    <div className="main__content content">
      {(() => {
        if (location.pathname === RoutesFullMainEnum.MAIN_CONTACT) {
          return <MainContentContact />;
        }
        if (location.pathname === RoutesFullMainEnum.MAIN_CHAT) {
          return <MainContentChat />;
        }
        if (location.pathname.startsWith(RoutesFullMainEnum.MAIN_SETTINGS)) {
          return <MainContentSettings />;
        }
        if (
          location.pathname.startsWith(RoutesFullMainEnum.MAIN_NOTIFICATIONS)
        ) {
          return <MainContentNots />;
        }
        if (location.pathname === RoutesFullMainEnum.MAIN_GROUPS) {
          return <MainContentNots />;
        }
        if (location.pathname === RoutesNames.MAIN) {
          if (
            isUserInstalled &&
            isGroupsControllerLoaded &&
            isFriendsControllerLoaded
          ) {
            return <MainWrapper />;
          } else {
            return <BarLoader blockSize="32px" />;
          }
        }
      })()}
    </div>
  );
};

export default MainContent;
