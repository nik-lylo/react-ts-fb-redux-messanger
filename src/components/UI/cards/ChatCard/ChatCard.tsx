import React, { FC } from "react";
import "./chatCard.scss";
import AvatarOnline from "../../AvatarCustom/AvatarOnline/AvatarOnline";
import { useTypedSelector } from "../../../../lib/hooks/useTypedSelector";
import { useActions } from "../../../../lib/hooks/useActions";
import { IUser } from "../../../../lib/models/IUser";
import { isEmptyObj } from "../../../../lib/helper/isEmptyObj";
import { dateFromCreatedAt } from "../../../../lib/helper/dateFromCreatedAt";

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
          <div className="chat-card-content__time">
            {chat.lastMessage.createdAt.seconds === 0
              ? "no time"
              : dateFromCreatedAt(chat.lastMessage.createdAt)?.time}
          </div>
        </div>
        <div className="chat-card-content__message">
          <div className="chat-card-content__last-message">
            {chat.lastMessage.createdAt.seconds === 0 ? (
              <span className="redFont">У вас немає ніяких повідомлень</span>
            ) : (
              chat.lastMessage.text
            )}
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
