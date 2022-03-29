import React, { FC } from "react";
import { IGroup } from "../../../../lib/models/IGroup";
import { useActions } from "../../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../../lib/hooks/useTypedSelector";
// import AvatarRound from "../../AvatarCustom/AvatarRound/AvatarRound";
import "./chatGroupCard.scss";
import { dateFromCreatedAt } from "../../../../lib/helper/dateFromCreatedAt";
import { IUser } from "../../../../lib/models/IUser";
import { isEmpty } from "@firebase/util";
import AvatarRound from "../../avatar/AvatarRound/AvatarRound";

interface ChatGroupCardProps {
  group: IGroup;
}

const ChatGroupCard: FC<ChatGroupCardProps> = ({ group }) => {
  const { selectedChat, selectedChatGroup } = useTypedSelector(
    (s) => s.chatReducer
  );

  const { setSelectedChat, setSelectedChatGroup } = useActions();

  function handleClick() {
    setSelectedChatGroup(group.groupId);
    if (selectedChat !== null) {
      setSelectedChat(null);
    }
  }

  return (
    <div
      onClick={handleClick}
      className={
        group.groupId === selectedChatGroup
          ? "chat-group-card chat-group-card_selected"
          : "chat-group-card"
      }
    >
      <div className="chat-group-card__avatar">
        <AvatarRound width="56px" height="56px" urlAvatar={group.groupAvatar} />
      </div>
      <div className="chat-group-card__content chat-group-card-content">
        <div className="chat-group-card-content__profile">
          <div className="chat-group-card-content__name">{group.name}</div>
          <div className="chat-group-card-content__time">
            {group.lastMessage.text === "__No message"
              ? "20:30"
              : dateFromCreatedAt(group.lastMessage.createdAt)?.time}
          </div>
        </div>
        <div className="chat-group-card-content__message">
          <div className="chat-group-card-content__last-message">
            {group.lastMessage.text === "__No message" ? (
              <span className="redFont">У вас немає ніяких повідомлень</span>
            ) : (
              <div className="chat-group-card-content-last-message__text">
                <span className="mr5">{`${group.lastMessage.fullname}:`}</span>
                {group.lastMessage.text}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatGroupCard;

{
  /* {group.unread === undefined || chat.unread === 0 ? null : (
            <div className="chat-group-card-content__num">
              <span>{chat.unread}</span>
            </div>
          )} */
}
