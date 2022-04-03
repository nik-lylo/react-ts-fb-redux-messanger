import React, { FC, useEffect, useState } from "react";
import { useTypedSelector } from "../../../../../../lib/hooks/useTypedSelector";
import { IGroup } from "../../../../../../lib/models/IGroup";
import DeleteGroupCardInfo from "../../../../../UI/cards/DeleteGroupCardInfo/DeleteGroupCardInfo";
import GroupCardInfo from "../../../../../UI/cards/GroupCardInfo/GroupCardInfo";
import "../mainContentSettingsGroup.scss";

const MCSGroupMemberContainer: FC = () => {
  const { groupsObjectCollectionList } = useTypedSelector((s) => s.appReducer);
  const { user } = useTypedSelector((s) => s.profileReducer);

  const [memberGroupList, setMemberGroupList] = useState<IGroup[]>([]);
  const [deletedGroupList, setDeletedGroupList] = useState<string[]>([]);

  useEffect(() => {
    const array: IGroup[] = [];
    const deletedArray: string[] = [];
    user.myGroup.map((it: string) => {
      const group: IGroup = groupsObjectCollectionList[it];
      if (group === undefined) {
        deletedArray.push(it);
        return;
      }
      if (group.admin !== user.userID) {
        array.push(group);
      }
    });
    setMemberGroupList(array);
    setDeletedGroupList(deletedArray);
  }, [user.myGroup, groupsObjectCollectionList]);

  return (
    <>
      {memberGroupList.length > 0 && (
        <>
          <div className="main-content-settings-group__subtitle main-17-title">
            Member
          </div>
          <div className="main-content-settings-group__member">
            {memberGroupList.map((it: IGroup) => {
              return <GroupCardInfo group={it} key={it.groupId} />;
            })}
          </div>
        </>
      )}
      <>
        {deletedGroupList.length > 0 &&
          deletedGroupList.map((it: string) => {
            return <DeleteGroupCardInfo deletedId={it} key={it} />;
          })}
      </>
    </>
  );
};

export default MCSGroupMemberContainer;
