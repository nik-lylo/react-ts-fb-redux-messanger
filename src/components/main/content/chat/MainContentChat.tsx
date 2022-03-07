import React, { FC } from "react";
import MainContentChatBody from "./body/MainContentChatBody";
import MainContentChatForm from "./form/MainContentChatForm";
import MainContentChatNav from "./nav/MainContentChatNav";

const MainContentChat: FC = () => {
  return (
    <div className="main-content-chat">
      <MainContentChatNav />
      <MainContentChatBody />
      <MainContentChatForm />
    </div>
  );
};

export default MainContentChat;
