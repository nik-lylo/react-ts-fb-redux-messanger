import React, { FC, useEffect, useState } from "react";
import { useActions } from "../../../../lib/hooks/useActions";
import MainSideChatBody from "./body/MainSideChatBody";
import MainSideChatHeader from "./header/MainSideChatHeader";

const MainSideChat: FC = () => {
  const { setSelectedChat, setSelectedChatGroup } = useActions();
  const [searchChatInput, setSearchChatInput] = useState<string>("");
  useEffect(() => {
    return () => {
      setSelectedChat(null);
      setSelectedChatGroup(null);
    };
  }, []);

  return (
    <div className="main-side-chat">
      <MainSideChatHeader
        seachInput={searchChatInput}
        setSearchInput={setSearchChatInput}
      />
      <MainSideChatBody searchChatInput={searchChatInput} />
    </div>
  );
};

export default MainSideChat;
