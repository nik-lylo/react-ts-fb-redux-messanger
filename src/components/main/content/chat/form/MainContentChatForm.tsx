import React, { FC, useState } from "react";
import "./mainContentChatForm.scss";

const MainContentChatForm: FC = () => {
  const [inputText, setInputText] = useState<string>("");
  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setInputText(e.target.value);
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <form className="main-content-chat-form">
      <button className="main-content-chat-form__clip icon-clip"></button>
      <div className="main-content-chat-form__content">
        <input
          autoFocus
          className="main-content-chat-form__input"
          type="text"
          placeholder="Write a message..."
          value={inputText}
          onChange={handleChange}
        />
        <button className="main-content-chat-form__smile icon-papir-smile"></button>
      </div>
      <button
        className="main-content-chat-form__send icon-send-mail"
        type="submit"
      ></button>
    </form>
  );
};
export default MainContentChatForm;
