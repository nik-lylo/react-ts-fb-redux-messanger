import React, { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useActions } from "../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../lib/hooks/useTypedSelector";

const MainContent: FC = () => {
  const location = useLocation();

  return (
    <div className="main__content content">
      {/* {(() => {
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
        if (location.pathname === RoutesFullMainEnum.MAIN_GROUPS) {
          return <MainContentGroups />;
        }
        if (location.pathname === RoutesNames.MAIN) {
          if (isGroupCollectionListLoaded) {
            return <BarLoader blockSize="32px" />;
          } else {
            return <BarLoader blockSize="32px" />;
          }
        }
      })()} */}
    </div>
  );
};

export default MainContent;
