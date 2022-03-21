import React, { FC } from "react";
import AvatarRound from "../../AvatarCustom/AvatarRound/AvatarRound";
import "./groupCard.scss";
interface GroupCardProps {
  urlAvatar: string;
  name: string;
  members: number;
}

const GroupCard: FC<GroupCardProps> = ({ urlAvatar, name, members }) => {
  return (
    <div className="group-card">
      <div className="group-card__avatar">
        <AvatarRound width="40px" height="40px" urlAvatar={urlAvatar} />
      </div>
      <div className="group-card__block">
        <div className="group-card__name">{name}</div>
        <div className="group-card__amount">{members} members</div>
      </div>
    </div>
  );
};

export default GroupCard;
