import { arrayRemove } from "firebase/firestore";
import React, { FC, useState } from "react";
import { uploadUpdateUser } from "../../../../api/user/uploadUpdateUser";
import { useTypedSelector } from "../../../../lib/hooks/useTypedSelector";
import SimpleButtonLoad from "../../buttons/SimpleButtonLoad/SimpleButtonLoad";
import "./deleteGroupChatCard.scss";

export interface DeleteGroupChatCardProps {
  deletedId: string;
}

const DeleteGroupChatCard: FC<DeleteGroupChatCardProps> = ({ deletedId }) => {
  const { user } = useTypedSelector((s) => s.profileReducer);

  async function handleClickDeleteFromMyGroup() {
    await uploadUpdateUser(user.userID, { myGroup: arrayRemove(deletedId) });
  }

  return (
    <div className="delete-group-chat-card">
      <div className="delete-group-chat-card__text">
        This chat has been deleted by the administrator.
      </div>
      <div className="delete-group-chat-card__buttons">
        <SimpleButtonLoad
          handleClick={handleClickDeleteFromMyGroup}
          type="button"
          fontSize="12px"
          padding="8px 12px"
          isLoad={false}
          text="Delete from list"
        />
      </div>
    </div>
  );
};

export default DeleteGroupChatCard;
