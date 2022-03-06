import React, { FC } from "react";
import MainBar from "../components/main/bar/MainBar";
import MainContent from "../components/main/content/MainContent";
import MainSideBar from "../components/main/side/MainSideBar";
import "../styles/pages/main/index.scss";

const Main: FC = () => {
  return (
    <div className="main">
      <div className="main__container">
        <div className="main__block">
          <MainBar />
          <MainSideBar />
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default Main;
