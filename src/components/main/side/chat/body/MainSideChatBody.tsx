import React, { FC, useEffect, useState } from "react";
import { filterContactUserArray } from "../../../../../lib/controller/contact/filterContactUserArray";
import { filterContactUserByString } from "../../../../../lib/controller/contact/filterContactUserByString";
import { filterGroupByString } from "../../../../../lib/controller/group/filterGroupByString";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import ChatCard from "../../../../UI/cards/ChatCard/ChatCard";
import ChatGroupCard from "../../../../UI/cards/ChatGroupCard/ChatGroupCard";

interface MainSideChatBodyProps {
  searchChatInput: string;
}

const MainSideChatBody: FC<MainSideChatBodyProps> = ({ searchChatInput }) => {
  const [allChat, setAllChat] = useState<any[]>([]);
  const { friendsCollectionList, myGroupsList } = useTypedSelector(
    (s) => s.appReducer
  );

  useEffect(() => {
    if (searchChatInput === "") {
      const all = [...friendsCollectionList, ...myGroupsList];
      all.sort(
        (a: any, b: any) => b.lastMessage.createdAt - a.lastMessage.createdAt
      );
      setAllChat(all);
      return;
    }
    const filteredFriendsCollectionList = filterContactUserByString(
      searchChatInput,
      friendsCollectionList
    );
    const filterMyGroupsList = filterGroupByString(
      myGroupsList,
      searchChatInput
    );
    const all = [...filteredFriendsCollectionList, ...filterMyGroupsList];
    all.sort(
      (a: any, b: any) => b.lastMessage.createdAt - a.lastMessage.createdAt
    );
    setAllChat(all);
  }, [friendsCollectionList, myGroupsList, searchChatInput]);

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
