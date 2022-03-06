import React, { FC } from "react";
import InputSearch from "../../../../UI/input/InputSearch/InputSearch";

const MainBarContactSearch: FC = () => {
  return (
    <div className="contact__search contact-search">
      <div className="contact-search__title">Contacts</div>
      <div className="contact-search__input">
        <InputSearch />
      </div>
    </div>
  );
};

export default MainBarContactSearch;
