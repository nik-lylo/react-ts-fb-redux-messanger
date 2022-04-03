import React, { FC } from "react";
import { IUser } from "../../../../lib/models/IUser";
import AvatarOnline from "../../avatar/AvatarOnline/AvatarOnline";
import UserStatus from "../../user-status/UserStatus";
import "./contactCardInfo.scss";

interface ContactCardInfoProps {
  contact: IUser;
}

const ContactCardInfo: FC<ContactCardInfoProps> = ({ contact }) => {
  return (
    <div className="contact-card-info">
      <AvatarOnline
        contact={contact}
        width="40px"
        height="40px"
        hover={false}
      />
      <div className="contact-card-info__content">
        <div className="contact-card-info__block">
          <div className="contact-card-info__fullname">{contact.fullname}</div>
          <div className="contact-card-info__status">
            <UserStatus hover={false} online={contact.online} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCardInfo;
