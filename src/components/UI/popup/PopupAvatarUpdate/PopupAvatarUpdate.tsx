import React, { FC, FormEvent, MouseEvent, useState } from "react";
import { useActions } from "../../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../../lib/hooks/useTypedSelector";
import AlertCustom from "../../alert/Alert/AlertCustom";
import AvatarRound from "../../AvatarCustom/AvatarRound/AvatarRound";
import CustomLoadingButton from "../../buttons/CustomLoadingButton/CustomLoadingButton";
import InputFileCustom from "../../input/InputFileCustom/InputFileCustom";
import "./popupAvatarUpdate.scss";

interface PopupAvatarUpdateProps {
  isOpen: boolean;
}

const PopupAvatarUpdate: FC<PopupAvatarUpdateProps> = ({ isOpen }) => {
  const {
    setUpdateProfileUserPhoto,
    setPopupAvatarUpdateOpen,
    setAvatarUpdateError,
  } = useActions();
  const { user, avatarUpdateError, avatarUpdateLoading } = useTypedSelector(
    (s) => s.profileReducer
  );
  const [avatar, setAvatar] = useState(null);

  function rewrite() {
    setAvatar(null);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (avatar === null || avatar === undefined) {
      setAvatarUpdateError("Error ... Please select a photo...");
      setTimeout(() => {
        setAvatarUpdateError(null);
      }, 2000);
      return;
    }
    setUpdateProfileUserPhoto(user.userID, avatar, rewrite);
  }

  function handleClose(e: MouseEvent<HTMLButtonElement>) {
    setPopupAvatarUpdateOpen(false);
  }

  return (
    <div
      className={
        isOpen
          ? "popup-avatar-update popup-avatar-update_open"
          : "popup-avatar-update"
      }
    >
      <form className="popup-avatar-update__form" onSubmit={handleSubmit}>
        <div className="popup-avatar-update__title">Update Avatar</div>
        <div className="popup-avatar-update__avatar">
          <AvatarRound width="100px" height="100px" urlAvatar={user.urlPhoto} />
        </div>
        <div className="popup-avatar-update__subtitle">Select your photo</div>
        <div className="popup-avatar-update__input">
          <InputFileCustom value={avatar} setAvatar={setAvatar} />
        </div>
        <button
          onClick={handleClose}
          className="popup-avatar-update__close icon-cross"
          type="reset"
        ></button>
        <div className="popup-avatar-update__button">
          <CustomLoadingButton isLoadingButton={avatarUpdateLoading}>
            Update Avatar
          </CustomLoadingButton>
        </div>
        {avatarUpdateError && (
          <div className="popup-avatar-update__alert">
            <AlertCustom>{avatarUpdateError}</AlertCustom>
          </div>
        )}
      </form>
    </div>
  );
};

export default PopupAvatarUpdate;
