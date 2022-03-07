import React, { FC } from "react";
import "./chatCard.scss";
import AvatarOnline from "../../AvatarCustom/AvatarOnline/AvatarOnline";
import { useTypedSelector } from "../../../../lib/hooks/useTypedSelector";
import { useActions } from "../../../../lib/hooks/useActions";
import { IUser } from "../../../../lib/models/IUser";

interface ChatCardProps {
  chat: IUser;
}

const ChatCard: FC<ChatCardProps> = ({ chat }) => {
  const { selectedChat } = useTypedSelector((s) => s.chatReducer);
  const { setSelectedChat } = useActions();
  function handleClick() {
    setSelectedChat(chat);
  }
  return (
    <div
      onClick={handleClick}
      className={
        chat.userID === selectedChat.userID
          ? "chat-card chat-card_selected"
          : "chat-card"
      }
    >
      <div className="chat-card__avatar">
        <AvatarOnline
          contact={chat}
          hover={chat.userID === selectedChat.userID}
          width="56px"
          height="56px"
        />
      </div>
      <div className="chat-card__content chat-card-content">
        <div className="chat-card-content__profile">
          <div className="chat-card-content__name">{chat.fullname}</div>
          <div className="chat-card-content__time">18:33</div>
        </div>
        <div className="chat-card-content__message">
          <div className="chat-card-content__last-message">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            tenetur, officia veniam temporibus culpa alias magnam illum nam
            aspernatur fugiat nihil totam distinctio, repudiandae ipsa maxime
            corrupti corporis vitae eveniet odio. Iure officiis laudantium omnis
            eos, quis magnam aliquid expedita quo vel laborum molestias!
          </div>
          <div className="chat-card-content__num">
            <span>5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
