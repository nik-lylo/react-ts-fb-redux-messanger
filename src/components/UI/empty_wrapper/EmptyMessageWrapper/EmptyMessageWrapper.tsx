import React, { FC } from "react";
import { useTypedSelector } from "../../../../lib/hooks/useTypedSelector";
import "./emptyMessageWrapper.scss";

const EmptyMessageWrapper: FC = () => {
  const { selectedChat } = useTypedSelector((s) => s.chatReducer);
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
        <div className="empty-message-wrapper__item">
          Hello, {selectedChat.name}
        </div>
        <div className="empty-message-wrapper__item">Happy to connect!</div>
        <div className="empty-message-wrapper__item">
          What are you working on?
        </div>
        <div className="empty-message-wrapper__item">How can I help?</div>
      </div>
    </div>
  );
};

export default EmptyMessageWrapper;
