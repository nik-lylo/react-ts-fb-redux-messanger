import React, { FC } from "react";
import { useActions } from "../../../../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../../../../lib/hooks/useTypedSelector";
import SimpleButton from "../../../../../UI/buttons/SimpleButton/SimpleButton";

const MCGProfileButtons: FC = () => {
  const { roleInGroup, statusSelectedGroup, selectedGroupInfo } =
    useTypedSelector((s) => s.groupReducer);
  const { groupsObjectCollectionList } = useTypedSelector((s) => s.appReducer);
  const { user } = useTypedSelector((s) => s.profileReducer);
  const { setJoinGroup } = useActions();

  function handleClickJoin() {
    setJoinGroup(groupsObjectCollectionList[selectedGroupInfo!], user.userID);
  }

  return (
    <>
      {roleInGroup && roleInGroup === "admin" && (
        <SimpleButton text="Viev group" isLoading={false} />
      )}
      {roleInGroup && roleInGroup === "member" && (
        <SimpleButton text="Send Message" isLoading={false} />
      )}
      {roleInGroup &&
        roleInGroup === "guest" &&
        statusSelectedGroup === "Public" && (
          <SimpleButton
            handleClick={handleClickJoin}
            text="Join group"
            isLoading={false}
          />
        )}
      {roleInGroup &&
        roleInGroup === "guest" &&
        statusSelectedGroup === "Private" && (
          <div style={{ fontStyle: "italic" }} className="main-17-title">
            This group is Private
          </div>
        )}
    </>
  );
};

export default MCGProfileButtons;
