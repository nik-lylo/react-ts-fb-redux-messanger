import React, { FC } from "react";
import { IGroup } from "../../../../lib/models/IGroup";
import AvatarRound from "../../avatar/AvatarRound/AvatarRound";
import "./groupCardInfo.scss";

interface GroupCardInfoProps {
  group: IGroup;
}

const GroupCardInfo: FC<GroupCardInfoProps> = ({ group }) => {
  return (
    <div className="group-card-info">
      <div className="group-card-info__avatar">
        <AvatarRound width="40px" height="40px" urlAvatar={group.groupAvatar} />
      </div>
      <div className="group-card-info__flex">
        <div className="group-card-info__info">
          <div className="group-card-info__name">{group.name}</div>
          <div className="group-card-info__amount">
            {group.member_amount} members
          </div>
        </div>
        <div className="group-card-info__status">{group.private}</div>
      </div>
    </div>
  );
};

export default GroupCardInfo;
