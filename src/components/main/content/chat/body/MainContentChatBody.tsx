import React, { FC, useEffect } from "react";
import { isEmptyObj } from "../../../../../lib/helper/isEmptyObj";
import { useActions } from "../../../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import MessageCard from "../../../../UI/cards/MessageCard/MessageCard";
import EmptyMessageWrapper from "../../../../UI/empty_wrapper/EmptyMessageWrapper/EmptyMessageWrapper";
import "./mainContentChatBody.scss";

const MainContentChatBody: FC = () => {
  const { setOnMessageSnapList, setMessageList } = useActions();
  const { userID } = useTypedSelector((s) => s.profileReducer);
  const { selectedChat, messageSnapList, messageList } = useTypedSelector(
    (s) => s.chatReducer
  );

  // !При зміні вибраного чату ми змінюємо ID який слухаємо
  useEffect(() => {
    if (!isEmptyObj(selectedChat))
      setOnMessageSnapList(userID, selectedChat.userID);
  }, [selectedChat]);

  // !При зміні SnapList ми додаємо нові повідомлення в основний масив повідомлень
  useEffect(() => {
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
    </div>
  );
};

export default MainContentChatBody;
