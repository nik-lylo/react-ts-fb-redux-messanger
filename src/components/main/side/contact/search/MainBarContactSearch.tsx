import React, { FC, useState } from "react";
import { useActions } from "../../../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import InputSearch from "../../../../UI/input/InputSearch/InputSearch";

const MainBarContactSearch: FC = () => {
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
    <div className="contact__search contact-search">
      <div className="contact-search__title">Contacts</div>
      <div className="contact-search__input">
        <InputSearch
          inputValue={filterString}
          handleChange={handleChange}
          handleClick={clearInput}
        />
      </div>
    </div>
  );
};

export default MainBarContactSearch;
