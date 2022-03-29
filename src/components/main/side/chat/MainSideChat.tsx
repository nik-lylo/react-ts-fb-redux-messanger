import React, { FC, useEffect } from "react";
import { useActions } from "../../../../lib/hooks/useActions";
import MainSideChatBody from "./body/MainSideChatBody";
import MainSideChatHeader from "./header/MainSideChatHeader";

const MainSideChat: FC = () => {
  const { setSelectedChat, setSelectedChatGroup } = useActions();

  useEffect(() => {
    return () => {
      setSelectedChat(null);
      setSelectedChatGroup(null);
    };
  }, []);

  return (
    <div className="main-side-chat">
      <MainSideChatHeader />
      <MainSideChatBody />
    </div>
  );
};

export default MainSideChat;
