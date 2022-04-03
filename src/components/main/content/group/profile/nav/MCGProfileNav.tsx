import React, { FC } from "react";
import { useActions } from "../../../../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../../../../lib/hooks/useTypedSelector";
import IconButton from "../../../../../UI/buttons/IconButton/IconButton";

const MCGProfileNav: FC = () => {
  const { roleInGroup, selectedGroupInfo } = useTypedSelector(
    (s) => s.groupReducer
  );
  const { user } = useTypedSelector((s) => s.profileReducer);
  const { groupsObjectCollectionList } = useTypedSelector((s) => s.appReducer);
  const { setOpenPopupEditGroup, setLeaveGroup, setDeleteGroup } = useActions();

  function handleClickOpen() {
    setOpenPopupEditGroup(true);
  }

  function handleClickLeaveGroup() {
    setLeaveGroup(groupsObjectCollectionList[selectedGroupInfo!], user);
  }

  function handleClickDeleteGroup() {
    setDeleteGroup(groupsObjectCollectionList[selectedGroupInfo!], user);
  }

  return (
    <>
      {roleInGroup && roleInGroup === "admin" && (
        <IconButton
          icon="icon-pencil"
          text="Edit group"
          handleClick={handleClickOpen}
        />
      )}
      {roleInGroup && roleInGroup === "member" && (
        <IconButton
          icon="icon-signout"
          text="Leave group"
          handleClick={handleClickLeaveGroup}
        />
      )}
      {roleInGroup && roleInGroup === "admin" && (
        <IconButton
          icon="icon-body-delete"
          text="Delete group "
          handleClick={handleClickDeleteGroup}
        />
      )}
    </>
  );
};

export default MCGProfileNav;
