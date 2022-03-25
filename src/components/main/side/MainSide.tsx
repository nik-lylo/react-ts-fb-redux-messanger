import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import { useTypedSelector } from "../../../lib/hooks/useTypedSelector";
import MainSideOutlet from "../../UI/container/MainSideOutlet";

import BarLoader from "../../UI/loader/BarLoader/BarLoader";

interface MainSideProps {
  isUserInstalled: boolean;
}

const MainSide: FC<MainSideProps> = ({ isUserInstalled }) => {
  const { isGroupsControllerLoaded, isFriendsControllerLoaded } =
    useTypedSelector((s) => s.appReducer);

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
