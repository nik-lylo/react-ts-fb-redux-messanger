import React, { FC } from "react";
import "./simpleButton.scss";
interface SimpleButtonProps {
  text: string;
  isLoading: boolean;
}
const SimpleButton: FC<SimpleButtonProps> = ({ text, isLoading }) => {
  return (
    <button type="submit" className="simple-button" disabled={isLoading}>
      {text}
    </button>
  );
};

export default SimpleButton;
