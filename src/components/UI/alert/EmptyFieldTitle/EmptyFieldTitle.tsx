import React, { FC, ReactText } from "react";
import "./emptyFieldTitle.css";

interface EmptyFieldTitleProps {
  children: ReactText;
}

const EmptyFieldTitle: FC<EmptyFieldTitleProps> = ({ children }) => {
  return (
    <div className="title_container">
      <div className="title_text">{children}</div>
    </div>
  );
};

export default EmptyFieldTitle;
