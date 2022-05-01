import React, { ChangeEvent, FC, useCallback } from "react";
import { useActions } from "../../../../../lib/hooks/useActions";
import InputSearch from "../../../../UI/input/InputSearch/InputSearch";

interface MainSideGroupsHeaderProps {
  inputValue: string;
  setInputValue: any;
}

const MainSideGroupsHeader = React.memo<MainSideGroupsHeaderProps>(
  ({ inputValue, setInputValue }) => {
    const { setGroupSearchLoader } = useActions();

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      setGroupSearchLoader(true);
      setInputValue(e.target.value);
    }, []);

    const handleClear = useCallback(() => {
      setGroupSearchLoader(true);
      setInputValue("");
    }, []);

    return (
      <div className="main-side-groups-header">
        <div className="main-side-groups-header__title main-24-title">
          Groups
        </div>
        <div className="main-side-groups-header__search">
          <InputSearch
            inputValue={inputValue}
            handleChange={handleChange}
            handleClick={handleClear}
          />
        </div>
      </div>
    );
  },
  (prev: MainSideGroupsHeaderProps, next: MainSideGroupsHeaderProps) => {
    return prev.inputValue === next.inputValue;
  }
);

export default MainSideGroupsHeader;
