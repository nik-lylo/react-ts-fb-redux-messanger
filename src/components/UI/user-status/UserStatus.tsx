import React, { FC } from "react";
import "./userStatus.scss";
interface UserStatusProps {
  flag: boolean;
  hover: boolean;
}
const UserStatus: FC<UserStatusProps> = ({ flag, hover }) => {
  return (
    <>
      {flag ? (
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
