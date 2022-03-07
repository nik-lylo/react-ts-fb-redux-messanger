import React, { FC } from "react";
import "./avatarRound.scss";

interface AvatarRoundProps {
  urlAvatar: string;
  width: string;
  height: string;
}

const AvatarRound: FC<AvatarRoundProps> = ({ urlAvatar, width, height }) => {
  return (
    <div
      className="avatar-round"
      style={{ width: `${width}`, height: `${height}` }}
    >
      <img src={urlAvatar} alt="Avatar" />
    </div>
  );
};

export default AvatarRound;
