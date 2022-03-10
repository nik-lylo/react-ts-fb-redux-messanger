import React, { FC } from "react";
import "./emptyMessageWrapper.scss";

interface EmptyMessagePinProps {
  children: string;
  handleClick: (children: string) => void;
}

const EmptyMessagePin: FC<EmptyMessagePinProps> = ({
  children,
  handleClick,
}) => {
  return (
    <div
      className="empty-message-wrapper__item"
      onClick={() => handleClick(children)}
    >
      {children}
    </div>
  );
};

export default EmptyMessagePin;
