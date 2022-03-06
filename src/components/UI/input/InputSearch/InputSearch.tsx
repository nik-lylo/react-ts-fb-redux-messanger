import React, { FC, useState } from "react";
import { useActions } from "../../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../../lib/hooks/useTypedSelector";
import "./inputSearch.scss";

const InputSearch: FC = () => {
  const [filterString, setFilterString] = useState<string>("");
  const { setFilteredContact } = useActions();
  const { myContact, globalContact } = useTypedSelector(
    (s) => s.contactReducer
  );
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFilterString(e.target.value);
    setFilteredContact(e.target.value, myContact, globalContact);
  }
  function clearInput() {
    setFilterString("");
    setFilteredContact("", myContact, globalContact);
  }

  return (
    <div className="search-input">
      <button className="search-input__icon icon-search"></button>
      {filterString === "" ? null : (
        <button
          className="search-input__delete icon-cross"
          onClick={clearInput}
        ></button>
      )}
      <input
        onChange={handleChange}
        type="text"
        placeholder="Search"
        className="search-input__input"
        value={filterString}
      />
    </div>
  );
};

export default InputSearch;
