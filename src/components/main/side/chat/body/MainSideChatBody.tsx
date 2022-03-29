import React, { FC, useEffect, useState } from "react";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import ChatCard from "../../../../UI/cards/ChatCard/ChatCard";
import ChatGroupCard from "../../../../UI/cards/ChatGroupCard/ChatGroupCard";

const MainSideChatBody: FC = () => {
  const [allChat, setAllChat] = useState<any[]>([]);
  const { friendsCollectionList, myGroupsList } = useTypedSelector(
    (s) => s.appReducer
  );

  useEffect(() => {
    const all = [...friendsCollectionList, ...myGroupsList];
    all.sort(
      (a: any, b: any) => b.lastMessage.createdAt - a.lastMessage.createdAt
    );
    setAllChat(all);
  }, [friendsCollectionList, myGroupsList]);

  return (
    <div className="main-side-chat-body">
      {allChat.map((item: any) => {
        if (item.admin === undefined) {
          return <ChatCard key={item.userID} chat={item} />;
        }
        return <ChatGroupCard group={item} key={item.groupId} />;
      })}
    </div>
  );
};

export default MainSideChatBody;
