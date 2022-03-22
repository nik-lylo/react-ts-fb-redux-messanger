import React, { FC } from "react";
import "./chatCard.scss";
import AvatarOnline from "../../AvatarCustom/AvatarOnline/AvatarOnline";
import { useTypedSelector } from "../../../../lib/hooks/useTypedSelector";
import { useActions } from "../../../../lib/hooks/useActions";
import { IUser } from "../../../../lib/models/IUser";
import { dateFromCreatedAt } from "../../../../lib/helper/dateFromCreatedAt";
import { uploadUnreadFriend } from "../../../../api/chat/uploadUnreadFriend";
import { isEmpty } from "@firebase/util";
import { IGroup } from "../../../../lib/models/IGroup";

interface ChatCardProps {
  chat: IUser;
  mainChat: IUser;
}

const ChatCard: FC<ChatCardProps> = ({ chat, mainChat }) => {
  const { user } = useTypedSelector((s) => s.profileReducer);
  const { selectedChat } = useTypedSelector((s) => s.chatReducer);
  const { selectedGroup } = useTypedSelector((s) => s.groupReducer);
  const { setSelectedChat, setSelectedGroup } = useActions();

  function handleClick() {
    uploadUnreadFriend(user.userID, chat.userID);
    setSelectedChat({ ...chat, unread: 0 });
    if (!isEmpty(selectedGroup)) {
      setSelectedGroup({} as IGroup);
    }
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
          contact={mainChat}
          hover={chat.userID === selectedChat.userID}
          width="56px"
          height="56px"
        />
      </div>
      <div className="chat-card__content chat-card-content">
        <div className="chat-card-content__profile">
          <div className="chat-card-content__name">{mainChat.fullname}</div>
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
