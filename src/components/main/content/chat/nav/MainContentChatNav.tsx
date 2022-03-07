import React from "react";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import AvatarRound from "../../../../UI/AvatarCustom/AvatarRound/AvatarRound";
import "./mainContentChatNav.scss";

const MainContentChatNav = () => {
  const { selectedChat } = useTypedSelector((s) => s.chatReducer);
  return (
    <div className="main-content-chat-nav">
      <div className="main-content-chat-nav__profile">
        <div className="main-content-chat-nav__avatar">
          <AvatarRound
            urlAvatar={selectedChat.urlPhoto}
            width="40px"
            height="40px"
          />
        </div>
        <div className="main-content-chat-nav__name">
          {selectedChat.fullname}
        </div>
      </div>
      <div className="main-content-chat-nav__menu">
        <button className="icon-add-body"></button>
        <button className="icon-dots-vertical"></button>
      </div>
    </div>
  );
};

export default MainContentChatNav;
