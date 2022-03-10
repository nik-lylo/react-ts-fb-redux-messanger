import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useActions } from "../../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../../lib/hooks/useTypedSelector";
import "./settingButton.scss";
interface SettingButtonProps {
  icon: string;
  text: string;
  to: string;
}

const SettingButton: FC<SettingButtonProps> = ({ icon, text, to }) => {
  const { selectedSettingsButton } = useTypedSelector((s) => s.settingsReducer);
  const { setSelectedSettingsButton } = useActions();

  function handleClickSelect(text: string) {
    setSelectedSettingsButton(text);
  }

  return (
    <Link
      to={to}
      className={
        selectedSettingsButton === text
          ? "setting-button setting-button_selected"
          : "setting-button"
      }
      onClick={() => handleClickSelect(text)}
    >
      <div className={`setting-button__icon ${icon}`}></div>
      <div className="setting-button__text">{text}</div>
    </Link>
  );
};

export default SettingButton;
