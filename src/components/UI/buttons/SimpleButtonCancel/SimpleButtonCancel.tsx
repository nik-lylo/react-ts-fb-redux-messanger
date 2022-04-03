import React, { FC } from "react";
import "./simpleButtonCancel.scss";

interface SimpleButtonCancelProps {
  text: string;
  handleClick: () => void;
  disabled: boolean;
  fontSize: string;
  padding: string;
}

const SimpleButtonCancel: FC<SimpleButtonCancelProps> = ({
  text,
  handleClick,
  disabled,
  fontSize,
  padding,
}) => {
  return (
    <button
      className="simple-button-cancel"
      type="button"
      onClick={handleClick}
      disabled={disabled}
      style={{ fontSize, padding }}
    >
      {text}
    </button>
  );
};

export default SimpleButtonCancel;
