import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RoutesMainEnum } from "../../../../../lib/enum/router/RoutesMainEnum";
import { useActions } from "../../../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import AvatarRound from "../../../../UI/avatar/AvatarRound/AvatarRound";
import IconButton from "../../../../UI/buttons/IconButton/IconButton";
import SimpleButton from "../../../../UI/buttons/SimpleButton/SimpleButton";
import Loader from "../../../../UI/loader/Loader/Loader";
import UserStatus from "../../../../UI/user-status/UserStatus";

const MainContentContactProfile: FC = () => {
  const [isMyContact, setIsMyContact] = useState<boolean | null>(null);
  const [deleteContactLoader, setDeleteContactLoader] =
    useState<boolean>(false);
  const { user } = useTypedSelector((s) => s.profileReducer);
  const { selectedContact } = useTypedSelector((s) => s.contactReducer);
  const { friendsCollectionList, usersObjectCollectionList } = useTypedSelector(
    (s) => s.appReducer
  );
  const { setDeleteContact, setAddContact, setSelectedChat } = useActions();
  const navigate = useNavigate();

  function handleClickNavigate() {
    navigate(RoutesMainEnum.CHAT);
    setSelectedChat(selectedContact);
  }

  function defineIsMyContact() {
    if (selectedContact === null) return;
    const arr = friendsCollectionList.map((it) => it.userID);
    const check = arr.includes(selectedContact);
    setIsMyContact(check);
  }

  function handleClickDelete() {
    if (selectedContact === null) return;
    setDeleteContact(user.userID, selectedContact, setDeleteContactLoader);
  }

  function handleClickAdd() {
    if (selectedContact === null) return;
    setAddContact(user, usersObjectCollectionList[selectedContact], true);
  }

  useEffect(() => {
    defineIsMyContact();
  }, [selectedContact]);

  return (
    <div className="main-content-contact-profile">
      <div className="main-content-contact-profile__avatar">
        <AvatarRound
          urlAvatar={
            selectedContact
              ? usersObjectCollectionList[selectedContact].urlPhoto
              : ""
          }
          width="96px"
          height="96px"
        />
      </div>
      <div className="main-content-contact-profile__fullname">
        {selectedContact && usersObjectCollectionList[selectedContact].fullname}
      </div>
      <div className="main-content-contact-profile__status">
        <UserStatus
          hover={false}
          user={usersObjectCollectionList[selectedContact!]}
        />
      </div>
      {isMyContact ? (
        <SimpleButton
          text="Send Message"
          isLoading={false}
          handleClick={handleClickNavigate}
        />
      ) : (
        <SimpleButton
          text=" Add to friends"
          isLoading={false}
          handleClick={handleClickAdd}
        />
      )}
      {isMyContact && (
        <div className="main-content-contact-profile__nav content-contact-profile-nav">
          <IconButton
            icon="icon-bell-mute"
            text="Mute notification"
            handleClick={null}
          />
          <IconButton
            icon="icon-body-delete"
            text="Remove from contacts"
            handleClick={handleClickDelete}
          />
        </div>
      )}
      <Loader isOpen={deleteContactLoader} />
    </div>
  );
};

export default MainContentContactProfile;
