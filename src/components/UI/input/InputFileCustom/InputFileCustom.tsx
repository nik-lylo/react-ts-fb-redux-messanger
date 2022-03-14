import React, { ChangeEvent, FC } from "react";
import "./inputFileCustom.scss";
interface InputFileCustomProps {
  setAvatar: any;
  value: any;
}
const InputFileCustom: FC<InputFileCustomProps> = ({ setAvatar, value }) => {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setAvatar(e.currentTarget.files![0]);
  }
  return (
    <div
      className={
        value === null || value === undefined
          ? "input-file-custom"
          : "input-file-custom input-file-custom__filled"
      }
    >
      <input
        type="file"
        className="input-file-custom__input"
        onChange={handleChange}
      />
    </div>
  );
};

export default InputFileCustom;
