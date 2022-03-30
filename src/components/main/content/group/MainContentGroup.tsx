import React, { FC } from "react";
import { useTypedSelector } from "../../../../lib/hooks/useTypedSelector";
import EmptyWrapperCustom from "../../../UI/wrapper/EmptyWrapperCustom/EmptyWrapperCustom";
import MainContentGroupAbout from "./about/MainContentGroupAbout";
import MainContentGroupProfile from "./profile/MainContentGroupProfile";

const MainContentGroup: FC = () => {
  const { selectedGroupInfo } = useTypedSelector((s) => s.groupReducer);

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
    </div>
  );
};

export default MainContentGroup;
