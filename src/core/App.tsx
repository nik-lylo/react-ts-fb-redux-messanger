import React, { FC, useEffect, useState } from "react";
import "../styles/app/app.scss";
import AppRouter from "../router/AppRouter/AppRouter";
import { useActions } from "../lib/hooks/useActions";
import { useTypedSelector } from "../lib/hooks/useTypedSelector";
import CustomLoader from "../components/UI/loader/CustomLoader/CustomLoader";
import { isEmptyObj } from "../lib/helper/isEmptyObj";
import { uploadIsOnline } from "../api/user/uploadIsOnline";
import { IUser } from "../lib/models/IUser";
import { IGroupObject, IUsersObject } from "../lib/models/ICommon";
import { IGroup } from "../lib/models/IGroup";

const App: FC = () => {
  const [isMainReady, setIsMainReady] = useState<boolean>(false);
  const {
    setOnAuthStateChange,
    setDefaultIsAuth,
    setUploadUserOnline,
    setOnContactSnapList,
    setUsersCollectionList,
    setIsUsersCollectioListLoaded,
    setGroupCollectionsList,
    setIsGroupCollectionsListLoaded,
    setOnGroupSnapList,
    setMyGroup,
  } = useActions();
  const { isOnAuthStateStarted, isOnAuthStateBlocked, userSnapId } =
    useTypedSelector((s) => s.authReducer);
  const { user } = useTypedSelector((s) => s.profileReducer);
  const { isUsersCollectionListLoaded, contactSnapList, usersCollectionList } =
    useTypedSelector((s) => s.contactReducer);
  const { groupSnapList, isGroupCollectionListLoaded, groupCollectionList } =
    useTypedSelector((s) => s.groupReducer);

  // !Коли завантажено "user" і "usersCollectionList" i "groupCollectionList" то ми
  // !завантажуємо "myGroup" і далі встановлюємо відкриття флажка що відкриває "App"
  useEffect(() => {
    if (
      isOnAuthStateStarted &&
      isUsersCollectionListLoaded &&
      isGroupCollectionListLoaded
    ) {
      const myGroupArray: IGroup[] = [];
      usersCollectionList[user.userID].myGroup.map((item: string) => {
        myGroupArray.push(groupCollectionList[item]);
      });
      setMyGroup(myGroupArray);
      setIsMainReady(true);
    }
  }, [
    isOnAuthStateStarted,
    isUsersCollectionListLoaded,
    isGroupCollectionListLoaded,
    usersCollectionList,
  ]);

  // !При зміні масиву "groupSnapList" ми обновляємо основний масив "GroupCollectionsList"
  useEffect(() => {
    const object: IGroupObject = {};
    groupSnapList.map((item: IGroup) => {
      object[item.groupId] = item;
    });
    setGroupCollectionsList(object);
    setIsGroupCollectionsListLoaded(true);
  }, [groupSnapList]);

  // !Ставимо слухач подій на коллекції "Group"
  useEffect(() => {
    setOnGroupSnapList();
  }, []);

  // !Ставимо слухач подій на коллекції "Users"
  useEffect(() => {
    setOnContactSnapList();
  }, []);

  // !При зміні масиву "contactSnapList" ми обновляємо основний масив "UsersCollectionList"
  useEffect(() => {
    const object: IUsersObject = {};
    contactSnapList.map((it: IUser) => {
      object[it.userID] = it;
    });
    setUsersCollectionList(object);
    setIsUsersCollectioListLoaded(true);
  }, [contactSnapList]);

  // ! Ми ставимо "EventListener" "beforeunload" коли змінюється обєкт користувача і коли ми
  // ! закриваємо сторінку то будевстановлюватися статус user.online "false"
  useEffect(() => {
    if (!isEmptyObj(user)) {
      window.addEventListener("beforeunload", (e: BeforeUnloadEvent) => {
        setUploadUserOnline(user.userID, false);
      });
    }
  }, [user]);

  // ! Ставимо слухач подій OnAuthStateChange який дивиться чи є активний користувач в браузері
  useEffect(() => {
    setOnAuthStateChange();
  }, []);

  // !ООО тут дуже цікаві маніпуляції з флажками авторизації
  useEffect(() => {
    setDefaultIsAuth(isOnAuthStateBlocked, userSnapId);
  }, [userSnapId]);

  //!Обновлюємо статус user.online true при монтуванні компонента
  useEffect(() => {
    if (!isEmptyObj(user)) {
      uploadIsOnline(user.userID, true);
    }
  }, [user]);

  return (
    <div className="app">{isMainReady ? <AppRouter /> : <CustomLoader />}</div>
  );
};

export default App;
