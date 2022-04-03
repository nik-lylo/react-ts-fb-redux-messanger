import { arrayRemove } from "firebase/firestore";
import React, { FC } from "react";
import { uploadUpdateUser } from "../../../../api/user/uploadUpdateUser";
import { useTypedSelector } from "../../../../lib/hooks/useTypedSelector";
import SimpleButtonLoad from "../../buttons/SimpleButtonLoad/SimpleButtonLoad";

import "./deleteGroupCardInfo.scss";
export interface DeleteGroupCardInfoProps {
  deletedId: string;
}

const DeleteGroupCardInfo: FC<DeleteGroupCardInfoProps> = ({ deletedId }) => {
  const { user } = useTypedSelector((s) => s.profileReducer);

  async function handleClickDeleteFromMyGroup() {
    await uploadUpdateUser(user.userID, { myGroup: arrayRemove(deletedId) });
  }

  return (
    <div className="delete-group-card-info">
      <div className="delete-group-card-info__text">
        This chat has been deleted by the administrator.
      </div>
      <div className="delete-group-card-info__buttons">
        <SimpleButtonLoad
          handleClick={handleClickDeleteFromMyGroup}
          type="button"
          fontSize="12px"
          padding="6px 10px"
          isLoad={false}
          text="Delete from list"
        />
      </div>
    </div>
  );
};

export default DeleteGroupCardInfo;
