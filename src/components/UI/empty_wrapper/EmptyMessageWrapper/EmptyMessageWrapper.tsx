import React, { FC } from "react";
import { useActions } from "../../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../../lib/hooks/useTypedSelector";
import EmptyMessagePin from "./EmptyMessagePin";
import "./emptyMessageWrapper.scss";

const EmptyMessageWrapper: FC = () => {
  const { selectedChat } = useTypedSelector((s) => s.chatReducer);
  const { setChatInputText } = useActions();
  function handleClick(children: string) {
    setChatInputText(children);
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
        Start a conversation with {selectedChat.name}
      </div>
      <div className="empty-message-wrapper__phrases">
        <EmptyMessagePin
          handleClick={handleClick}
        >{`Hello, ${selectedChat.name}`}</EmptyMessagePin>
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
