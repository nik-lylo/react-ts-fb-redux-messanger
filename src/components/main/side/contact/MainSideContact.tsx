import React, { FC, useEffect, useState } from "react";
import { filterContactUserByString } from "../../../../lib/controller/contact/filterContactUserByString";
import { filterGlobalContact } from "../../../../lib/controller/contact/filterGlobalContact";
import { useTypedSelector } from "../../../../lib/hooks/useTypedSelector";
import { IFriendsUser } from "../../../../lib/models/IFriends";
import { IUser } from "../../../../lib/models/IUser";
import MainSideContactBody from "./body/MainSideContactBody";
import MainSideContactSearch from "./search/MainSideContactSearch";

const MainContactSide: FC = () => {
  const [filterString, setFilterString] = useState<string>("");
  const [isGlobalContactLoaded, setIsGlobalContactLoaded] =
    useState<boolean>(true);
  const [filteredGlobalContact, setFilteredGlobalContact] = useState<IUser[]>(
    []
  );
  const [filteredFriendsContact, setFilteredFriendsContact] = useState<
    IFriendsUser[]
  >([]);

  const [globalContact, setGlobalContact] = useState<IUser[]>([]);
  const { usersObjectCollectionList, friendsCollectionList } = useTypedSelector(
    (s) => s.appReducer
  );
  const { user } = useTypedSelector((s) => s.profileReducer);

  // *МИ фільтруємо глобальний масив з усіма користувачами і ставимо його в проміжну перемінну
  // *і також при зміні об'єкту з користувачами чи друзями реагуємо на це
  useEffect(() => {
    const global: IUser[] = filterGlobalContact(
      user.userID,
      Object.values(usersObjectCollectionList),
      friendsCollectionList
    );
    setGlobalContact(global);
  }, [friendsCollectionList, usersObjectCollectionList]);

  // !При зміні нашого масиву шо фільтрований вище і основного масиву з Друзями ми а також строки
  // !яку вводимо в інпут і Фільтруємо ці масиви стосовно строки
  useEffect(() => {
    setIsGlobalContactLoaded(false);
    if (filterString === "") {
      setFilteredFriendsContact([...friendsCollectionList]);
      setFilteredGlobalContact([...globalContact]);
      setTimeout(() => {
        setIsGlobalContactLoaded(true);
      }, 300);
      return;
    } else {
      setFilteredGlobalContact(
        filterContactUserByString(filterString, globalContact)
      );
      setFilteredFriendsContact(
        filterContactUserByString(filterString, friendsCollectionList)
      );
    }
    setTimeout(() => {
      setIsGlobalContactLoaded(true);
    }, 300);
  }, [globalContact, friendsCollectionList, filterString]);

  return (
    <div className="main-bar-side-contact">
      <MainSideContactSearch
        filterString={filterString}
        setFilterString={setFilterString}
      />
      <MainSideContactBody
        filterFriendsList={filteredFriendsContact}
        filterGlobalList={filteredGlobalContact}
        isLoaded={isGlobalContactLoaded}
      />
    </div>
  );
};

export default MainContactSide;
