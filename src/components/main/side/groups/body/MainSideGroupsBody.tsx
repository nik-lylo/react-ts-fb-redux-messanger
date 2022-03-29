import { group } from "console";
import React, { FC } from "react";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import { IGroup } from "../../../../../lib/models/IGroup";
import GroupCardInfo from "../../../../UI/cards/GroupCardInfo/GroupCardInfo";

const MainSideGroupsBody: FC = () => {
  const { groupsObjectCollectionList } = useTypedSelector((s) => s.appReducer);

  return (
    <div className="main-side-groups-body">
      {Object.values(groupsObjectCollectionList).map((item: IGroup) => (
        <GroupCardInfo
          urlAvatar={item.groupAvatar}
          name={item.name}
          members={item.member_amount}
        />
      ))}
    </div>
  );
};

export default MainSideGroupsBody;
{
  /*  */
}
