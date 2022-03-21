import React, { FC } from "react";
import "./emptyWrapperCustom.scss";

interface EmptyWrapperCustomProps {
  image: any;
  title: string;
  subtitle: string;
}

const EmptyWrapperCustom: FC<EmptyWrapperCustomProps> = ({
  image,
  title,
  subtitle,
}) => {
  return (
    <div className="empty-wrapper-custom">
      <div className="empty-wrapper-custom__image">
        <img src={image} alt="Art" />
      </div>
      <div className="empty-wrapper-custom__title">{title}</div>
      <div className="empty-wrapper-custom__subtitle">{subtitle}</div>
    </div>
  );
};

export default EmptyWrapperCustom;
