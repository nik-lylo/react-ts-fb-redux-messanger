import React, { FC } from "react";
import "./simpleButton.scss";
interface SimpleButtonProps {
  text: string;
  type?: any;
  isLoading: boolean;
}
const SimpleButton: FC<SimpleButtonProps> = ({ text, isLoading, type }) => {
  return (
    <button type={type} className="simple-button" disabled={isLoading}>
      {text}
    </button>
  );
};

export default SimpleButton;
