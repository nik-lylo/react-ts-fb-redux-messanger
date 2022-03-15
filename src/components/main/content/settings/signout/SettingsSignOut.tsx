import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import SimpleButton from "../../../../UI/buttons/SimpleButton/SimpleButton";

const SettingsSignOut: FC = () => {
  const { setSignOutUser, setUploadUserOnline } = useActions();
  const { user } = useTypedSelector((s) => s.profileReducer);
  const navigate = useNavigate();

  function handleClick() {
    setSignOutUser(navigate, user.userID);
  }
  return (
    <div className="settings-signout">
      <div className="settings-signout__title settings-title">Sign Out</div>
      <div className="settings-signout__flex">
        <div className="settings-signout__body settings-signout-body">
          <div className="settings-subtitle-body__image">
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

export default SettingsSignOut;
