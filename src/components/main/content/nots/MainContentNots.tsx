import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import {
  RoutesFullMainEnum,
  RoutesMainNotsEnum,
} from "../../../../lib/utilits/RoutesEnum";
import EmptyWrapperCustom from "../../../UI/empty_wrapper/EmptyWrapperCustom/EmptyWrapperCustom";
import NotsInviting from "./inviting/NotsInviting";

const MainContentNots: FC = () => {
  const location = useLocation();
  return (
    <div className="main-content-nots">
      <div className="main-content-nots__container">
        {(() => {
          if (location.pathname.endsWith(RoutesMainNotsEnum.INVITING)) {
            return <NotsInviting />;
          }
          if (location.pathname === RoutesFullMainEnum.MAIN_NOTIFICATIONS) {
            return (
              <EmptyWrapperCustom
                image={require("../../../../assets/image/main/settings/signout.png")}
                title="You can view all notifications and offers"
                subtitle="Select the menu on the left"
              />
            );
          }
        })()}
      </div>
    </div>
  );
};

export default MainContentNots;
