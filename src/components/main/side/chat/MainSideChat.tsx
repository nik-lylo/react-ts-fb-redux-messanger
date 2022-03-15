import React, { FC, useEffect } from "react";
import { useActions } from "../../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../../lib/hooks/useTypedSelector";
import { IUser } from "../../../../lib/models/IUser";
import MainSideChatBody from "./body/MainSideChatBody";
import MainSideChatHeader from "./header/MainSideChatHeader";

const MainSideChat: FC = () => {
  const {
    setOnChatSnapList,
    setMyChatList,
    setControllMyChatList,
    setSelectedChat,
    setMessageList,
    setMessageSnapList,
    setSelectedContact,
  } = useActions();
  const { user } = useTypedSelector((s) => s.profileReducer);
  const { myChatSnapList, myChatList, selectedChat } = useTypedSelector(
    (s) => s.chatReducer
  );

  // !Включаємо слухання нашої колекції друзів
  useEffect(() => {
    setOnChatSnapList(user.userID);
    return () => {
      setSelectedContact({} as IUser);
      setSelectedChat({} as IUser);
      setMyChatList([]);
      setMessageList([]);
      setMessageSnapList([]);
    };
  }, []);

  // !При кожній зміні нашого масива myChatSnapList ми керуємо ним і передаємо дані в основний масив
  useEffect(() => {
    setControllMyChatList(
      myChatList,
      myChatSnapList,
      selectedChat,
      user.userID
    );
  }, [myChatSnapList]);

  return (
    <div className="main-side-chat">
      <MainSideChatHeader />
      <MainSideChatBody />
    </div>
  );
};

export default MainSideChat;
