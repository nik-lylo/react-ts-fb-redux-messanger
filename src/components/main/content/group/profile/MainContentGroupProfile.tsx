import React, { FC } from "react";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import AvatarRound from "../../../../UI/avatar/AvatarRound/AvatarRound";

import PopupGroupEdit from "../../../../UI/popup/PopupGroupEdit/PopupGroupEdit";
import MCGProfileButtons from "./buttons/MCGProfileButtons";
import MCGProfileNav from "./nav/MCGProfileNav";

const MainContentGroupProfile: FC = () => {
  const { selectedGroupInfo, openPopupEditGroup } = useTypedSelector(
    (s) => s.groupReducer
  );
  const { groupsObjectCollectionList } = useTypedSelector((s) => s.appReducer);

  return (
    <div className="main-content-group-profile">
      <div className="main-content-group-profile__avatar">
        <AvatarRound
          urlAvatar={
            selectedGroupInfo
              ? groupsObjectCollectionList[selectedGroupInfo].groupAvatar
              : ""
          }
          width="96px"
          height="96px"
        />
      </div>
      <div className="main-content-group-profile__name">
        {selectedGroupInfo &&
          groupsObjectCollectionList[selectedGroupInfo].name}
      </div>
      <div className="main-content-group-profile__members">
        {selectedGroupInfo &&
          groupsObjectCollectionList[selectedGroupInfo].member_amount}{" "}
        members
      </div>
      <MCGProfileButtons />
      <div className="main-content-group-profile__nav">
        <MCGProfileNav />
        <PopupGroupEdit isOpen={openPopupEditGroup} />
      </div>
    </div>
  );
};

export default MainContentGroupProfile;
