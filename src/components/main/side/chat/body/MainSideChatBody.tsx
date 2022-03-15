import React, { FC } from "react";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import { IUser } from "../../../../../lib/models/IUser";
import ChatCard from "../../../../UI/cards/ChatCard/ChatCard";

const MainSideChatBody: FC = () => {
  const { myChatList } = useTypedSelector((s) => s.chatReducer);
  const { usersCollectionList } = useTypedSelector((s) => s.contactReducer);
  return (
    <div className="main-side-chat-body">
      {myChatList.map((it) => {
        const mainChat: IUser = usersCollectionList[it.userID];
        return <ChatCard key={it.userID} chat={it} mainChat={mainChat} />;
      })}
    </div>
  );
};

export default MainSideChatBody;
