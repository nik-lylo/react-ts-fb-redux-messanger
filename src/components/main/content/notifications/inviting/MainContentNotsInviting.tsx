import React, { FC, useState } from "react";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import { IGroup } from "../../../../../lib/models/IGroup";
import GroupCardInvitation from "../../../../UI/cards/GroupCardInvitation/GroupCardInvitation";
import SnackbarMui from "../../../../UI/snackbar/SnackbarMui/SnackbarMui";

const MainContentNotsInviting: FC = () => {
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [snackBarText, setSnackBarText] = useState<string>("");
  const [snackBarStatus, setSnackBarStatus] = useState<
    "success" | "error" | "info" | "warning"
  >("success");

  const { user } = useTypedSelector((s) => s.profileReducer);
  const { groupsObjectCollectionList } = useTypedSelector((s) => s.appReducer);

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

  return (
    <div className="main-content-nots-inviting">
      {user.invitationToGroup.length === 9 ? (
        <div className="main-content-nots-inviting__empty">
          <div className="main-empty-title">
            You don't have any new offers for the group yet
          </div>
        </div>
      ) : (
        <>
          <div className="main-content-nots-inviting__title main-24-title">
            Invited
          </div>
          <div className="main-content-nots-inviting__subtitle ">
            You can accept the request to join the group
          </div>
          <div className="main-content-nots-inviting__container">
            {user.invitationToGroup.map((item: string) => {
              const group: IGroup = groupsObjectCollectionList[item];

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

export default MainContentNotsInviting;
