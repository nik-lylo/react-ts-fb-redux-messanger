import React, { FC } from "react";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import { IGroup } from "../../../../../lib/models/IGroup";
import GroupCard from "../../../../UI/cards/GroupCardInfo/GroupCard";

const MainSideGroupsBody: FC = () => {
  const { groupsObjectCollectionList } = useTypedSelector((s) => s.appReducer);
  const { user } = useTypedSelector((s) => s.profileReducer);

  return (
    <div className="main-side-groups-body">
      <div className="main-side-groups-body__title main-17-title">Admin</div>
      {user.myGroup.map((it: string) => {
        const group: IGroup = groupsObjectCollectionList[it];
        if (group.admin === user.userID) {
          return <GroupCard group={group} key={group.groupId} />;
        }
      })}
      <div className="main-side-groups-body__title main-17-title">Member</div>
      {user.myGroup.map((it: string) => {
        const group: IGroup = groupsObjectCollectionList[it];
        if (group.admin !== user.userID) {
          return <GroupCard group={group} key={group.groupId} />;
        }
      })}
      <div className="main-side-groups-body__title main-17-title">Global</div>
      {Object.values(groupsObjectCollectionList).map((item: IGroup) => {
        const check: boolean = user.myGroup.includes(item.groupId);
        console.log(check);
        if (check) return;
        return <GroupCard group={item} key={item.groupId} />;
      })}
    </div>
  );
};

export default MainSideGroupsBody;
{
  /*  */
}
