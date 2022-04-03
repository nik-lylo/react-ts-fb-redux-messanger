import React, { FC, useEffect, useState } from "react";
import { useTypedSelector } from "../../../../../../lib/hooks/useTypedSelector";
import { IGroup } from "../../../../../../lib/models/IGroup";
import GroupCard from "../../../../../UI/cards/GroupCard/GroupCard";
import "../mainSideGroupsBody.scss";

const MSGBodyMemberContainer: FC = ({}) => {
  const { groupsObjectCollectionList } = useTypedSelector((s) => s.appReducer);
  const { user } = useTypedSelector((s) => s.profileReducer);

  const [memberGroupList, setMemberGroupList] = useState<IGroup[]>([]);

  useEffect(() => {
    const array: IGroup[] = [];
    user.myGroup.map((it: string) => {
      const group: IGroup = groupsObjectCollectionList[it];
      if (group.admin !== user.userID) {
        array.push(group);
      }
    });
    setMemberGroupList(array);
  }, [user.myGroup, groupsObjectCollectionList]);

  return (
    <>
      {memberGroupList.length > 0 && (
        <>
          <div className="main-side-groups-body__title main-17-title">
            Member
          </div>
          {memberGroupList.map((it: IGroup) => {
            return <GroupCard group={it} key={it.groupId} />;
          })}
        </>
      )}
    </>
  );
};

export default MSGBodyMemberContainer;
