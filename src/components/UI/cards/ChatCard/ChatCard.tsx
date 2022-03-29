import React, { FC } from "react";
import { useTypedSelector } from "../../../../lib/hooks/useTypedSelector";
import { IFriendsUser } from "../../../../lib/models/IFriends";
import { dateFromCreatedAt } from "../../../../lib/helper/dateFromCreatedAt";
import AvatarOnline from "../../avatar/AvatarOnline/AvatarOnline";
import { useActions } from "../../../../lib/hooks/useActions";
import "./chatCard.scss";
import { uploadUnreadFriend } from "../../../../api/chat/uploadUnreadFriend";

interface ChatCardProps {
  chat: IFriendsUser;
}

const ChatCard: FC<ChatCardProps> = ({ chat }) => {
  const { selectedChat, selectedChatGroup } = useTypedSelector(
    (s) => s.chatReducer
  );
  const { user } = useTypedSelector((s) => s.profileReducer);
  const { setSelectedChat, setSelectedChatGroup } = useActions();

  function handleClick() {
    setSelectedChat(chat.userID);
    uploadUnreadFriend(user.userID, chat.userID);
    if (selectedChatGroup !== null) {
      setSelectedChatGroup(null);
    }
  }
  return (
    <div
      onClick={handleClick}
      className={
        chat.userID === selectedChat
          ? "chat-card chat-card_selected"
          : "chat-card"
      }
    >
      <div className="chat-card__avatar">
        <AvatarOnline
          contact={chat}
          hover={chat.userID === selectedChat}
          width="56px"
          height="56px"
        />
      </div>
      <div className="chat-card__content chat-card-content">
        <div className="chat-card-content__profile">
          <div className="chat-card-content__name">{chat.fullname}</div>
          <div className="chat-card-content__time">
            {chat.lastMessage.text === "__No message"
              ? "no time"
              : dateFromCreatedAt(chat.lastMessage.createdAt)?.time}
          </div>
        </div>
        <div className="chat-card-content__message">
          <div className="chat-card-content__last-message">
            {chat.lastMessage.text === "__No message" ? (
              <span className="redFont">У вас немає ніяких повідомлень</span>
            ) : (
              chat.lastMessage.text
            )}
          </div>
          {chat.unread === undefined || chat.unread === 0 ? null : (
            <div className="chat-card-content__num">
              <span>{chat.unread}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
