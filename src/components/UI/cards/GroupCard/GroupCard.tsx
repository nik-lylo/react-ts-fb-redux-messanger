import React, { FC } from "react";
import AvatarRound from "../../AvatarCustom/AvatarRound/AvatarRound";
import "./groupCard.scss";
interface GroupCardProps {
  urlAvatar: string;
}

const GroupCard: FC<GroupCardProps> = ({ urlAvatar }) => {
  return (
    <div className="group-card">
      <div className="group-card__avatar">
        <AvatarRound width="40px" height="40px" urlAvatar={urlAvatar} />
      </div>
      <div className="group-card__block">
        <div className="group-card__name">Startup productivity</div>
        <div className="group-card__amount">512 members</div>
      </div>
    </div>
  );
};

export default GroupCard;
