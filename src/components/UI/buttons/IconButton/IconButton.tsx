import React, { FC } from "react";
import "./iconButton.scss";

interface IconButtonProps {
  icon: string;
  text: string;
  handleClick: any;
}

const IconButton: FC<IconButtonProps> = ({ icon, text, handleClick }) => {
  return (
    <button className="icon-button" onClick={handleClick}>
      <div className={`${icon} icon-button__icon`}></div>
      <div className="icon-button__text">{text}</div>
    </button>
  );
};

export default IconButton;
