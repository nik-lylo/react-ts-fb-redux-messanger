import React, { ChangeEvent, FC, useState } from "react";
import TextareaSettings from "../../../../../UI/textarea/TextareaSettings";
import "../mainContentSettingsEdit.scss";

interface MCSettingsEditHobbyProps {
  hobby: string;
  setHobby: any;
}

const MCSettingsEditHobby: FC<MCSettingsEditHobbyProps> = ({
  hobby,
  setHobby,
}) => {
  return (
    <>
      <div className="main-content-settings-edit__subtitle main-17-title">
        Hobby
      </div>
      <TextareaSettings text="Hobby" value={hobby} setValue={setHobby} />
    </>
  );
};

export default MCSettingsEditHobby;
