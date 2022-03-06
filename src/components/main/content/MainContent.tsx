import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import {
  RoutesFullMainEnum,
  RoutesNames,
} from "../../../lib/utilits/RoutesEnum";
import BarLoader from "../../UI/loader/BarLoader/BarLoader";
import MainContentChat from "./chat/MainContentChat";
import MainContactContent from "./contact/MainContactContent";

const MainContent: FC = () => {
  const location = useLocation();
  return (
    <div className="main__content content">
      {(() => {
        switch (location.pathname) {
          case RoutesFullMainEnum.MAIN_CONTACT:
            return <MainContactContent />;
          case RoutesFullMainEnum.MAIN_CHAT:
            return <MainContentChat />;
          case RoutesNames.MAIN:
            return <BarLoader />;
        }
      })()}
    </div>
  );
};

export default MainContent;
