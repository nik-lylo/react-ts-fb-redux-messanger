import React, { FC } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  RoutesFullMainEnum,
  RoutesMainEnum,
} from "../../../lib/enum/router/RoutesMainEnum";
import { useActions } from "../../../lib/hooks/useActions";

const MainBar: FC = () => {
  const { setSignOut } = useActions();
  const navigate = useNavigate();
  const location = useLocation();
  function handleClickSignOut() {
    setSignOut(navigate);
  }
  return (
    <div className="bar" id="con">
      <div className="bar__top-block">
        <div className="bar__logo" onClick={handleClickSignOut}>
          <img
            src={require("../../../assets/image/main/bar/logo-mini.png")}
            alt="logo-mini"
          />
        </div>
        <div className="bar__link_top bar-link-top">
          <Link
            to={RoutesMainEnum.GROUPS}
            className={
              location.pathname === RoutesFullMainEnum.MAIN_GROUPS
                ? "bar-link icon-compas-fill link-chosen"
                : "bar-link icon-compas"
            }
          ></Link>
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
          >
            {/* {amountUnreadMessages !== 0 && (
              <div className="bar-link__badge">
                <Counter amount={amountUnreadMessages} />
              </div>
            )} */}
          </Link>
          <Link
            to={RoutesMainEnum.NOTIFICATIONS}
            className={
              location.pathname.startsWith(
                RoutesFullMainEnum.MAIN_NOTIFICATIONS
              )
                ? "bar-link icon-bell-fill link-chosen"
                : "bar-link icon-bell"
            }
          >
            {/* {usersCollectionList[user!.userID] === undefined
              ? null
              : usersCollectionList[user!.userID].invitationToGroup.length !==
                  0 && (
                  <div className="bar-link__badge">
                    <Counter
                      amount={
                        usersCollectionList[user!.userID].invitationToGroup
                          .length
                      }
                    />
                  </div>
                )} */}
          </Link>
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
