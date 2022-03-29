import React, { FC, useRef } from "react";
import { useActions } from "../../../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import CustomLoadButtonSend from "../../../../UI/buttons/CustomLoadButtonSend/CustomLoadButtonSend";
import "./mainContentChatForm.scss";

interface MainContentChatFormProps {
  inputMessage: string;
  setInputMessage: any;
}

const MainContentChatForm: FC<MainContentChatFormProps> = ({
  inputMessage,
  setInputMessage,
}) => {
  const { isMessageLoaded, selectedChat, selectedChatGroup } = useTypedSelector(
    (s) => s.chatReducer
  );
  const { user } = useTypedSelector((s) => s.profileReducer);
  const { setUploadChatMessege, setUploadChatGroupMessage } = useActions();
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFocus(): void {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setInputMessage(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inputMessage === "") {
      return;
    }
    if (selectedChat !== null) {
      setUploadChatMessege(
        user,
        inputMessage,
        selectedChat,
        handleFocus,
        setInputMessage
      );
    }
    if (selectedChatGroup !== null) {
      setUploadChatGroupMessage(
        user,
        inputMessage,
        selectedChatGroup,
        handleFocus,
        setInputMessage
      );
    }
  }
  return (
    <form className="main-content-chat-form" onSubmit={handleSubmit}>
      <button className="main-content-chat-form__clip icon-clip"></button>
      <div className="main-content-chat-form__content">
        <input
          autoFocus={true}
          className="main-content-chat-form__input"
          type="text"
          placeholder="Write a message..."
          value={inputMessage}
          onChange={handleChange}
          disabled={isMessageLoaded}
          ref={inputRef}
        />
        <button className="main-content-chat-form__smile icon-papir-smile"></button>
      </div>
      <CustomLoadButtonSend flag={isMessageLoaded} />
    </form>
  );
};
export default MainContentChatForm;
