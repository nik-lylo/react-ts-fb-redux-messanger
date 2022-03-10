import React, { FC } from "react";
import { Outlet, useLocation } from "react-router-dom";
import {
  RoutesFullMainEnum,
  RoutesNames,
} from "../../../lib/utilits/RoutesEnum";
import BarLoader from "../../UI/loader/BarLoader/BarLoader";
import MainContentChat from "./chat/MainContentChat";
import MainContactContent from "./contact/MainContactContent";
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
        if (location.pathname === RoutesNames.MAIN) {
          return <BarLoader />;
        }
      })()}
    </div>
  );
};

export default MainContent;
