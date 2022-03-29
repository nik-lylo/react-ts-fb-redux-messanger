import React, { FC } from "react";
import InputSettings from "../../../../../UI/input/InputSettings/InputSettings";
import "../mainContentSettingsEdit.scss";

interface MCSettingsEditInfoProps {
  name: string;
  setName: any;
  lastname: string;
  setLastname: any;
  location: string;
  setLocation: any;
}

const MCSettingsEditInfo: FC<MCSettingsEditInfoProps> = ({
  name,
  setName,
  lastname,
  setLastname,
  location,
  setLocation,
}) => {
  return (
    <>
      <InputSettings
        text="First name"
        type={"text"}
        value={name}
        setValue={setName}
      />
      <InputSettings
        text="Last name"
        type="text"
        value={lastname}
        setValue={setLastname}
      />
      <InputSettings
        text="Location"
        type="text"
        value={location}
        setValue={setLocation}
      />
    </>
  );
};

export default MCSettingsEditInfo;
