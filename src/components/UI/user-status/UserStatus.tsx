import React, { FC, useEffect, useState } from "react";
import { dateLastSeenOnline } from "../../../lib/helper/dateLastSeenOnline";
import "./userStatus.scss";
interface UserStatusProps {
  online: true | Date;
  hover: boolean;
}

const UserStatus: FC<UserStatusProps> = ({ online, hover }) => {
  const [lastSeenDate, setLastSeenDate] = useState<null | string>(null);

  useEffect(() => {
    setLastSeenDate(dateLastSeenOnline(online));
    if (online === true) return;
    let timerId = setInterval(() => {
      setLastSeenDate(dateLastSeenOnline(online));
    }, 10000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <>
      {online === true ? (
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
