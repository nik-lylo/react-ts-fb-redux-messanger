import React, { FC, FormEvent, useState } from "react";
import "./popupGroupAdd.scss";
import AddToGroupList from "../../list/AddToGroupList/AddToGroupList";
import SimpleButtonCancel from "../../buttons/SimpleButtonCancel/SimpleButtonCancel";
import { useActions } from "../../../../lib/hooks/useActions";
import SimpleButtonLoad from "../../buttons/SimpleButtonLoad/SimpleButtonLoad";
import { IUser } from "../../../../lib/models/IUser";
import { useTypedSelector } from "../../../../lib/hooks/useTypedSelector";
import ButtonClosePopup from "../../buttons/ButtonClosePopup/ButtonClosePopup";

interface PopupGroupAddProps {
  isOpen: boolean;
}

const PopupGroupAdd: FC<PopupGroupAddProps> = ({ isOpen }) => {
  const { setOpenPopupAddGroup, setInviteUserToGroup } = useActions();
  const { user } = useTypedSelector((s) => s.profileReducer);
  const { selectedGroupInfo } = useTypedSelector((s) => s.groupReducer);
  const { usersObjectCollectionList, groupsObjectCollectionList } =
    useTypedSelector((s) => s.appReducer);
  const [invitedList, setInvitedList] = useState<IUser[]>([]);
  const [isInviteLoaded, setIsInviteLoaded] = useState<boolean>(false);
  function handleClose() {
    setOpenPopupAddGroup(false);
  }

  function rewrite() {
    setInvitedList([]);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const invitedListId = invitedList.map((item) => item.userID);
    const invitingSelectedGroup =
      groupsObjectCollectionList[selectedGroupInfo!].inviting;
    const invitingUpdateArray = [...invitingSelectedGroup, ...invitedListId];
    setInviteUserToGroup(
      invitedList,
      selectedGroupInfo!,
      invitingUpdateArray,
      setIsInviteLoaded,
      rewrite
    );
  }

  return (
    <div
      className={
        isOpen ? "popup-group-add popup-group-add_open" : "popup-group-add"
      }
    >
      <form className="popup-group-add__form" onSubmit={handleSubmit}>
        <div className="popup-group-add__title main-24-title">Add Member</div>
        <div className="popup-group-add__container">
          <AddToGroupList
            usersArray={Object.values(usersObjectCollectionList)}
            invitedList={invitedList}
            setInvitedList={setInvitedList}
          />
        </div>
        <div className="popup-group-add__buttons">
          <div className="popup-group-add__cancel">
            <SimpleButtonCancel
              text="Cancel"
              disabled={isInviteLoaded}
              fontSize="15px"
              padding="8px 24px"
              handleClick={handleClose}
            />
          </div>
          <div className="popup-group-add__submit">
            <SimpleButtonLoad
              type="submit"
              text="Save"
              isLoad={isInviteLoaded}
              fontSize="15px"
              padding="8px 24px"
            />
          </div>
        </div>
      </form>
      <ButtonClosePopup handleClose={handleClose} disabled={isInviteLoaded} />
    </div>
  );
};

export default PopupGroupAdd;
