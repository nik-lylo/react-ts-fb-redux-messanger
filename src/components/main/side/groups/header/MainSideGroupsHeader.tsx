import React, { ChangeEvent, FC } from "react";
import { useActions } from "../../../../../lib/hooks/useActions";
import InputSearch from "../../../../UI/input/InputSearch/InputSearch";

interface MainSideGroupsHeaderProps {
  inputValue: string;
  setInputValue: any;
}

const MainSideGroupsHeader: FC<MainSideGroupsHeaderProps> = ({
  inputValue,
  setInputValue,
}) => {
  const { setGroupSearchLoader } = useActions();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setGroupSearchLoader(true);
    setInputValue(e.target.value);
  }
  function handleClear() {
    setGroupSearchLoader(true);
    setInputValue("");
  }

  return (
    <div className="main-side-groups-header">
      <div className="main-side-groups-header__title main-24-title">Groups</div>
      <div className="main-side-groups-header__search">
        <InputSearch
          inputValue={inputValue}
          handleChange={handleChange}
          handleClick={handleClear}
        />
      </div>
    </div>
  );
};

export default MainSideGroupsHeader;
