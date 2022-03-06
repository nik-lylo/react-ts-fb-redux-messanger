import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../lib/hooks/useTypedSelector";
import { RoutesNames } from "../lib/utilits/RoutesEnum";
import "../styles/pages/launcher/index.scss";

const Launcher: FC = () => {
  const { isAuth } = useTypedSelector((s) => s.authReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate(RoutesNames.MAIN);
    }
    if (isAuth === false) {
      navigate(RoutesNames.AUTH);
    }
  }, [isAuth]);

  return (
    <div className="launcher">
      <img src={require("../assets/image/app/logo.png")} alt="" />
    </div>
  );
};

export default Launcher;
