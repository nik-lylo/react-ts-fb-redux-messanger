import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useActions } from "../../../lib/hooks/useActions";
import { RoutesAuthEnum } from "../../../lib/utilits/RoutesEnum";

const AuthMain: FC = () => {
  const { setIsOnAuthStateBlocked } = useActions();
  function handleClick() {
    setIsOnAuthStateBlocked(true);
  }
  return (
    <div className="auth__main main-auth auth__center">
      <div className="main-auth__logo">
        <img src={require("../../../assets/image/app/logo.png")} alt="LOGO" />
      </div>
      <div className="main-auth__title auth__title">
        Nik Lylo invites you
        <br />
        to join Openland
      </div>
      <div className="main-auth__subtitle auth__subtitle">
        Modern social network
        <br />
        built for you, not advertisers
      </div>
      <div className="main-auth__registr auth-registr">
        <Link
          to={RoutesAuthEnum.SIGN_IN}
          className=" auth-registr__link auth-registr__link_blue auth__link"
        >
          Sign In
        </Link>
        <Link
          to={RoutesAuthEnum.SIGN_UP}
          className="auth-registr__link auth__link"
          onClick={handleClick}
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default AuthMain;
