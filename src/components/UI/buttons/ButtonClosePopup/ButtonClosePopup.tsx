import React, { FC } from "react";
import "./buttonClosePopup.scss";

interface ButtonClosePopupProps {
  handleClose: () => void;
  disabled: boolean;
}

const ButtonClosePopup: FC<ButtonClosePopupProps> = ({
  handleClose,
  disabled,
}) => {
  return (
    <button
      type="button"
      onClick={handleClose}
      className="button-close-popup icon-cross"
      disabled={disabled}
    ></button>
  );
};

export default ButtonClosePopup;
