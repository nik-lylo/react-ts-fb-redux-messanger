import React, { FC } from "react";
import { isEmptyObj } from "../../../../lib/helper/isEmptyObj";
import { useTypedSelector } from "../../../../lib/hooks/useTypedSelector";
import NoSelectedChatWrapper from "../../../UI/empty_wrapper/NoSelectedChatWrapper/NoSelectedChatWrapper";
import MainContentChatBody from "./body/MainContentChatBody";
import MainContentChatForm from "./form/MainContentChatForm";
import MainContentChatNav from "./nav/MainContentChatNav";

const MainContentChat: FC = () => {
  const { selectedChat } = useTypedSelector((s) => s.chatReducer);
  const { selectedGroup } = useTypedSelector((s) => s.groupReducer);
  return (
    <div className="main-content-chat">
      {isEmptyObj(selectedChat) && isEmptyObj(selectedGroup) ? (
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
