import React, { FC } from "react";
import { useTypedSelector } from "../../../../lib/hooks/useTypedSelector";
import { IMessage } from "../../../../lib/models/IMessage";
import AvatarRound from "../../AvatarCustom/AvatarRound/AvatarRound";
import "./messageCard.scss";

interface MessageCardProps {
  message: IMessage;
}

const MessageCard: FC<MessageCardProps> = ({ message }) => {
  return (
    <div className="message-card">
      <div className="message-card__avatar">
        <AvatarRound width="40px" height="40px" urlAvatar={message.urlPhoto} />
      </div>
      <div className="message-card__body">
        <div className="message-card__info">
          <div className="message-card__name">{message.fullTime}</div>
          <div className="message-card__time">18:20</div>
        </div>
        <div className="message-card__text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
          aut, adipisci cum quisquam commodi maiores consequatur excepturi fuga
          eligendi cupiditate qui facere quo suscipit explicabo iure animi eum
          optio quam aliquid nobis nemo!
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
