import React, { FC } from "react";
import { useActions } from "../../../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import PopupGroupCreate from "../../../../UI/popup/PopupGroupCreate/PopupGroupCreate";

const SettingsGroup: FC = () => {
  const { openPopupCreateGroup } = useTypedSelector((s) => s.groupReducer);
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
      <div className="settings-group__subtitle settings-subtitle">Member</div>
      <PopupGroupCreate isOpen={openPopupCreateGroup} />
    </div>
  );
};

export default SettingsGroup;
