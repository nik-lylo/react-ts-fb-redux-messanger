import React, { FC } from "react";
import "./simpleButton.scss";
interface SimpleButtonProps {
  text: string;
  type?: any;
  isLoading: boolean;
  handleClick?: () => void;
}
const SimpleButton: FC<SimpleButtonProps> = ({
  handleClick = null,
  text,
  isLoading,
  type,
}) => {
  return (
    <button
      type={type}
      className="simple-button"
      disabled={isLoading}
      onClick={() => {
        handleClick && handleClick();
      }}
    >
      {text}
    </button>
  );
};

export default SimpleButton;
