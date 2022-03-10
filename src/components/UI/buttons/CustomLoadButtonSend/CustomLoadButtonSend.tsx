import React, { FC } from "react";
import BarLoader from "../../loader/BarLoader/BarLoader";
import "./customLoadButtonSend.scss";

interface CustomLoadButtonSendProps {
  flag: boolean;
}

const CustomLoadButtonSend: FC<CustomLoadButtonSendProps> = ({ flag }) => {
  return (
    <button
      className={
        flag
          ? "custom-load-button-send"
          : "custom-load-button-send icon-send-mail"
      }
      type="submit"
    >
      {flag && <BarLoader />}
    </button>
  );
};

export default CustomLoadButtonSend;
