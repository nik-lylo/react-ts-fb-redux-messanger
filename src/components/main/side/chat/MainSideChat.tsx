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
  const { userID } = useTypedSelector((s) => s.profileReducer);
  const { myChatSnapList, myChatList } = useTypedSelector((s) => s.chatReducer);

  // !Включаємо слухання нашої колекції друзів
  useEffect(() => {
    setOnChatSnapList(userID);
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
    setControllMyChatList(myChatList, myChatSnapList);
  }, [myChatSnapList]);

  return (
    <div className="main-side-chat">
      <MainSideChatHeader />
      <MainSideChatBody />
    </div>
  );
};

export default MainSideChat;
