import React, { FC } from "react";
import { IUser } from "../../../../lib/models/IUser";
import GroupCardAdd from "../../cards/GroupCardAdd/GroupCardAdd";
import "./addToGroupList.scss";

interface AddToGroupListProps {
  usersArray: IUser[];
  myId: string;
  invitedList: any;
  setInvitedList: any;
}

const AddToGroupList: FC<AddToGroupListProps> = ({
  setInvitedList,
  usersArray,
  invitedList,
  myId,
}) => {
  return (
    <div className=" add-to-group-list">
      {usersArray.map((contact: IUser) => {
        if (contact.userID === myId) {
          return;
        }
        return (
          <GroupCardAdd
            key={contact.userID}
            contact={contact}
            invitedContacts={invitedList}
            setInvitedContacts={setInvitedList}
          />
        );
      })}
    </div>
  );
};

export default AddToGroupList;
