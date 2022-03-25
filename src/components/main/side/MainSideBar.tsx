import React, { FC, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useActions } from "../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../lib/hooks/useTypedSelector";
import { IGroup } from "../../../lib/models/IGroup";

const MainSideBar: FC = () => {
  return (
    <div className="main__side-bar side-bar">
      <div className="side-bar__block">
        {/* {isGroupCollectionListLoaded ? (
          <Outlet />
        ) : (
          <BarLoader blockSize="32px" />
        )} */}
      </div>
    </div>
  );
};
export default MainSideBar;
