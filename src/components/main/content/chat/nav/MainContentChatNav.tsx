import React from "react";
import { useNavigate } from "react-router-dom";
import { isEmptyObj } from "../../../../../lib/helper/isEmptyObj";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import { RoutesMainEnum } from "../../../../../lib/utilits/RoutesEnum";
import AvatarRound from "../../../../UI/AvatarCustom/AvatarRound/AvatarRound";
import "./mainContentChatNav.scss";

const MainContentChatNav = () => {
  const { selectedChat } = useTypedSelector((s) => s.chatReducer);
  const { selectedGroup } = useTypedSelector((s) => s.groupReducer);
  const navigate = useNavigate();

  function handleClickNavigate(): void {
    navigate(RoutesMainEnum.CONTACT);
  }

  return (
    <div className="main-content-chat-nav">
      <div className="main-content-chat-nav__profile">
        <div className="main-content-chat-nav__avatar">
          <AvatarRound
            urlAvatar={
              isEmptyObj(selectedChat)
                ? selectedGroup.groupAvatar
                : selectedChat.urlPhoto
            }
            width="40px"
            height="40px"
          />
        </div>
        <div className="main-content-chat-nav__name">
          {isEmptyObj(selectedChat)
            ? selectedGroup.name
            : selectedChat.fullname}
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
