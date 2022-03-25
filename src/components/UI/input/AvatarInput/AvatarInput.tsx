import React, { FC } from "react";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import AvatarRound from "../../avatar/AvatarRound/AvatarRound";
import "./avatarInput.scss";
import { useUIStyles } from "../../../../styles/mui-styles/UI-mui";

interface AvatarInputProps {
  avatarFile: any;
  avatarLink: string;
  handleChangeAvatar: any;
  size: string;
}

const AvatarInput: FC<AvatarInputProps> = ({
  avatarFile,
  avatarLink,
  handleChangeAvatar,
  size,
}) => {
  const classes = useUIStyles();
  return (
    <div className="avatar-input">
      <AvatarRound urlAvatar={avatarLink} width={size} height={size} />
      <label
        htmlFor="file-input"
        className={
          avatarFile === null
            ? "avatar-input__label"
            : "avatar-input__label avatar-input__fill"
        }
      >
        <PhotoCameraIcon className={classes.input_avatar_icon} />
      </label>
      <input
        className="avatar-input__input"
        type="file"
        id="file-input"
        onChange={async (e) => {
          await handleChangeAvatar(e);
        }}
      />
    </div>
  );
};

export default AvatarInput;
