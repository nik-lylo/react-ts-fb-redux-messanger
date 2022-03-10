import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import "./settingsLink.scss";

interface SettingsLinkProps {
  icon: string;
  text: string;
  to: string;
}

const SettingsLink: FC<SettingsLinkProps> = ({ icon, text, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "setting-link setting-link_selected" : "setting-link"
      }
    >
      <div className={`setting-link__icon ${icon}`}></div>
      <div className="setting-link__text">{text}</div>
    </NavLink>
  );
};

export default SettingsLink;
