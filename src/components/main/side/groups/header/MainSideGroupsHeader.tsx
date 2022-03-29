import React, { FC } from "react";
import InputSearch from "../../../../UI/input/InputSearch/InputSearch";

const MainSideGroupsHeader: FC = () => {
  return (
    <div className="main-side-groups-header">
      <div className="main-side-groups-header__title main-24-title">Groups</div>
      <div className="main-side-groups-header__search">
        <InputSearch
          inputValue=""
          handleChange={() => console.log("h0")}
          handleClick={() => console.log("hi")}
        />
      </div>
    </div>
  );
};

export default MainSideGroupsHeader;
