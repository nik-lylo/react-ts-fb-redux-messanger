import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import SimpleButton from "../../../../UI/buttons/SimpleButton/SimpleButton";

const MainContentSettingsSignout: FC = () => {
  const { user } = useTypedSelector((s) => s.profileReducer);
  const { setSignOut } = useActions();
  const navigate = useNavigate();
  function handleClick() {
    setSignOut(navigate, user.userID);
  }
  return (
    <div className="main-content-settings-signout">
      <div className="main-content-settings-signout__title main-24-title">
        Sign Out
      </div>
      <div className="main-content-settings-signout__flex">
        <div className="main-content-settings-signout__body settings-signout-body">
          <div className="settings-signout-body__image">
            <img
              src={require("../../../../../assets/image/main/settings/signout.png")}
              alt="SignOut"
            />
          </div>
          <div className="settings-signout-body__title">
            To exit, click on the button
          </div>
          <div className="settings-signout-body__subtitle">
            I hope to see you again soon
          </div>
          <div className="settings-signout-body__button" onClick={handleClick}>
            <SimpleButton text="Sign Out" isLoading={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContentSettingsSignout;
