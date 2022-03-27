import React, { FC } from "react";
import { useTypedSelector } from "../../../lib/hooks/useTypedSelector";
import MainSideOutlet from "../../UI/container/MainSideOutlet";

import BarLoader from "../../UI/loader/BarLoader/BarLoader";

const MainSide: FC = () => {
  const { isGroupsControllerLoaded, isFriendsControllerLoaded } =
    useTypedSelector((s) => s.appReducer);
  const { isUserInstalled } = useTypedSelector((s) => s.profileReducer);

  return (
    <div className="main__side-bar side-bar">
      <div className="side-bar__block">
        {isUserInstalled &&
        isGroupsControllerLoaded &&
        isFriendsControllerLoaded ? (
          <MainSideOutlet />
        ) : (
          <BarLoader blockSize="32px" />
        )}
      </div>
    </div>
  );
};
export default MainSide;
