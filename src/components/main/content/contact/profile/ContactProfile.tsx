import React, { FC, useEffect, useState } from "react";
import { useActions } from "../../../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import AvatarRound from "../../../../UI/AvatarCustom/AvatarRound/AvatarRound";
import UserStatus from "../../../../UI/user-status/UserStatus";

const ContactProfile: FC = () => {
  const [isMyContact, setIsMyContact] = useState<boolean | null>(null);
  const { setAllContact, setDeleteFromMyContact } = useActions();
  const {
    selectedContact,
    myContact,
    globalContact,
    filteredGlobalContact,
    filteredMyContact,
  } = useTypedSelector((s) => s.contactReducer);
  const { userID } = useTypedSelector((s) => s.profileReducer);

  function defineIsMyContact() {
    const arr = myContact.map((it) => it.userID);
    const check = arr.includes(selectedContact.userID);
    setIsMyContact(check);
  }

  function handleClickDelete() {
    setDeleteFromMyContact(
      selectedContact,
      userID,
      myContact,
      filteredGlobalContact
    );
  }

  function handleClickAdd() {
    setAllContact(
      selectedContact,
      userID,
      myContact,
      globalContact,
      filteredMyContact,
      filteredGlobalContact
    );
    setIsMyContact(true);
  }

  useEffect(() => {
    defineIsMyContact();
  }, [selectedContact]);

  return (
    <div className="main-contact-content__profile contact-profile">
      <div className="contact-profile__avatar">
        <AvatarRound
          urlAvatar={selectedContact.urlPhoto}
          width="96px"
          height="96px"
        />
      </div>
      <div className="contact-profile__fullname">
        {selectedContact.fullname}
      </div>
      <div className="contact-profile__status">
        <UserStatus hover={false} flag={selectedContact.online} />
      </div>
      {isMyContact ? (
        <button className="contact-profile__btn">Send Message</button>
      ) : (
        <button className="contact-profile__btn" onClick={handleClickAdd}>
          Add to friends
        </button>
      )}

      {isMyContact && (
        <div className="contact-profile__nav card-nav">
          <button className="card-nav__row">
            <div className="card-nav__icon icon-bell-mute"></div>
            <div className="card-nav__text">Mute notifications</div>
          </button>
          <button className="card-nav__row" onClick={handleClickDelete}>
            <div className="card-nav__icon icon-body-delete"></div>
            <div className="card-nav__text">Remove from contacts</div>
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactProfile;
