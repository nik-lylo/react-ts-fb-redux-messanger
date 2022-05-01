import React, { FC, useCallback, useState } from "react";
import MainSideGroupsBody from "./body/MainSideGroupsBody";
import MainSideGroupsHeader from "./header/MainSideGroupsHeader";

const MainSideGroups: FC = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const setSearchInputValue = useCallback((value: string) => {
    setSearchInput(value);
  }, []);

  return (
    <div className="main-side-groups">
      <MainSideGroupsHeader
        inputValue={searchInput}
        setInputValue={setSearchInputValue}
      />
      <MainSideGroupsBody searchInput={searchInput} />
    </div>
  );
};

export default MainSideGroups;

//
