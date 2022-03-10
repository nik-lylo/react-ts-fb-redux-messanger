import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { RoutesMainEnum } from "../../../../lib/utilits/RoutesEnum";
import "./noSelectedChatWrapper.scss";

const NoSelectedChatWrapper: FC = () => {
  const navigate = useNavigate();
  function handleClickNavigate(): void {
    navigate(RoutesMainEnum.CONTACT);
  }
  return (
    <div className="no-selected-chat-wrapper">
      <div className="no-selected-chat-wrapper__image">
        <img
          src={require("../../../../assets/image/main/chat/no_selected_chat.png")}
          alt="Art"
        />
      </div>
      <div className="no-selected-chat-wrapper__title">
        Pick a chat on the left
      </div>
      <div className="no-selected-chat-wrapper__subtitle">
        Or get done something else
      </div>
      <div className="no-selected-chat-wrapper__buttons wrapper-buttons">
        <div className="wrapper-buttons__item">
          <button className="wrapper-buttons__btn wrapper-buttons__btn_rotate icon-cross"></button>
          <div className="wrapper-buttons__text">Create group</div>
        </div>
        <div className="wrapper-buttons__item">
          <button
            onClick={handleClickNavigate}
            className="wrapper-buttons__btn   icon-add-body"
          ></button>
          <div className="wrapper-buttons__text">Invite friends</div>
        </div>
      </div>
    </div>
  );
};

export default NoSelectedChatWrapper;
