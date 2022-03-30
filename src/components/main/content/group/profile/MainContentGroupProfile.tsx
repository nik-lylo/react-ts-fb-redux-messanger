import React, { FC, useState } from "react";
import { useActions } from "../../../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import AvatarRound from "../../../../UI/avatar/AvatarRound/AvatarRound";
import IconButton from "../../../../UI/buttons/IconButton/IconButton";
import SimpleButton from "../../../../UI/buttons/SimpleButton/SimpleButton";
import PopupGroupEdit from "../../../../UI/popup/PopupGroupEdit/PopupGroupEdit";

const MainContentGroupProfile: FC = () => {
  const { selectedGroupInfo, openPopupEditGroup } = useTypedSelector(
    (s) => s.groupReducer
  );
  const { groupsObjectCollectionList } = useTypedSelector((s) => s.appReducer);
  const { setOpenPopupEditGroup } = useActions();

  function handleClickOpen() {
    setOpenPopupEditGroup(true);
  }

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
      <SimpleButton text="Viev group" isLoading={false} />
      <div className="main-content-group-profile__nav">
        <IconButton
          icon="icon-pencil"
          text="Edit group"
          handleClick={handleClickOpen}
        />
        <IconButton icon="icon-signout" text="Leave group" handleClick={null} />
        <PopupGroupEdit isOpen={openPopupEditGroup} />
      </div>
    </div>
  );
};

export default MainContentGroupProfile;
