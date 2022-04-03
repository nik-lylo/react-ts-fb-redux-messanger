import React, { FC, useEffect, useState } from "react";
import "../styles/app/app.scss";
import AppRouter from "../router/AppRouter/AppRouter";
import CustomLoader from "../components/UI/loader/CustomLoader/CustomLoader";
import { useActions } from "../lib/hooks/useActions";
import { useTypedSelector } from "../lib/hooks/useTypedSelector";
import { uploadUpdateUser } from "../api/user/uploadUpdateUser";

const App: FC = () => {
  const [isAuthReady, setIsAuthReady] = useState<boolean>(false);
  const { isListenerAuthBlocked, isListenerAuthStarted, userSnapId } =
    useTypedSelector((s) => s.authReducer);
  const { usersCollectionSnap, isUsersControllerLoaded } = useTypedSelector(
    (s) => s.appReducer
  );
  const { user } = useTypedSelector((s) => s.profileReducer);
  const {
    setListenerAuthState,
    setListenerUsersCollection,
    setAppControllerUsersCollection,
    setIsAuth,
  } = useActions();

  // ! Ми ставимо "EventListener" "beforeunload" коли змінюється обєкт користувача і коли ми
  // ! закриваємо сторінку то будевстановлюватися статус user.online "false"
  useEffect(() => {
    if (user) {
      window.addEventListener("beforeunload", (e: BeforeUnloadEvent) => {
        uploadUpdateUser(user.userID, { online: new Date() });
      });
    }
  }, [user]);

  // *Включаємо слухач на зміни активних користувачів
  useEffect(() => {
    setListenerAuthState();
  }, []);

  // *Включаємо слухач на зміни на колекцію "Users"
  useEffect(() => {
    setListenerUsersCollection();
  }, []);

  // *Якщо при зміні Snap знимку колекції "Users" ми керуємо знимком і зберігаємо його в об'єкті
  useEffect(() => {
    setAppControllerUsersCollection(usersCollectionSnap);
  }, [usersCollectionSnap]);

  // *Коли наш слухач користувача стартував нам потрібно встанувити "isAuth" дивлячись на "userSnapId"
  useEffect(() => {
    if (!isListenerAuthStarted) {
      return;
    }
    if (isListenerAuthBlocked) {
      return;
    }
    if (userSnapId) {
      setIsAuth(true);
      uploadUpdateUser(userSnapId, { online: true });
    } else {
      setIsAuth(false);
    }
    setIsAuthReady(true);
  }, [userSnapId, isListenerAuthStarted, isListenerAuthBlocked]);

  return (
    <div className="app">
      {isUsersControllerLoaded && isAuthReady ? (
        <AppRouter />
      ) : (
        <CustomLoader />
      )}
    </div>
  );
};

export default App;
//
