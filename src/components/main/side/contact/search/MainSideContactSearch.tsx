import React, { FC } from "react";
import InputSearch from "../../../../UI/input/InputSearch/InputSearch";

interface MainSideContactSearchProps {
  filterString: string;
  setFilterString: any;
}

const MainSideContactSearch: FC<MainSideContactSearchProps> = ({
  filterString,
  setFilterString,
}) => {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFilterString(e.target.value);
  }
  function clearInput() {
    setFilterString("");
  }

  return (
    <div className="main-side-contact-search">
      <div className="main-side-contact-search__title main-24-title">
        Contacts
      </div>
      <div className="main-side-contact-search__input">
        <InputSearch
          inputValue={filterString}
          handleChange={handleChange}
          handleClick={clearInput}
        />
      </div>
    </div>
  );
};

export default MainSideContactSearch;
