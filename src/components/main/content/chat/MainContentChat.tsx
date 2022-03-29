import React, { FC, useEffect, useState } from "react";
import { useActions } from "../../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../../lib/hooks/useTypedSelector";
import NoSelectedChatWrapper from "../../../UI/wrapper/NoSelectedChatWrapper/NoSelectedChatWrapper";
import MainContentChatBody from "./body/MainContentChatBody";
import MainContentChatForm from "./form/MainContentChatForm";
import MainContentChatNav from "./nav/MainContentChatNav";

const MainContentChat: FC = () => {
  const [inputMessage, setInputMessage] = useState("");
  const { selectedChat, selectedChatGroup } = useTypedSelector(
    (s) => s.chatReducer
  );
  const { user } = useTypedSelector((s) => s.profileReducer);
  const {
    setListenerChatMessage,
    setListenerChatGroupMessage,
    setChatGroupMessageList,
    setIsMessageListLoaded,
  } = useActions();

  useEffect(() => {
    if (selectedChat === null) {
      return;
    }
    setIsMessageListLoaded(true);
    setListenerChatMessage(user.userID, selectedChat);
  }, [selectedChat]);

  useEffect(() => {
    if (selectedChatGroup === null) {
      setChatGroupMessageList([]);
      return;
    }
    setIsMessageListLoaded(true);
    setListenerChatGroupMessage(selectedChatGroup);
  }, [selectedChatGroup]);

  return (
    <div className="main-content-chat">
      {!selectedChat && !selectedChatGroup ? (
        <NoSelectedChatWrapper />
      ) : (
        <>
          <MainContentChatNav />
          <MainContentChatBody setInputMessage={setInputMessage} />
          <MainContentChatForm
            inputMessage={inputMessage}
            setInputMessage={setInputMessage}
          />
        </>
      )}
    </div>
  );
};

export default MainContentChat;
