import React, { FC, useEffect, useState } from "react";
import MainBar from "../components/main/bar/MainBar";
import MainContent from "../components/main/content/MainContent";
import MainSideBar from "../components/main/side/MainSideBar";
import CustomLoader from "../components/UI/loader/CustomLoader/CustomLoader";
import { useActions } from "../lib/hooks/useActions";
import { useTypedSelector } from "../lib/hooks/useTypedSelector";
import "../styles/pages/main/index.scss";

const Main: FC = () => {
  const [isUserInstalled, setIsUserInstalled] = useState<boolean>(true);
  const { userSnapId } = useTypedSelector((s) => s.authReducer);
  const { usersObjectCollectionList } = useTypedSelector((s) => s.appReducer);
  const {
    setUser,
    setListenerGroupsCollection,
    setAppControllerGroupsCollection,
  } = useActions();

  useEffect(() => {
    if (userSnapId === null) return;
    const user = usersObjectCollectionList[userSnapId];
    setUser(user);
    setIsUserInstalled(true);
  }, [usersObjectCollectionList]);

  useEffect(() => {}, []);

  return (
    <div className="main">
      <div className="main__container">
        {isUserInstalled ? (
          <div className="main__block">
            <MainBar />
            <MainSideBar />
            <MainContent />
          </div>
        ) : (
          <CustomLoader />
        )}
      </div>
    </div>
  );
};

export default Main;
