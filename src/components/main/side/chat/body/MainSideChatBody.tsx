import React, { FC } from "react";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import ChatCard from "../../../../UI/cards/ChatCard/ChatCard";

const MainSideChatBody: FC = () => {
  const { myChatList } = useTypedSelector((s) => s.chatReducer);
  return (
    <div className="main-side-chat-body">
      {myChatList.map((it) => (
        <ChatCard key={it.userID} chat={it} />
      ))}
    </div>
  );
};

export default MainSideChatBody;
