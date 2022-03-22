import React, { FC, useEffect, useRef, useState } from "react";
import { isEmptyObj } from "../../../../../lib/helper/isEmptyObj";
import { useActions } from "../../../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import MessageCard from "../../../../UI/cards/MessageCard/MessageCard";
import EmptyMessageWrapper from "../../../../UI/empty_wrapper/EmptyMessageWrapper/EmptyMessageWrapper";
import "./mainContentChatBody.scss";

const MainContentChatBody: FC = () => {
  const {
    setOnMessageSnapList,
    setOnMessageGroupSnapList,
    setControllMyMessageList,
    setControllMyGroupMessageList,
  } = useActions();
  const { user } = useTypedSelector((s) => s.profileReducer);
  const { selectedGroup } = useTypedSelector((s) => s.groupReducer);

  const {
    selectedChat,
    messageSnapList,
    messageList,
    messageGroupList,
    messageGroupSnapList,
  } = useTypedSelector((s) => s.chatReducer);

  // !При зміні масиву повідомлень прокручується до низу поля за допомогою ScrollIntoView
  const divRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollIntoView();
    }
  }, [messageList, messageGroupList]);

  // !При зміні вибраного чату ми змінюємо ID який слухаємо
  useEffect(() => {
    if (isEmptyObj(selectedChat)) {
      return;
    }
    setOnMessageSnapList(user.userID, selectedChat.userID);
  }, [selectedChat]);

  // !При зміні вибраної групи ми змінюємо ID групи яку слухаємо
  useEffect(() => {
    if (isEmptyObj(selectedGroup)) {
      return;
    }
    setOnMessageGroupSnapList(selectedGroup.groupId);
  }, [selectedGroup]);

  // !При зміні SnapList ми додаємо нові повідомлення в основний масив повідомлень
  useEffect(() => {
    if (isEmptyObj(selectedChat)) {
      return;
    }
    setControllMyMessageList(messageSnapList, selectedChat, user.userID);
  }, [messageSnapList]);

  // !При зміні SnapGroupList ми додаємо нові повідомлення в основний масив повідомлень
  useEffect(() => {
    if (isEmptyObj(selectedGroup)) {
      return;
    }
    setControllMyGroupMessageList(messageGroupSnapList, selectedGroup);
  }, [messageGroupSnapList]);

  return (
    <div className="main-content-chat-body">
      {isEmptyObj(selectedChat) ? null : messageList.length === 0 ? (
        <EmptyMessageWrapper />
      ) : (
        messageList.map((message) => (
          <MessageCard key={message.messageID} message={message} />
        ))
      )}

      {isEmptyObj(selectedGroup) ? null : messageGroupList.length === 0 ? (
        <EmptyMessageWrapper />
      ) : (
        messageGroupList.map((mess) => (
          <MessageCard key={mess.messageID} message={mess} />
        ))
      )}
      <div ref={divRef}></div>
    </div>
  );
};

export default MainContentChatBody;
