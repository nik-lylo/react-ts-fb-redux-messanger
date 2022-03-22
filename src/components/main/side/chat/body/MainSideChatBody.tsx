import React, { FC, useEffect, useState } from "react";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import { IGroup } from "../../../../../lib/models/IGroup";
import { IUser } from "../../../../../lib/models/IUser";
import ChatCard from "../../../../UI/cards/ChatCard/ChatCard";
import ChatGroupCard from "../../../../UI/cards/ChatGroupCard/ChatGroupCard";

const MainSideChatBody: FC = () => {
  const [allChat, setAllChat] = useState<any[]>([]);
  const { groupCollectionList, myGroup } = useTypedSelector(
    (s) => s.groupReducer
  );
  const { user } = useTypedSelector((s) => s.profileReducer);
  const { myChatList } = useTypedSelector((s) => s.chatReducer);
  const { usersCollectionList } = useTypedSelector((s) => s.contactReducer);

  useEffect(() => {
    const groupList: IGroup[] = [];
    user.myGroup.map((item: string) => {
      groupList.push(groupCollectionList[item]);
    });
    const allResult = [...groupList, ...myChatList];
    allResult.sort(
      (a, b) =>
        b.lastMessage.createdAt.seconds - a.lastMessage.createdAt.seconds
    );
    console.log(allResult);

    setAllChat(allResult);
  }, [groupCollectionList, myChatList]);

  return (
    <div className="main-side-chat-body">
      {allChat.map((item: any) => {
        if (item.admin === undefined) {
          const mainChat: IUser = usersCollectionList[item.userID];
          return <ChatCard key={item.userID} chat={item} mainChat={mainChat} />;
        }
        return <ChatGroupCard group={item} key={item.groupId} />;
      })}
    </div>
  );
};

export default MainSideChatBody;
