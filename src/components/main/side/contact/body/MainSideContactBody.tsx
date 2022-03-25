import React, { FC, useEffect, useState } from "react";
import { filterGlobalContact } from "../../../../../lib/controller/contact/filterGlobalContact";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import { IFriendsUser } from "../../../../../lib/models/IFriends";
import { IUser } from "../../../../../lib/models/IUser";
import ContactCard from "../../../../UI/cards/ContactCard/ContactCard";
import BarLoader from "../../../../UI/loader/BarLoader/BarLoader";

interface MainSideContactBodyProps {
  filterFriendsList: IFriendsUser[];
  filterGlobalList: IUser[];
  isLoaded: boolean;
}

const MainSideContactBody: FC<MainSideContactBodyProps> = ({
  filterFriendsList,
  filterGlobalList,
  isLoaded,
}) => {
  return (
    <div className="main-side-contact-body">
      {filterFriendsList.length === 0 && filterGlobalList.length === 0 && (
        <div className="main-17-title main-side-contact-body__alert">
          You have no match
        </div>
      )}
      {isLoaded ? (
        filterFriendsList.map((item: IUser) => (
          <ContactCard contact={item} key={item.userID} my={true} />
        ))
      ) : (
        <div className="main-side-contact-body__loader">
          <BarLoader blockSize="25px" />
        </div>
      )}
      {filterGlobalList.length !== 0 && (
        <div className="main-side-contact-body__title main-17-title">
          Global result
        </div>
      )}

      {isLoaded ? (
        filterGlobalList.map((item: IUser) => {
          return <ContactCard contact={item} key={item.userID} my={false} />;
        })
      ) : (
        <div className="main-side-contact-body__loader">
          <BarLoader blockSize="25px" />
        </div>
      )}
      {}
    </div>
  );
};

export default MainSideContactBody;
