import React, { FC } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { RoutesNames } from "../../../lib/enum/router/RoutesEnum";
import MainSideWrapper from "../../main/side/wrapper/MainSideWrapper";
import "./mainSideOutlet.scss";

const MainSideOutlet: FC = () => {
  const location = useLocation();
  return (
    <div className="main-side-outlet">
      {location.pathname === RoutesNames.MAIN ? (
        <MainSideWrapper />
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default MainSideOutlet;
