import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import "./sideLink.scss";

interface SideLinkProps {
  icon: string;
  text: string;
  to: string;
}

const SideLink: FC<SideLinkProps> = ({ icon, text, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "side-link side-link_selected" : "side-link"
      }
    >
      <div className={`side-link__icon ${icon}`}></div>
      <div className="side-link__text">{text}</div>
    </NavLink>
  );
};

export default SideLink;
