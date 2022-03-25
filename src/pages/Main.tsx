import React, { FC, useEffect, useState } from "react";
import MainBar from "../components/main/bar/MainBar";
import MainContent from "../components/main/content/MainContent";
import MainSide from "../components/main/side/MainSide";
import { useActions } from "../lib/hooks/useActions";
import { useTypedSelector } from "../lib/hooks/useTypedSelector";
import { IUser } from "../lib/models/IUser";
import "../styles/pages/main/index.scss";

const Main: FC = () => {
  const [isUserInstalled, setIsUserInstalled] = useState<boolean>(false);
  const { userSnapId } = useTypedSelector((s) => s.authReducer);
  const {
    usersObjectCollectionList,
    groupsCollectionSnap,
    friendsCollectionSnap,
  } = useTypedSelector((s) => s.appReducer);
  const { user } = useTypedSelector((s) => s.profileReducer);
  const {
    setUser,
    setListenerGroupsCollection,
    setListenerFriendsCollection,
    setAppControllerGroupsCollection,
    setAppControllerFriendsCollection,
    setIsFriendsControllerLoaded,
    setIsGroupsControllerLoaded,
    setMyGroupList,
    setFriendsCollectionList,
    setGroupsObjectCollectionList,
  } = useActions();

  function cleanup() {
    setIsFriendsControllerLoaded(false);
    setIsGroupsControllerLoaded(false);
    setMyGroupList([]);
    setGroupsObjectCollectionList({});
    setFriendsCollectionList([]);
    setUser({} as IUser);
  }

  // *Ставимо слухач на колекцію "Groups"
  useEffect(() => {
    if (userSnapId) {
      setListenerGroupsCollection();
    }
    return () => {
      cleanup();
    };
  }, []);

  // *Ставимо слухач подій на колекцію "Friends"
  useEffect(() => {
    if (userSnapId === null) return;
    setListenerFriendsCollection(userSnapId);
  }, []);

  // *При зміні об'єкту колекції "Users" ми встіновлюємо значення нашого профіля "user"
  useEffect(() => {
    if (userSnapId === null) return;
    const user = usersObjectCollectionList[userSnapId];
    setUser(user);
    setIsUserInstalled(true);
  }, [usersObjectCollectionList]);

  useEffect(() => {}, []);

  // *При зміні "Snap" коллекції "Groups" ми контролюємо масив "Snap" колекції і далі
  // *встановлюємо в "MyGroupList" і в об'єкт з групами
  useEffect(() => {
    if (isUserInstalled && userSnapId) {
      setAppControllerGroupsCollection(groupsCollectionSnap, user);
    }
  }, [groupsCollectionSnap, user]);

  // *При зміні "Snap" колекції "Friends" ми контролюємо його
  useEffect(() => {
    if (userSnapId) {
      setAppControllerFriendsCollection(
        friendsCollectionSnap,
        usersObjectCollectionList
      );
    }
    return;
  }, [friendsCollectionSnap]);

  return (
    <div className="main">
      <div className="main__container">
        <div className="main__block">
          <MainBar />
          <MainSide isUserInstalled={isUserInstalled} />
          <MainContent isUserInstalled={isUserInstalled} />
        </div>
      </div>
    </div>
  );
};

export default Main;
