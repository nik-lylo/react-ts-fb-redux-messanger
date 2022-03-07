import React, { FC } from "react";
import { IUser } from "../../../../lib/models/IUser";
import "./avatarOnline.scss";

interface AvatarOnlineProps {
  contact: IUser;
  width: string;
  height: string;
  hover: boolean;
}

const AvatarOnline: FC<AvatarOnlineProps> = ({
  contact,
  width,
  height,
  hover,
}) => {
  return (
    <div
      style={{ width: width, height: height }}
      className={
        hover
          ? "contact-card__avatar contact-card_hover"
          : "contact-card__avatar"
      }
    >
      {contact.online && <div className="contact-card_indicator"></div>}
      <div className="contact-card__avatar__container">
        <img src={contact.urlPhoto} alt="Avatar" />
      </div>
    </div>
  );
};

export default AvatarOnline;
