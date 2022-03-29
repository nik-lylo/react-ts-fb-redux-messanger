import React, { FC, useEffect, useRef, useState } from "react";
import { useActions } from "../../../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import {
  IMessageChat,
  IMessageGroupChat,
} from "../../../../../lib/models/IMessage";
import MessageCard from "../../../../UI/cards/MessageCard/MessageCard";
import BarLoader from "../../../../UI/loader/BarLoader/BarLoader";
import EmptyMessageWrapper from "../../../../UI/wrapper/EmptyMessageWrapper/EmptyMessageWrapper";
import "./mainContentChatBody.scss";

interface MainContentChatBodyProps {
  setInputMessage: any;
}

const MainContentChatBody: FC<MainContentChatBodyProps> = ({
  setInputMessage,
}) => {
  const {
    chatMessageList,
    chatMessageSnap,
    chatGroupMessageList,
    chatGroupMessageSnap,
    selectedChat,
    selectedChatGroup,
  } = useTypedSelector((s) => s.chatReducer);
  const { isMessageListLoaded } = useTypedSelector((s) => s.chatReducer);
  const { user } = useTypedSelector((s) => s.profileReducer);

  const { setChatControllerChatMessage, setChatControllerChatGroupMessage } =
    useActions();

  useEffect(() => {
    if (selectedChat === null) return;
    setChatControllerChatMessage(chatMessageSnap, user.userID, selectedChat);
  }, [chatMessageSnap]);

  useEffect(() => {
    setChatControllerChatGroupMessage(chatGroupMessageSnap);
  }, [chatGroupMessageSnap]);

  // !При зміні масиву повідомлень прокручується до низу поля за допомогою ScrollIntoView
  const divRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollIntoView();
    }
  }, [chatGroupMessageList, chatMessageList, isMessageListLoaded]);

  return (
    <div className="main-content-chat-body">
      {isMessageListLoaded ? (
        <div className="main-content-chat-body__loader">
          <BarLoader blockSize="30px" />
        </div>
      ) : (
        <>
          {selectedChat && chatMessageList.length === 0 && (
            <EmptyMessageWrapper setInputMessage={setInputMessage} />
          )}
          {selectedChat &&
            chatMessageList.map((item: IMessageChat) => (
              <MessageCard message={item} key={item.messageID} />
            ))}
          {selectedChatGroup &&
            chatGroupMessageList.map((item: IMessageGroupChat) => (
              <MessageCard message={item} key={item.messageID} />
            ))}
        </>
      )}

      <div ref={divRef}></div>
    </div>
  );
};

export default MainContentChatBody;
