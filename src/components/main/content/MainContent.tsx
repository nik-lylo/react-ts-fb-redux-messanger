import React, { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useActions } from "../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../lib/hooks/useTypedSelector";
import { IUsersObject } from "../../../lib/models/ICommon";
import { IUser } from "../../../lib/models/IUser";
import {
  RoutesFullMainEnum,
  RoutesNames,
} from "../../../lib/utilits/RoutesEnum";
import BarLoader from "../../UI/loader/BarLoader/BarLoader";
import MainContentChat from "./chat/MainContentChat";
import MainContactContent from "./contact/MainContactContent";
import MainContentNots from "./nots/MainContentNots";
import MainContentSettings from "./settings/MainContentSettings";

const MainContent: FC = () => {
  const location = useLocation();

  return (
    <div className="main__content content">
      {(() => {
        if (location.pathname === RoutesFullMainEnum.MAIN_CONTACT) {
          return <MainContactContent />;
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

        if (location.pathname === RoutesNames.MAIN) {
          return <BarLoader blockSize="32px" />;
        }
      })()}
    </div>
  );
};

export default MainContent;
