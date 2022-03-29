import React, { ChangeEvent, FC, useState } from "react";
import "../mainContentSettingsEdit.scss";

interface MCSettingsEditHobbyProps {
  hobby: string;
  setHobby: any;
}

const MCSettingsEditHobby: FC<MCSettingsEditHobbyProps> = ({
  hobby,
  setHobby,
}) => {
  const [textareaFocus, setTextareaFocus] = useState<boolean>(false);
  function handleChangeHobby(e: ChangeEvent<HTMLTextAreaElement>) {
    setHobby(e.target.value);
  }

  return (
    <>
      <div className="main-content-settings-edit__subtitle main-17-title">
        Hobby
      </div>
      <div className="settinds-edit-content__textarea settings-edit-textarea">
        <div
          className={
            textareaFocus || hobby !== ""
              ? "settings-edit-textarea__placeholder_focused"
              : "settings-edit-textarea__placeholder"
          }
        >
          Hobby
        </div>
        <textarea
          value={hobby}
          onChange={(e) => handleChangeHobby(e)}
          onFocus={() => setTextareaFocus(true)}
          onBlur={() => setTextareaFocus(false)}
        ></textarea>
      </div>
    </>
  );
};

export default MCSettingsEditHobby;
