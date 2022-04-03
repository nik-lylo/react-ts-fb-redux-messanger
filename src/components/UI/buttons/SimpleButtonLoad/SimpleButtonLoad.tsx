import React, { FC } from "react";
import BarLoader from "../../loader/BarLoader/BarLoader";
import "./simpleButtonLoad.scss";

interface SimpleButtonLoadProps {
  padding: string;
  fontSize: string;
  type: any;
  isLoad: boolean;
  text: string;
  handleClick?: () => void;
}

const SimpleButtonLoad: FC<SimpleButtonLoadProps> = ({
  padding,
  fontSize,
  type,
  isLoad,
  text,
  handleClick = null,
}) => {
  return (
    <button
      onClick={() => {
        handleClick && handleClick();
      }}
      type={type}
      disabled={isLoad}
      className={
        isLoad
          ? "simple-button-load simple-button-load_active"
          : "simple-button-load"
      }
      style={{ fontSize, padding }}
    >
      <div className="simple-button-load__text">{text}</div>{" "}
      {isLoad && (
        <div className="simple-button-load__loader">
          <BarLoader blockSize={fontSize} />
        </div>
      )}
    </button>
  );
};

export default SimpleButtonLoad;
