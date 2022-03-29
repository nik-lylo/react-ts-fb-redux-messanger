import React from "react";
import { useNavigate } from "react-router-dom";
import AvatarRound from "../../../../UI/avatar/AvatarRound/AvatarRound";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import { RoutesMainEnum } from "../../../../../lib/enum/router/RoutesMainEnum";
import "./mainContentChatNav.scss";

const MainContentChatNav = () => {
  const { selectedChat, selectedChatGroup } = useTypedSelector(
    (s) => s.chatReducer
  );

  const { usersObjectCollectionList, groupsObjectCollectionList } =
    useTypedSelector((s) => s.appReducer);

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
              selectedChat === null
                ? groupsObjectCollectionList[selectedChatGroup!].groupAvatar
                : usersObjectCollectionList[selectedChat].urlPhoto
            }
            width="40px"
            height="40px"
          />
        </div>
        <div className="main-content-chat-nav__name">
          {selectedChat === null
            ? groupsObjectCollectionList[selectedChatGroup!].name
            : usersObjectCollectionList[selectedChat].fullname}
          {selectedChatGroup !== null ? (
            <div className="main-content-chat-nav__members">
              {groupsObjectCollectionList[selectedChatGroup].member_amount}
              &nbsp; members
            </div>
          ) : null}
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
