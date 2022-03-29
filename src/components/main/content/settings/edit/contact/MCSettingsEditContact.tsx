import React, { FC } from "react";
import InputSettings from "../../../../../UI/input/InputSettings/InputSettings";
import "../mainContentSettingsEdit.scss";

interface MCSettingsEditContactProps {
  instagram: string;
  setInstagram: any;
  twitter: string;
  setTwitter: any;
}

const MCSettingsEditContact: FC<MCSettingsEditContactProps> = ({
  instagram,
  setInstagram,
  twitter,
  setTwitter,
}) => {
  return (
    <>
      <div className="main-content-settings-edit__subtitle main-17-title">
        Contact
      </div>
      <InputSettings
        text="Instagram"
        type="text"
        value={instagram}
        setValue={setInstagram}
      />
      <InputSettings
        text="Twitter"
        type="text"
        value={twitter}
        setValue={setTwitter}
      />
    </>
  );
};

export default MCSettingsEditContact;
