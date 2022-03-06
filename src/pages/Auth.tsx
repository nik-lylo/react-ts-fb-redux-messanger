import React, { FC, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import AuthMain from "../components/auth/main/AuthMain";
import { RoutesNames } from "../lib/utilits/RoutesEnum";
import "../styles/pages/auth/index.scss";

const Auth: FC = () => {
  const location = useLocation();
  return (
    <div className="auth">
      {location.pathname === RoutesNames.AUTH ? <AuthMain /> : <Outlet />}
    </div>
  );
};

export default Auth;
