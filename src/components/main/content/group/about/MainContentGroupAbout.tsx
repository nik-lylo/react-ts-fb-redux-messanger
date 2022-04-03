import React, { FC } from "react";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";

import MCGAboutAdminContainer from "./admin_container/MCGAboutAdminContainer";
import MCGAboutInfo from "./info/MCGAboutInfo";
import MCGAboutMember from "./member/MCGAboutMember";

const MainContentGroupAbout: FC = () => {
  const { selectedGroupInfo, roleInGroup } = useTypedSelector(
    (s) => s.groupReducer
  );
  const { groupsObjectCollectionList } = useTypedSelector((s) => s.appReducer);

  return (
    <div className="main-content-group-about">
      <div className="main-content-group-about__title main-17-title">About</div>
      <div className="main-content-group-about__text">
        {selectedGroupInfo &&
          groupsObjectCollectionList[selectedGroupInfo].about}
      </div>
      <MCGAboutInfo />
      <MCGAboutAdminContainer />
      {roleInGroup && roleInGroup !== "guest" && <MCGAboutMember />}
    </div>
  );
};

export default MainContentGroupAbout;
