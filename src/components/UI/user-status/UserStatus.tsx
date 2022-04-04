import React, { FC, useEffect, useState } from "react";
import { dateLastSeenOnline } from "../../../lib/helper/dateLastSeenOnline";
import { useTypedSelector } from "../../../lib/hooks/useTypedSelector";
import { IUser } from "../../../lib/models/IUser";
import "./userStatus.scss";
interface UserStatusProps {
  user: IUser;
  hover: boolean;
}

const UserStatus: FC<UserStatusProps> = ({ user, hover }) => {
  const [lastSeenDate, setLastSeenDate] = useState<null | string>(null);

  useEffect(() => {
    if (user.online === true) return;
    const time = dateLastSeenOnline(user.online);
    setLastSeenDate(time);
  }, [user.online]);

  return (
    <>
      {user.online === true ? (
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
          last seen {lastSeenDate}
        </div>
      )}
    </>
  );
};

export default UserStatus;
