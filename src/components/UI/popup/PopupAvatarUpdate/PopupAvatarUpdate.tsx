import React, { FC, FormEvent, useState } from "react";
import { useActions } from "../../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../../lib/hooks/useTypedSelector";
import AvatarRound from "../../AvatarCustom/AvatarRound/AvatarRound";
import CustomLoadingButton from "../../buttons/CustomLoadingButton/CustomLoadingButton";
import InputFileCustom from "../../input/InputFileCustom/InputFileCustom";
import "./popupAvatarUpdate.scss";

const PopupAvatarUpdate: FC = () => {
  const { setUpdateProfileUserPhoto } = useActions();

  const { user, editLoading } = useTypedSelector((s) => s.profileReducer);
  const [avatar, setAvatar] = useState(null);

  function rewrite() {
    setAvatar(null);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (avatar === null) {
      return;
    }
    setUpdateProfileUserPhoto(user.userID, avatar, rewrite);
  }

  return (
    <form className="popup-avatar-update" onSubmit={handleSubmit}>
      <div className="popup-avatar-update__container">
        <div className="popup-avatar-update__title">Update Avatar</div>
        <div className="popup-avatar-update__avatar">
          <AvatarRound width="100px" height="100px" urlAvatar={user.urlPhoto} />
        </div>
        <div className="popup-avatar-update__subtitle">Select your photo</div>
        <div className="popup-avatar-update__input">
          <InputFileCustom setAvatar={setAvatar} />
        </div>
        <div className="popup-avatar-update__button">
          <CustomLoadingButton isLoadingButton={editLoading}>
            Update Avatar
          </CustomLoadingButton>
        </div>
      </div>
    </form>
  );
};

export default PopupAvatarUpdate;
