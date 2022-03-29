import React, { FC } from "react";
import { useActions } from "../../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../../lib/hooks/useTypedSelector";
import EmptyMessagePin from "./EmptyMessagePin";
import "./emptyMessageWrapper.scss";

interface EmptyMessageWrapperProps {
  setInputMessage: any;
}

const EmptyMessageWrapper: FC<EmptyMessageWrapperProps> = ({
  setInputMessage,
}) => {
  const { selectedChat } = useTypedSelector((s) => s.chatReducer);
  const { usersObjectCollectionList } = useTypedSelector((s) => s.appReducer);
  function handleClick(children: string) {
    setInputMessage(children);
  }

  return (
    <div className="empty-message-wrapper">
      <div className="empty-message-wrapper__img">
        <img
          src={require("../../../../assets/image/main/chat/empty_message.png")}
          alt="Empty Chat"
        />
      </div>

      <div className="empty-message-wrapper__title">No messages yet</div>
      <div className="empty-message-wrapper__subtitle">
        Start a conversation with{" "}
        {usersObjectCollectionList[selectedChat!].name}
      </div>
      <div className="empty-message-wrapper__phrases">
        <EmptyMessagePin handleClick={handleClick}>{`Hello, ${
          usersObjectCollectionList[selectedChat!].name
        }`}</EmptyMessagePin>
        <EmptyMessagePin handleClick={handleClick}>
          Happy to connect!
        </EmptyMessagePin>
        <EmptyMessagePin handleClick={handleClick}>
          What are you working on?
        </EmptyMessagePin>
        <EmptyMessagePin handleClick={handleClick}>
          How can I help?
        </EmptyMessagePin>
      </div>
    </div>
  );
};

export default EmptyMessageWrapper;
