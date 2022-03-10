import React from "react";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import {
  RoutesMainEnum,
  RoutesNames,
} from "../../../../../lib/utilits/RoutesEnum";
import AvatarRound from "../../../../UI/AvatarCustom/AvatarRound/AvatarRound";
import "./mainContentChatNav.scss";

const MainContentChatNav = () => {
  const { selectedChat } = useTypedSelector((s) => s.chatReducer);
  const navigate = useNavigate();

  function handleClickNavigate(): void {
    navigate(RoutesMainEnum.CONTACT);
  }

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
        <button
          onClick={handleClickNavigate}
          className="icon-add-body"
        ></button>
        <button className="icon-dots-vertical"></button>
      </div>
    </div>
  );
};

export default MainContentChatNav;
