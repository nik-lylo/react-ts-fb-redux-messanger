import React, { ChangeEvent, FC } from "react";
import "./inputFileCustom.scss";
interface InputFileCustomProps {
  setAvatar: any;
}
const InputFileCustom: FC<InputFileCustomProps> = ({ setAvatar }) => {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setAvatar(e.currentTarget.files![0]);
  }
  return (
    <div className="input-file-custom">
      <input
        type="file"
        className="input-file-custom__input"
        onChange={handleChange}
      />
    </div>
  );
};

export default InputFileCustom;
