import React, { FC } from "react";
import { useActions } from "../../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../../lib/hooks/useTypedSelector";
import { IFriendsUser } from "../../../../lib/models/IFriends";
import { IUser } from "../../../../lib/models/IUser";
import AvatarOnline from "../../avatar/AvatarOnline/AvatarOnline";
import UserStatus from "../../user-status/UserStatus";
import "./contactCard.scss";

interface ContactCardProps {
  contact: IUser | IFriendsUser;
  my: boolean;
}

const ContactCard: FC<ContactCardProps> = ({ contact, my }) => {
  const { user } = useTypedSelector((s) => s.profileReducer);
  const { selectedContact } = useTypedSelector((s) => s.contactReducer);
  const { setSelectedContact, setAddContact } = useActions();

  function handleClickSelect() {
    setSelectedContact(contact.userID);
  }

  function handleClickAdd(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    setAddContact(user, contact, false);
  }

  return (
    <div
      className={
        contact.userID === selectedContact
          ? "contact-card contact-card_blue"
          : "contact-card"
      }
      onClick={handleClickSelect}
    >
      <AvatarOnline
        contact={contact}
        width="40px"
        height="40px"
        hover={contact.userID === selectedContact}
      />
      <div className="contact-card__content">
        <div className="contact-card__block">
          <div className="contact-card__fullname">{contact.fullname}</div>
          <div className="contact-card__status">
            <UserStatus
              hover={contact.userID === selectedContact}
              user={contact}
            />
          </div>
        </div>
        {my ? null : (
          <button
            className="content-card__btn icon-add-body"
            onClick={handleClickAdd}
          ></button>
        )}
      </div>
    </div>
  );
};

export default ContactCard;
