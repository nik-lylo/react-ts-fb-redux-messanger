import React, { FC } from "react";
import "./infoUserCard.scss";

interface InfoUserCardProps {
  icon: string;
  infoText: string | null;
}

const InfoUserCard: FC<InfoUserCardProps> = ({ icon, infoText }) => {
  return (
    <div className="info-user-card__row">
      <div className={`info-user-card__icon ${icon}`}></div>
      <div className="info-user-card__text">
        {infoText === null ? "nothing is specified" : infoText}
      </div>
    </div>
  );
};

export default InfoUserCard;
