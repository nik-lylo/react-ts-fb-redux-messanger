import React, { FC, useEffect, useState } from "react";
import "../styles/app/app.scss";
import AppRouter from "../router/AppRouter/AppRouter";
import CustomLoader from "../components/UI/loader/CustomLoader/CustomLoader";
import { useActions } from "../lib/hooks/useActions";
import { useTypedSelector } from "../lib/hooks/useTypedSelector";

const App: FC = () => {
  const [isAuthReady, setIsAuthReady] = useState<boolean>(false);
  const { isListenerAuthStarted, userSnapId } = useTypedSelector(
    (s) => s.authReducer
  );
  const { usersCollectionSnap, isUsersControllerLoaded } = useTypedSelector(
    (s) => s.appReducer
  );
  const {
    setListenerAuthState,
    setListenerUsersCollection,
    setAppControllerUsersCollection,
    setIsAuth,
  } = useActions();

  // *Включаємо слухач на зміни на зміни активних користувачів
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
    if (userSnapId) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
    setIsAuthReady(true);
  }, [userSnapId, isListenerAuthStarted]);

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
