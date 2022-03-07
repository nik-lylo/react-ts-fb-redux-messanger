import React, { FC } from "react";
import { useTypedSelector } from "../../../../lib/hooks/useTypedSelector";
import AvatarRound from "../../AvatarCustom/AvatarRound/AvatarRound";
import "./messageCard.scss";

const MessageCard: FC = () => {
  const { selectedChat } = useTypedSelector((s) => s.chatReducer);
  return (
    <div className="message-card">
      <div className="message-card__avatar">
        <AvatarRound
          width="40px"
          height="40px"
          urlAvatar={selectedChat.urlPhoto}
        />
      </div>
      <div className="message-card__body">
        <div className="message-card__info">
          <div className="message-card__name">{selectedChat.fullname}</div>
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
