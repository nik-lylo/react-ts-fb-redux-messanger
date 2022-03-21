import React, { FC } from "react";
import { useActions } from "../../../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import GroupCard from "../../../../UI/cards/GroupCard/GroupCard";
import PopupGroupCreate from "../../../../UI/popup/PopupGroupCreate/PopupGroupCreate";

const SettingsGroup: FC = () => {
  const { openPopupCreateGroup, groupCollectionList } = useTypedSelector(
    (s) => s.groupReducer
  );
  const { usersCollectionList } = useTypedSelector((s) => s.contactReducer);
  const { user } = useTypedSelector((s) => s.profileReducer);
  const { setOpenPopupCreateGroup } = useActions();
  function handleClickOpenPopup(): void {
    setOpenPopupCreateGroup(true);
  }

  return (
    <div className="settings-group">
      <div className="settings-group__title settings-title">Group</div>
      <div className="settings-group__create settings-group-create">
        <div
          className="settings-group-create__button"
          onClick={handleClickOpenPopup}
        >
          <button className="icon-cross"></button>
        </div>
        <div className="settings-group-create__text">Create group</div>
      </div>
      <div className="settings-group__subtitle settings-subtitle">Admin</div>
      <div className="settings-group__admin">
        {usersCollectionList[user.userID].myGroup.length !== 0 &&
          usersCollectionList[user.userID].myGroup.map((item) => {
            if (groupCollectionList[item].admin === user.userID) {
              const group = groupCollectionList[item];
              return (
                <GroupCard
                  urlAvatar={group.groupAvatar}
                  name={group.name}
                  members={group.member_amount}
                  key={group.groupId}
                />
              );
            }
          })}
      </div>
      <div className="settings-group__subtitle settings-subtitle">Member</div>
      <div className="settings-group__member">
        {usersCollectionList[user.userID].myGroup.length !== 0 &&
          usersCollectionList[user.userID].myGroup.map((item) => {
            if (groupCollectionList[item].admin !== user.userID) {
              const group = groupCollectionList[item];
              return (
                <GroupCard
                  urlAvatar={group.groupAvatar}
                  name={group.name}
                  members={group.member_amount}
                  key={group.groupId}
                />
              );
            }
          })}
      </div>

      <PopupGroupCreate isOpen={openPopupCreateGroup} />
    </div>
  );
};

export default SettingsGroup;
