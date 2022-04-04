import React, { FC, useState } from "react";

import MainSideGroupsBody from "./body/MainSideGroupsBody";
import MainSideGroupsHeader from "./header/MainSideGroupsHeader";

const MainSideGroups: FC = () => {
  const [searchInput, setSearchInput] = useState<string>("");

  return (
    <div className="main-side-groups">
      <MainSideGroupsHeader
        inputValue={searchInput}
        setInputValue={setSearchInput}
      />
      <MainSideGroupsBody searchInput={searchInput} />
    </div>
  );
};

export default MainSideGroups;

//
