import React, { FC, useEffect } from "react";
import { checkRoleInGroup } from "../../../../lib/controller/group/checkRoleInGroup";
import { useActions } from "../../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../../lib/hooks/useTypedSelector";

import Loader from "../../../UI/loader/Loader/Loader";
import SnackbarMui from "../../../UI/snackbar/SnackbarMui/SnackbarMui";
import EmptyWrapperCustom from "../../../UI/wrapper/EmptyWrapperCustom/EmptyWrapperCustom";
import MainContentGroupAbout from "./about/MainContentGroupAbout";
import MainContentGroupProfile from "./profile/MainContentGroupProfile";

const MainContentGroup: FC = () => {
  const { selectedGroupInfo, groupChangeIsLoaded, groupSnackbarProps } =
    useTypedSelector((s) => s.groupReducer);
  const { groupsObjectCollectionList } = useTypedSelector((s) => s.appReducer);
  const { user } = useTypedSelector((s) => s.profileReducer);
  const {
    setRoleInGroup,
    setStatusSelectedGroup,
    setGroupSnackbarProps,
    setSelectedGroupInfo,
  } = useActions();

  function handleSnackBarClose() {
    setGroupSnackbarProps({ ...groupSnackbarProps, open: false });
  }

  useEffect(() => {
    if (selectedGroupInfo === null) return;
    const role = checkRoleInGroup(
      selectedGroupInfo,
      user.userID,
      groupsObjectCollectionList
    );
    setStatusSelectedGroup(
      groupsObjectCollectionList[selectedGroupInfo].private
    );
    setRoleInGroup(role);
  }, [selectedGroupInfo]);

  useEffect(() => {
    return () => {
      setSelectedGroupInfo(null);
    };
  }, []);

  return (
    <div className="main-content-group">
      {selectedGroupInfo ? (
        <div className="main-content-group__flex">
          <MainContentGroupProfile />
          <MainContentGroupAbout />
        </div>
      ) : (
        <EmptyWrapperCustom
          title="Select group on left"
          subtitle="You can do operations with different groups"
          image={require("../../../../assets/image/main/custom/custom-note.png")}
        />
      )}
      <Loader isOpen={groupChangeIsLoaded} />
      <SnackbarMui
        open={groupSnackbarProps.open}
        text={groupSnackbarProps.text}
        status={groupSnackbarProps.status}
        handleClose={handleSnackBarClose}
      />
    </div>
  );
};

export default MainContentGroup;
