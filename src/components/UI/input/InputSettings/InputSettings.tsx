import React, { ChangeEvent, FC, useState } from "react";
import { setConstantValue } from "typescript";

import "./inputSettings.scss";

interface InputSettingsProps {
  text: string;
  type: string;
  setValue: any;
  value: string;
}

const InputSettings: FC<InputSettingsProps> = ({
  text,
  type,
  setValue,
  value,
}) => {
  const [focus, setFocus] = useState<boolean>(false);
  function handleChange(e: any) {
    setValue(e.target.value);
  }
  return (
    <div className="input-settings">
      <div
        className={
          focus || value !== ""
            ? "input-settings__placeholder_focused"
            : "input-settings__placeholder"
        }
      >
        {text}
      </div>
      <input
        value={value}
        onChange={handleChange}
        className="input-settings__input"
        type={type}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </div>
  );
};

export default InputSettings;
