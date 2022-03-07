import React, { FC, useEffect } from "react";
import { useActions } from "../../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../../lib/hooks/useTypedSelector";
import MainSideChatBody from "./body/MainSideChatBody";
import MainSideChatHeader from "./header/MainSideChatHeader";

const MainSideChat: FC = () => {
  const { setFetchMyChatList } = useActions();
  const { userID } = useTypedSelector((s) => s.profileReducer);

  useEffect(() => {
    setFetchMyChatList(userID);
  }, []);

  return (
    <div className="main-side-chat">
      <MainSideChatHeader />
      <MainSideChatBody />
    </div>
  );
};

export default MainSideChat;
