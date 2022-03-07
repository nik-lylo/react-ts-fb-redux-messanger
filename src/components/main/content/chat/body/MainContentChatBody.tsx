import React, { FC } from "react";
import MessageCard from "../../../../UI/cards/MessageCard/MessageCard";
import EmptyMessageWrapper from "../../../../UI/empty_wrapper/EmptyMessageWrapper/EmptyMessageWrapper";
import "./mainContentChatBody.scss";

const MainContentChatBody: FC = () => {
  return (
    <div className="main-content-chat-body">
      <EmptyMessageWrapper />
    </div>
  );
};

export default MainContentChatBody;
