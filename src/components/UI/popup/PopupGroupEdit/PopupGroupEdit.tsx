import React, { FC, FormEvent, useEffect, useState } from "react";
import { onChangeAvatar } from "../../../../api/profile/onChangeAvatar";
import { useActions } from "../../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../../lib/hooks/useTypedSelector";
import { IGenericObject } from "../../../../lib/models/DefaultValue";
import ButtonClosePopup from "../../buttons/ButtonClosePopup/ButtonClosePopup";
import SimpleButtonCancel from "../../buttons/SimpleButtonCancel/SimpleButtonCancel";
import SimpleButtonLoad from "../../buttons/SimpleButtonLoad/SimpleButtonLoad";
import AvatarInput from "../../input/AvatarInput/AvatarInput";
import InputSettings from "../../input/InputSettings/InputSettings";
import TextareaSettings from "../../textarea/TextareaSettings";
import "./popupGroupEdit.scss";

interface PopupGroupEditProps {
  isOpen: boolean;
}

const PopupGroupEdit: FC<PopupGroupEditProps> = ({ isOpen }) => {
  const { selectedGroupInfo } = useTypedSelector((s) => s.groupReducer);
  const { groupsObjectCollectionList } = useTypedSelector((s) => s.appReducer);
  const { setGroupEdit, setOpenPopupEditGroup } = useActions();
  const [editIsLoaded, setEditIsLoaded] = useState<boolean>(false);
  const [editError, setEditError] = useState<string | null>(null);
  const [editAvatarLink, setEditAvatarLink] = useState<string>(
    groupsObjectCollectionList[selectedGroupInfo!].groupAvatar
  );
  const [editAvatarFile, setEditAvatarFile] = useState(null);
  const [editName, setEditName] = useState<string>("");
  const [editInstagram, setEditInstagram] = useState<string>("");
  const [editTwitter, setEditTwitter] = useState<string>("");
  const [editFacebook, setEditFacebook] = useState<string>("");
  const [editAbout, setEditAbout] = useState<string>("");

  async function handleChangeAvatar(e: any) {
    setEditAvatarFile(e.currentTarget.files[0]);
    const linkAvatar = await onChangeAvatar(
      `groupsPhoto/${selectedGroupInfo}/test`,
      e.currentTarget.files[0]
    );
    if (linkAvatar === undefined) return;
    setEditAvatarLink(linkAvatar);
  }

  function handleClose() {
    setOpenPopupEditGroup(false);
  }

  function rewrite() {
    setEditAvatarLink(
      groupsObjectCollectionList[selectedGroupInfo!].groupAvatar
    );
    setEditAvatarFile(null);
    setEditInstagram("");
    setEditTwitter("");
    setEditFacebook("");
    setEditAbout("");
    setEditName("");
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const editObject: IGenericObject = {
      instagram: editInstagram,
      twitter: editTwitter,
      facebook: editFacebook,
      about: editAbout,
      name: editName,
    };
    setGroupEdit(
      selectedGroupInfo!,
      editObject,
      editAvatarFile,
      rewrite,
      setEditIsLoaded
    );
  }

  useEffect(() => {
    setEditAvatarLink(
      groupsObjectCollectionList[selectedGroupInfo!].groupAvatar
    );
  }, [isOpen]);

  return (
    <div
      className={
        isOpen ? "popup-group-edit popup-group-edit_open" : "popup-group-edit"
      }
    >
      <form className="popup-group-edit__form" onSubmit={handleSubmit}>
        <div className="popup-group-edit__title main-24-title">Edit group</div>
        <div className="popup-group-edit__avatar">
          <AvatarInput
            size="80px"
            avatarFile={editAvatarFile}
            avatarLink={editAvatarLink}
            handleChangeAvatar={handleChangeAvatar}
          />
        </div>
        <div className="popup-group-edit__subtitle main-17-title">Info</div>
        <div className="popup-group-edit__body">
          <InputSettings
            text="Name"
            type="text"
            setValue={setEditName}
            value={editName}
          />
          <InputSettings
            text="Instagram"
            type="text"
            setValue={setEditInstagram}
            value={editInstagram}
          />
          <InputSettings
            text="Twitter"
            type="text"
            setValue={setEditTwitter}
            value={editTwitter}
          />
          <InputSettings
            text="Facebook"
            type="text"
            setValue={setEditFacebook}
            value={editFacebook}
          />
          <TextareaSettings
            text="About"
            value={editAbout}
            setValue={setEditAbout}
          />
        </div>
        <div className="popup-group-edit__buttons">
          <SimpleButtonCancel
            text="Cancel"
            disabled={editIsLoaded}
            fontSize="15px"
            padding="8px 24px"
            handleClick={handleClose}
          />
          <div className="popup-group-edit__submit">
            <SimpleButtonLoad
              type="submit"
              text="Save"
              isLoad={editIsLoaded}
              fontSize="15px"
              padding="8px 24px"
            />
          </div>
        </div>
      </form>
      <ButtonClosePopup handleClose={handleClose} disabled={editIsLoaded} />
    </div>
  );
};

export default PopupGroupEdit;
