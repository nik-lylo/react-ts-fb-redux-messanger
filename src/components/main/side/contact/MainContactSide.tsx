import React, { useEffect } from "react";
import { useActions } from "../../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../../lib/hooks/useTypedSelector";
import BarLoader from "../../../UI/loader/BarLoader/BarLoader";
import MainBarContactBody from "./body/MainBarContactBody";
import MainBarContactSearch from "./search/MainBarContactSearch";

const MainContactSide = () => {
  const { setFetchAllContact } = useActions();
  const { user } = useTypedSelector((s) => s.profileReducer);
  const { isContactLoading } = useTypedSelector((s) => s.contactReducer);
  useEffect(() => {
    setFetchAllContact(user.userID);
  }, []);
  return (
    <div className="side__contact contact-side">
      <MainBarContactSearch />
      {isContactLoading ? (
        <div className="contact-side__loader-block">
          <BarLoader blockSize="32px" />
        </div>
      ) : (
        <MainBarContactBody />
      )}
    </div>
  );
};

export default MainContactSide;
