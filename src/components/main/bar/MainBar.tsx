import React, { FC } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useActions } from "../../../lib/hooks/useActions";
import {
  RoutesFullMainEnum,
  RoutesMainEnum,
} from "../../../lib/utilits/RoutesEnum";

const MainBar: FC = () => {
  const { setSignOutUser } = useActions();
  const location = useLocation();
  const navigate = useNavigate();
  function handleClick() {
    setSignOutUser(navigate);
  }
  return (
    <div className="bar" id="con">
      <div className="bar__top-block">
        <div className="bar__logo" onClick={handleClick}>
          <img
            src={require("../../../assets/image/main/bar/logo-mini.png")}
            alt="logo-mini"
          />
        </div>
        <div className="bar__link_top bar-link-top">
          <Link to={"#"} className="bar-link icon-compas"></Link>
          <Link
            to={RoutesMainEnum.CONTACT}
            className={
              location.pathname === RoutesFullMainEnum.MAIN_CONTACT
                ? "bar-link icon-body-fill link-chosen"
                : "bar-link icon-body"
            }
          ></Link>
          <Link
            to={RoutesMainEnum.CHAT}
            className={
              location.pathname === RoutesFullMainEnum.MAIN_CHAT
                ? "bar-link  icon-message-fill link-chosen"
                : "bar-link icon-message-mini"
            }
          ></Link>
          <Link to={"#"} className="bar-link icon-bell"></Link>
          <Link
            to={RoutesMainEnum.SETTINGS}
            className={
              location.pathname.startsWith(RoutesFullMainEnum.MAIN_SETTINGS)
                ? "bar-link icon-gear-fill link-chosen"
                : "bar-link icon-gear"
            }
          ></Link>
        </div>
      </div>
      <div className="bar__link_bottom bar-link-bottom">
        <Link to={"#"} className="bar-link bar-link_board icon-board"></Link>
      </div>
    </div>
  );
};

export default MainBar;
