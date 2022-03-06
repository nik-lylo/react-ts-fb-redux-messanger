import React, { FC } from "react";
import { useActions } from "../../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../../lib/hooks/useTypedSelector";
import { IUser } from "../../../../lib/models/IUser";
import UserStatus from "../../user-status/UserStatus";
import "./contactCard.scss";

interface ContactCardProps {
  contact: IUser;
  my: boolean;
}

const ContactCard: FC<ContactCardProps> = ({ contact, my }) => {
  const { setAllContact, setSelectedContact } = useActions();
  const {
    filteredMyContact,
    filteredGlobalContact,
    myContact,
    globalContact,
    selectedContact,
  } = useTypedSelector((s) => s.contactReducer);

  const { userID } = useTypedSelector((s) => s.profileReducer);

  function handleClickSelect() {
    setSelectedContact(contact);
  }

  function handleClickAdd(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    setAllContact(
      contact,
      userID,
      myContact,
      globalContact,
      filteredMyContact,
      filteredGlobalContact
    );
  }

  return (
    <div
      className={
        contact.userID === selectedContact.userID
          ? "contact-card contact-card_blue"
          : "contact-card"
      }
      onClick={handleClickSelect}
    >
      <div className="contact-card__avatar">
        {contact.online && <div className="contact-card_indicator"></div>}
        <div className="contact-card__avatar__container">
          <img src={contact.urlPhoto} alt="Avatar" />
        </div>
      </div>
      <div className="contact-card__content">
        <div className="contact-card__block">
          <div className="contact-card__fullname">{contact.fullname}</div>
          <div className="contact-card__status">
            <UserStatus
              hover={contact.userID === selectedContact.userID}
              flag={contact.online}
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
