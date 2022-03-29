import React, { FC } from "react";
import AvatarInput from "../../../../../UI/input/AvatarInput/AvatarInput";

interface MCSettingsEditAvatarProps {
  avatarFile: any;
  avatarLink: string;
  handleChangeAvatar: any;
}

const MCSettingsEditAvatar: FC<MCSettingsEditAvatarProps> = ({
  avatarFile,
  avatarLink,
  handleChangeAvatar,
}) => {
  return (
    <div className="main-content-settings-edit__avatar settings-edit-avatar">
      <div className=" settings-edit-avatar__input">
        <AvatarInput
          avatarFile={avatarFile}
          avatarLink={avatarLink}
          size="96px"
          handleChangeAvatar={handleChangeAvatar}
        />
      </div>
      {avatarFile !== null && avatarFile !== undefined && (
        <div className="settings-edit-avatar__text">
          You have changed your avatar!!!.
        </div>
      )}
    </div>
  );
};

export default MCSettingsEditAvatar;
