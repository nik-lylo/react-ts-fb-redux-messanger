import React, { FC, useEffect, useRef } from "react";
import { isEmptyObj } from "../../../../../lib/helper/isEmptyObj";
import { useActions } from "../../../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import MessageCard from "../../../../UI/cards/MessageCard/MessageCard";
import EmptyMessageWrapper from "../../../../UI/empty_wrapper/EmptyMessageWrapper/EmptyMessageWrapper";
import NoSelectedChatWrapper from "../../../../UI/empty_wrapper/NoSelectedChatWrapper/NoSelectedChatWrapper";
import "./mainContentChatBody.scss";

const MainContentChatBody: FC = () => {
  const { setOnMessageSnapList, setMessageList } = useActions();
  const { userID } = useTypedSelector((s) => s.profileReducer);
  const { selectedChat, messageSnapList, messageList } = useTypedSelector(
    (s) => s.chatReducer
  );

  // !При зміні масиву повідомлень прокручується до низу поля за допомогою ScrollIntoView
  const divRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollIntoView();
    }
  }, [messageList]);

  // !При зміні вибраного чату ми змінюємо ID який слухаємо
  useEffect(() => {
    if (!isEmptyObj(selectedChat))
      setOnMessageSnapList(userID, selectedChat.userID);
  }, [selectedChat]);

  // !При зміні SnapList ми додаємо нові повідомлення в основний масив повідомлень
  useEffect(() => {
    if (messageSnapList.length === 0 && isEmptyObj(selectedChat.lastMessage)) {
      setMessageList(messageSnapList);
      return;
    }
    if (messageSnapList.length === 0) return;
    if (
      messageSnapList[messageSnapList.length - 1].fromID !== userID &&
      messageSnapList[messageSnapList.length - 1].fromID !== selectedChat.userID
    ) {
      return;
    }
    setMessageList(messageSnapList);
  }, [messageSnapList]);

  return (
    <div className="main-content-chat-body">
      {messageList.length === 0 ? (
        <EmptyMessageWrapper />
      ) : (
        messageList.map((message) => (
          <MessageCard key={message.messageID} message={message} />
        ))
      )}
      <div ref={divRef}></div>
    </div>
  );
};

export default MainContentChatBody;
