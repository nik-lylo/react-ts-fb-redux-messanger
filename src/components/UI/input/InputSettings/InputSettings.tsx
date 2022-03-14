import React, { FC, useState } from "react";
import { useActions } from "../../../../lib/hooks/useActions";

import "./inputSettings.scss";

interface InputSettingsProps {
  inputType?: "date" | "year";
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
  inputType,
}) => {
  const [focus, setFocus] = useState<boolean>(false);
  const { setBirthdayError } = useActions();
  function handleBlur() {
    if (inputType === "year") {
      if (Number(value) < 1950 && value !== "") {
        setBirthdayError("Рік народження не може бути менше 1950");
        setTimeout(() => {
          setBirthdayError(null);
        }, 3000);
        setValue("");
        return;
      }
    }
    setFocus(false);
  }

  function handleChange(e: any) {
    if (inputType === "date") {
      const checking = `${e.target.value}`;
      if (Number(checking) > 31) {
        setBirthdayError("Не може бути дата народження більше 31");
        setTimeout(() => {
          setBirthdayError(null);
        }, 3000);
        return;
      } else {
        setValue(e.target.value);
        return;
      }
    }
    if (inputType === "year") {
      const checking = `${e.target.value}`;
      if (Number(checking) > 2010) {
        setBirthdayError("Не може бути рік народження більше 2010");
        setTimeout(() => {
          setBirthdayError(null);
        }, 3000);
        return;
      } else {
        setValue(e.target.value);
        return;
      }
    }
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
        onBlur={handleBlur}
      />
    </div>
  );
};

export default InputSettings;
