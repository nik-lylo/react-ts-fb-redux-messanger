import React, { FC } from "react";
import { useActions } from "../../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../../lib/hooks/useTypedSelector";
import { IGroup } from "../../../../lib/models/IGroup";
import AvatarRound from "../../avatar/AvatarRound/AvatarRound";

import "./groupCard.scss";
interface GroupCardProps {
  group: IGroup;
}

const GroupCard: FC<GroupCardProps> = ({ group }) => {
  const { selectedGroupInfo } = useTypedSelector((s) => s.groupReducer);
  const { setSelectedGroupInfo } = useActions();

  function handleClick() {
    setSelectedGroupInfo(group.groupId);
  }

  return (
    <div
      className={
        group.groupId === selectedGroupInfo
          ? "group-card group-card_selected"
          : "group-card"
      }
      onClick={handleClick}
    >
      <div className="group-card__avatar">
        <AvatarRound width="40px" height="40px" urlAvatar={group.groupAvatar} />
      </div>
      <div className="group-card__flex">
        <div className="group-card__info">
          <div className="group-card__name">{group.name}</div>
          <div className="group-card__amount">
            {group.member_amount} members
          </div>
        </div>
        <div className="group-card__status">{group.private}</div>
      </div>
    </div>
  );
};

export default GroupCard;
