import React, { FC } from "react";
import { useActions } from "../../../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import PopupGroupCreate from "../../../../UI/popup/PopupGroupCreate/PopupGroupCreate";
import MCSGroupAdminContainer from "./admin_container/MCSGroupAdminContainer";
import MCSGroupMemberContainer from "./member_container/MCSGroupMemberContainer";

const MainContentSettingsGroup: FC = () => {
  const { openPopupCreateGroup } = useTypedSelector((s) => s.groupReducer);
  const { setOpenPopupCreateGroup } = useActions();
  function handleClickOpenPopup(): void {
    setOpenPopupCreateGroup(true);
  }

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
      <MCSGroupAdminContainer />
      <MCSGroupMemberContainer />
      <PopupGroupCreate isOpen={openPopupCreateGroup} />
    </div>
  );
};

export default MainContentSettingsGroup;
