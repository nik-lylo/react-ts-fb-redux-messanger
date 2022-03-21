import React, { FC, useEffect, useState } from "react";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import GroupCardInvitation from "../../../../UI/cards/GroupCardInvitation/GroupCardInvitation";
import SnackbarMui from "../../../../UI/snackbar/SnackbarMui/SnackbarMui";

const NotsInviting: FC = () => {
  const [invitingGroup, setInvitingGroup] = useState<string[]>([]);
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [snackBarText, setSnackBarText] = useState<string>("");
  const [snackBarStatus, setSnackBarStatus] = useState<
    "success" | "error" | "info" | "warning"
  >("success");

  const { user } = useTypedSelector((s) => s.profileReducer);
  const { groupCollectionList } = useTypedSelector((s) => s.groupReducer);
  const { usersCollectionList } = useTypedSelector((s) => s.contactReducer);

  function handleCloseSnackbar() {
    setOpenSnackbar(false);
  }

  function snackBarOpen(
    text: string,
    status: "success" | "error" | "info" | "warning"
  ) {
    setSnackBarText(text);
    setSnackBarStatus(status);
    setOpenSnackbar(true);
  }

  useEffect(() => {
    const invitingArr = usersCollectionList[user.userID].invitationToGroup;
    setInvitingGroup([...invitingArr]);
  }, [usersCollectionList]);

  return (
    <div className="nots-inviting">
      {usersCollectionList[user.userID].invitationToGroup.length === 0 ? (
        <div className="nots-inviting__empty">
          <div className="main-empty-title">
            You don't have any new offers for the group yet
          </div>
        </div>
      ) : (
        <>
          <div className="nots-inviting__title settings-title">Invited</div>
          <div className="nots-inviting__subtitle ">
            You can accept the request to join the group
          </div>
          <div className="nots-inviting__container">
            {invitingGroup.map((item: string) => {
              const group = groupCollectionList[item];

              return (
                <GroupCardInvitation
                  key={group.groupId}
                  group={group}
                  snackBarOpen={snackBarOpen}
                />
              );
            })}
          </div>
          <SnackbarMui
            text={snackBarText}
            status={snackBarStatus}
            open={openSnackbar}
            handleClose={handleCloseSnackbar}
          />
        </>
      )}
    </div>
  );
};

export default NotsInviting;
