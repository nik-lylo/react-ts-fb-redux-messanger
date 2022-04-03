import React, { FC, useEffect, useState } from "react";
import { useTypedSelector } from "../../../../../../lib/hooks/useTypedSelector";
import { IGroup } from "../../../../../../lib/models/IGroup";
import GroupCardInfo from "../../../../../UI/cards/GroupCardInfo/GroupCardInfo";
import "../mainContentSettingsGroup.scss";

const MCSGroupAdminContainer: FC = () => {
  const { groupsObjectCollectionList } = useTypedSelector((s) => s.appReducer);
  const { user } = useTypedSelector((s) => s.profileReducer);

  const [adminGroupList, setAdminGroupList] = useState<IGroup[]>([]);

  useEffect(() => {
    const array: IGroup[] = [];
    user.myGroup.map((it: string) => {
      const group: IGroup = groupsObjectCollectionList[it];

      if (group === undefined) return;
      if (group.admin === user.userID) {
        array.push(group);
      }
    });
    setAdminGroupList(array);
  }, [user.myGroup, groupsObjectCollectionList]);

  return (
    <>
      {adminGroupList.length > 0 && (
        <>
          <div className="main-content-settings-group__subtitle main-17-title">
            Admin
          </div>
          <div className="main-content-settings-group__admin">
            {adminGroupList.map((it: IGroup) => {
              return <GroupCardInfo group={it} key={it.groupId} />;
            })}
          </div>
        </>
      )}
    </>
  );
};

export default MCSGroupAdminContainer;
