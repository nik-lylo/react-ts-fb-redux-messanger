import React, { FC } from "react";
import "./userStatus.scss";
interface UserStatusProps {
  online: boolean;
  hover: boolean;
}
const UserStatus: FC<UserStatusProps> = ({ online, hover }) => {
  return (
    <>
      {online ? (
        <div
          style={hover ? { color: "white" } : { color: "#248bf2" }}
          className="user-status__online"
        >
          online
        </div>
      ) : (
        <div
          style={hover ? { color: "white" } : { color: "#71747a" }}
          className="user-status__lastseen"
        >
          last seen 3 minutes ago
        </div>
      )}
    </>
  );
};

export default UserStatus;
