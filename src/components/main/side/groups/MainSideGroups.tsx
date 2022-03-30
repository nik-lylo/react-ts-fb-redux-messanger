import React, { FC } from "react";

import MainSideGroupsBody from "./body/MainSideGroupsBody";
import MainSideGroupsHeader from "./header/MainSideGroupsHeader";

const MainSideGroups: FC = () => {
  return (
    <div className="main-side-groups">
      <MainSideGroupsHeader />
      <MainSideGroupsBody />
    </div>
  );
};

export default MainSideGroups;

//
