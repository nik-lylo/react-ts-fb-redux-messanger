import React, { FC, useEffect, useState } from "react";
import { filterGroupByString } from "../../../../../../lib/controller/group/filterGroupByString";
import { useTypedSelector } from "../../../../../../lib/hooks/useTypedSelector";
import { IGroup } from "../../../../../../lib/models/IGroup";
import GroupCard from "../../../../../UI/cards/GroupCard/GroupCard";
import "../mainSideGroupsBody.scss";

interface MSGBodyGlobalContainerProps {
  searchInput: string;
}

const MSGBodyGlobalContainer = React.memo<MSGBodyGlobalContainerProps>(
  ({ searchInput }) => {
    const { groupsObjectCollectionList } = useTypedSelector(
      (s) => s.appReducer
    );
    const { user } = useTypedSelector((s) => s.profileReducer);
    const [globalGroupList, setGlobalGroupList] = useState<IGroup[]>([]);

    useEffect(() => {
      const array: IGroup[] = [];
      Object.values(groupsObjectCollectionList).map((item: IGroup) => {
        const check: boolean = user.myGroup.includes(item.groupId);
        if (check) return;
        array.push(item);
      });
      if (searchInput === "") {
        setGlobalGroupList(array);
        return;
      }
      const arrayFiltered = filterGroupByString(array, searchInput);
      setGlobalGroupList(arrayFiltered);
    }, [user.myGroup, groupsObjectCollectionList, searchInput]);
    return (
      <>
        {globalGroupList.length > 0 && (
          <>
            <div className="main-side-groups-body__title main-17-title">
              Global
            </div>
            {globalGroupList.map((it: IGroup) => {
              return <GroupCard group={it} key={it.groupId} />;
            })}
          </>
        )}
      </>
    );
  },
  (prev: MSGBodyGlobalContainerProps, next: MSGBodyGlobalContainerProps) => {
    return prev.searchInput === next.searchInput;
  }
);

export default MSGBodyGlobalContainer;
