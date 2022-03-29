import React, { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  RoutesFullMainEnum,
  RoutesFullMainNotsEnum,
  RoutesMainNotsEnum,
} from "../../../../lib/enum/router/RoutesMainEnum";
import { useTypedSelector } from "../../../../lib/hooks/useTypedSelector";
import BarLoader from "../../../UI/loader/BarLoader/BarLoader";
import EmptyWrapperCustom from "../../../UI/wrapper/EmptyWrapperCustom/EmptyWrapperCustom";
import MainContentNotsInviting from "./inviting/MainContentNotsInviting";

const MainContentNots: FC = () => {
  const location = useLocation();
  const {
    isFriendsControllerLoaded,
    isGroupsControllerLoaded,
    isUsersControllerLoaded,
  } = useTypedSelector((s) => s.appReducer);
  const { isUserInstalled } = useTypedSelector((s) => s.profileReducer);

  return (
    <div className="main-content-nots">
      {isFriendsControllerLoaded &&
      isGroupsControllerLoaded &&
      isUserInstalled &&
      isUsersControllerLoaded ? (
        <div className="main-content-nots__container">
          {(() => {
            if (location.pathname.endsWith(RoutesMainNotsEnum.INVITING)) {
              return <MainContentNotsInviting />;
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
      ) : (
        <BarLoader blockSize="25px" />
      )}
    </div>
  );
};
export default MainContentNots;
