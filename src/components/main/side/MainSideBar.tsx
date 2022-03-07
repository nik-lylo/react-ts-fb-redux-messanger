import React, { FC } from "react";
import { Outlet } from "react-router-dom";

const MainSideBar: FC = () => {
  return (
    <div className="main__side-bar side-bar">
      <div className="side-bar__block">
        <Outlet />
      </div>
    </div>
  );
};

export default MainSideBar;
