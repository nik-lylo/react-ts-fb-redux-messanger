import React, { FC } from "react";
import { useActions } from "../../../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import { IGroup } from "../../../../../lib/models/IGroup";
import GroupCard from "../../../../UI/cards/GroupCardInfo/GroupCardInfo";
import PopupGroupCreate from "../../../../UI/popup/PopupGroupCreate/PopupGroupCreate";

const MainContentSettingsGroup: FC = () => {
  const { openPopupCreateGroup } = useTypedSelector((s) => s.groupReducer);
  const { groupsObjectCollectionList } = useTypedSelector((s) => s.appReducer);
  const { user } = useTypedSelector((s) => s.profileReducer);
  const { setOpenPopupCreateGroup } = useActions();
  function handleClickOpenPopup(): void {
    setOpenPopupCreateGroup(true);
  }
  console.log(groupsObjectCollectionList);

  return (
    <div className="main-content-settings-group">
      <div className="main-content-settings-group__title main-24-title">
        Group
      </div>
      <div className="main-content-settings-group__create settings-group-create">
        <div
          className="settings-group-create__button"
          onClick={handleClickOpenPopup}
        >
          <button className="icon-cross"></button>
        </div>
        <div className="settings-group-create__text">Create group</div>
      </div>
      <div className="main-content-settings-group__subtitle main-17-title">
        Admin
      </div>

      <div className="main-content-settings-group__admin">
        {user.myGroup.map((groupId: string) => {
          const group: IGroup = groupsObjectCollectionList[groupId];
          if (group.admin === user.userID) {
            return (
              <GroupCard
                key={group.groupId}
                urlAvatar={group.groupAvatar}
                name={group.name}
                members={group.member_amount}
              />
            );
          }
        })}
      </div>
      <div className="main-content-settings-group__subtitle main-17-title">
        Member
      </div>
      <div className="main-content-settings-group__member">
        {user.myGroup.map((groupId: string) => {
          const group: IGroup = groupsObjectCollectionList[groupId];
          if (group.admin !== user.userID) {
            return (
              <GroupCard
                key={group.groupId}
                urlAvatar={group.groupAvatar}
                name={group.name}
                members={group.member_amount}
              />
            );
          }
        })}
      </div>
      <PopupGroupCreate isOpen={openPopupCreateGroup} />
    </div>
  );
};

export default MainContentSettingsGroup;
