import React, { FC, useState } from "react";
import { useActions } from "../../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../../lib/hooks/useTypedSelector";
import { IGroup } from "../../../../lib/models/IGroup";
import AvatarRound from "../../avatar/AvatarRound/AvatarRound";
import "./groupCardInvitation.scss";

interface GroupCardInvitationProps {
  group: IGroup;
  snackBarOpen: (
    text: string,
    status: "success" | "error" | "info" | "warning"
  ) => void;
}

const GroupCardInvitation: FC<GroupCardInvitationProps> = ({
  group,
  snackBarOpen,
}) => {
  const [deleteCard, setDeleteCard] = useState<boolean>(false);
  const { setAcceptUserToGroup, setRejectUserToGroup } = useActions();
  const { user } = useTypedSelector((s) => s.profileReducer);

  function handleCloseCard() {
    setDeleteCard(true);
  }

  function handleClickReject() {
    setRejectUserToGroup(user, group, handleCloseCard, snackBarOpen);
  }

  function handleClickAccept() {
    setAcceptUserToGroup(user, group, handleCloseCard, snackBarOpen);
  }
  return (
    <div
      className={
        deleteCard
          ? "group-card-invitation group-card-invitation_delete"
          : "group-card-invitation"
      }
    >
      <div className="group-card-invitation__info">
        <div className="group-card-invitation__avatar">
          <AvatarRound
            width="40px"
            height="40px"
            urlAvatar={group.groupAvatar}
          />
        </div>
        <div className="group-card-invitation__block">
          <div className="group-card-invitation__name">{group.name}</div>
          <div className="group-card-invitation__amount">
            {group.member_amount} members
          </div>
        </div>
      </div>
      <div className="group-card-invitation__buttons">
        <button
          className="group-card-invitation__btn group-card-invitation__accept"
          onClick={handleClickAccept}
        >
          Accept
        </button>
        <button
          onClick={handleClickReject}
          className="group-card-invitation__btn group-card-invitation__reject"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default GroupCardInvitation;
