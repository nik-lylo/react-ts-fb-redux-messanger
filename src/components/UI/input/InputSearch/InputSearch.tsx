import React, { FC } from "react";
import "./inputSearch.scss";

interface InputSearchProps {
  inputValue: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick?: () => void;
}

const InputSearch: FC<InputSearchProps> = ({
  inputValue,
  handleChange,
  handleClick,
}) => {
  return (
    <div className="search-input">
      <button className="search-input__icon icon-search"></button>
      {inputValue === "" ? null : (
        <button
          className="search-input__delete icon-cross"
          onClick={handleClick}
        ></button>
      )}
      <input
        onChange={handleChange}
        type="text"
        placeholder="Search"
        className="search-input__input"
        value={inputValue}
      />
    </div>
  );
};
export default InputSearch;
