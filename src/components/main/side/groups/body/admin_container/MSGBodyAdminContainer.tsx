import React, { FC, useEffect, useState } from "react";
import { filterGroupByString } from "../../../../../../lib/controller/group/filterGroupByString";
import { useActions } from "../../../../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../../../../lib/hooks/useTypedSelector";
import { IGroup } from "../../../../../../lib/models/IGroup";
import GroupCard from "../../../../../UI/cards/GroupCard/GroupCard";

import "../mainSideGroupsBody.scss";

interface MSGBodyAdminContainerProps {
  searchInput: string;
}

const MSGBodyAdminContainer: FC<MSGBodyAdminContainerProps> = ({
  searchInput,
}) => {
  const { groupsObjectCollectionList } = useTypedSelector((s) => s.appReducer);
  const { user } = useTypedSelector((s) => s.profileReducer);
  const { setGroupSearchLoader } = useActions();
  const [adminGroupList, setAdminGroupList] = useState<IGroup[]>([]);

  useEffect(() => {
    const array: IGroup[] = [];
    user.myGroup.map((it: string) => {
      const group: IGroup = groupsObjectCollectionList[it];
      if (group.admin === user.userID) {
        array.push(group);
      }
    });
    if (searchInput === "") {
      setAdminGroupList(array);
      setGroupSearchLoader(false);
      return;
    }
    const arrayFiltered = filterGroupByString(array, searchInput);
    setAdminGroupList(arrayFiltered);
  }, [user.myGroup, groupsObjectCollectionList, searchInput]);

  return (
    <>
      {adminGroupList.length > 0 && (
        <>
          <div className="main-side-groups-body__title main-17-title">
            Admin
          </div>
          {adminGroupList.map((it: IGroup) => {
            return <GroupCard group={it} key={it.groupId} />;
          })}
        </>
      )}
    </>
  );
};

export default MSGBodyAdminContainer;
