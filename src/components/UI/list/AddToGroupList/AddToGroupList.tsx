import React, { FC } from "react";
import { filterInvitingGroupList } from "../../../../lib/controller/group/filterInvitingGroupList";
import { useTypedSelector } from "../../../../lib/hooks/useTypedSelector";
import { IUser } from "../../../../lib/models/IUser";
import profileReducer from "../../../../store/reducers/profile";
import GroupCardAdd from "../../cards/GroupCardAdd/GroupCardAdd";
import "./addToGroupList.scss";

interface AddToGroupListProps {
  usersArray: IUser[];
  invitedList: any;
  setInvitedList: any;
}

const AddToGroupList: FC<AddToGroupListProps> = ({
  setInvitedList,
  usersArray,
  invitedList,
}) => {
  const { selectedGroupInfo } = useTypedSelector((s) => s.groupReducer);
  const { groupsObjectCollectionList } = useTypedSelector((s) => s.appReducer);
  const { user } = useTypedSelector((s) => s.profileReducer);

  return (
    <div className=" add-to-group-list">
      {usersArray.map((contact: IUser) => {
        const check = filterInvitingGroupList(
          groupsObjectCollectionList,
          user.userID,
          selectedGroupInfo!,
          contact
        );
        if (check) {
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
