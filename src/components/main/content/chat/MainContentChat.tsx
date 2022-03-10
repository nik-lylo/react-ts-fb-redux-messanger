import React, { FC } from "react";
import { isEmptyObj } from "../../../../lib/helper/isEmptyObj";
import { useTypedSelector } from "../../../../lib/hooks/useTypedSelector";
import NoSelectedChatWrapper from "../../../UI/empty_wrapper/NoSelectedChatWrapper/NoSelectedChatWrapper";
import MainContentChatBody from "./body/MainContentChatBody";
import MainContentChatForm from "./form/MainContentChatForm";
import MainContentChatNav from "./nav/MainContentChatNav";

const MainContentChat: FC = () => {
  const { selectedChat } = useTypedSelector((s) => s.chatReducer);
  return (
    <div className="main-content-chat">
      {isEmptyObj(selectedChat) ? (
        <NoSelectedChatWrapper />
      ) : (
        <>
          <MainContentChatNav />
          <MainContentChatBody />
          <MainContentChatForm />
        </>
      )}
    </div>
  );
};

export default MainContentChat;
