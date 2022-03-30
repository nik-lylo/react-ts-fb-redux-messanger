import React, { ChangeEvent, FC, useState } from "react";
import "./textareaSettings.scss";

interface TextareaSettingsProps {
  text: string;
  value: string;
  setValue: any;
}

const TextareaSettings: FC<TextareaSettingsProps> = ({
  text,
  value,
  setValue,
}) => {
  const [textareaFocus, setTextareaFocus] = useState<boolean>(false);
  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setValue(e.target.value);
  }

  return (
    <div className="textarea-settings">
      <div
        className={
          textareaFocus || value !== ""
            ? "settings-edit-textarea__placeholder_focused"
            : "settings-edit-textarea__placeholder"
        }
      >
        {text}
      </div>
      <textarea
        value={value}
        onChange={handleChange}
        onFocus={() => setTextareaFocus(true)}
        onBlur={() => setTextareaFocus(false)}
      ></textarea>
    </div>
  );
};

export default TextareaSettings;
