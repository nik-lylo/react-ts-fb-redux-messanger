import React, { FC } from "react";
import {
  IMessageChat,
  IMessageGroupChat,
} from "../../../../lib/models/IMessage";
import AvatarRound from "../../avatar/AvatarRound/AvatarRound";

import "./messageCard.scss";

interface MessageCardProps {
  message: IMessageChat | IMessageGroupChat;
}

const MessageCard: FC<MessageCardProps> = ({ message }) => {
  return (
    <div className="message-card">
      <div className="message-card__avatar">
        <AvatarRound width="40px" height="40px" urlAvatar={message.urlPhoto} />
      </div>
      <div className="message-card__body">
        <div className="message-card__info">
          <div className="message-card__name">{message.fullname}</div>
          <div className="message-card__time">{message.time}</div>
        </div>
        <div className="message-card__text">{message.text}</div>
      </div>
    </div>
  );
};

export default MessageCard;
