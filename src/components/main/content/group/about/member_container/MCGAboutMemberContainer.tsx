import React, { FC } from "react";
import { useTypedSelector } from "../../../../../../lib/hooks/useTypedSelector";
import { IGroupMember } from "../../../../../../lib/models/IGroup";
import { IUser } from "../../../../../../lib/models/IUser";
import ContactCardInfo from "../../../../../UI/cards/ContactCardInfo/ContactCardInfo";
import "../mainContentGroupAbout.scss";

const MCGAboutMemberContainer: FC = () => {
  const { groupsObjectCollectionList, usersObjectCollectionList } =
    useTypedSelector((s) => s.appReducer);
  const { selectedGroupInfo } = useTypedSelector((s) => s.groupReducer);

  return (
    <div className="group-about-member-container__users">
      {selectedGroupInfo &&
        groupsObjectCollectionList[selectedGroupInfo].members.map(
          (item: IGroupMember) => {
            const user: IUser = usersObjectCollectionList[item.userId];
            return <ContactCardInfo contact={user} key={user.userID} />;
          }
        )}
    </div>
  );
};

export default MCGAboutMemberContainer;
