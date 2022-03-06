import React, { FC, useEffect } from "react";
import "../styles/app/app.scss";
import AppRouter from "../router/AppRouter/AppRouter";
import { useActions } from "../lib/hooks/useActions";
import { useTypedSelector } from "../lib/hooks/useTypedSelector";
import CustomLoader from "../components/UI/loader/CustomLoader/CustomLoader";

const App: FC = () => {
  const { setOnAuthStateChange, setDefaultIsAuth } = useActions();
  const { isOnAuthStateStarted, isOnAuthStateBlocked, userSnapId } =
    useTypedSelector((s) => s.authReducer);
  useEffect(() => {
    setOnAuthStateChange();
  }, []);

  useEffect(() => {
    setDefaultIsAuth(isOnAuthStateBlocked, userSnapId);
  }, [userSnapId]);

  return (
    <div className="app">
      {isOnAuthStateStarted ? <AppRouter /> : <CustomLoader />}
    </div>
  );
};

export default App;
