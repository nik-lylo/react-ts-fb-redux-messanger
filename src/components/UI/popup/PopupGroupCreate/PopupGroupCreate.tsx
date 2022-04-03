import React, { FC, useState } from "react";
import { useTypedSelector } from "../../../../lib/hooks/useTypedSelector";
import "./popupGroupCreate.scss";
import { useActions } from "../../../../lib/hooks/useActions";
import {
  DefaultAvatar,
  DEFAULT_LAST_MESSAGE_CHAT_GROUP,
} from "../../../../lib/models/DefaultValue";
import PopupGroupCreateStep1 from "./PopupGroupCreateStep1/PopupGroupCreateStep1";
import PopupGroupCreateStep2 from "./PopupGroupCreateStep2/PopupGroupCreateStep2";
import PopupGroupCreateStep3 from "./PopupGroupCreateStep3/PopupGroupCreateStep3";
import { IUser } from "../../../../lib/models/IUser";
import { IGroup } from "../../../../lib/models/IGroup";
import StepperGroupAdd from "../../stepper/StepperGroupAdd";
import { onChangeAvatar } from "../../../../api/profile/onChangeAvatar";
import ButtonClosePopup from "../../buttons/ButtonClosePopup/ButtonClosePopup";

interface PopupGroupCreateProps {
  isOpen: boolean;
}

const PopupGroupCreate: FC<PopupGroupCreateProps> = ({ isOpen }) => {
  const [name, setName] = useState<string>("");
  const [about, setAbout] = useState<string>("");
  const [groupAvatar, setGroupAvatar] = useState<string>(
    DefaultAvatar.GROUP__IMAGE
  );
  const [avatarFile, setAvatarFile] = useState<any>(null);
  const [instagram, setInstagram] = useState<string>("");
  const [twitter, setTwitter] = useState<string>("");
  const [facebook, setFacebook] = useState<string>("");
  const [visibility, setVisibility] = useState<"Public" | "Private">("Public");
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [invitedContacts, setInvitedContacts] = useState<IUser[]>([]);
  const { user } = useTypedSelector((s) => s.profileReducer);
  const { groupCreateIsLoaded } = useTypedSelector((s) => s.groupReducer);
  const { setOpenPopupCreateGroup, setGroupCreate } = useActions();

  function handleClickClose() {
    setOpenPopupCreateGroup(false);
    setStep(1);
  }

  function rewrite() {
    setName("");
    setAbout("");
    setGroupAvatar(DefaultAvatar.GROUP__IMAGE);
    setAvatarFile(null);
    setTwitter("");
    setInstagram("");
    setFacebook("");
    setVisibility("Public");
    setInvitedContacts([]);
  }

  async function handleChangeGroupAvatar(e: any) {
    setAvatarFile(e.currentTarget.files[0]);
    const linkAvatar = await onChangeAvatar(
      `groupsPhoto/test.png`,
      e.currentTarget.files[0]
    );
    if (linkAvatar === undefined) return;
    setGroupAvatar(linkAvatar);
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    const createObject: IGroup = {
      groupAvatar: "",
      groupId: "",
      admin: user.userID,
      private: visibility,
      name: name,
      about: about,
      instagram: instagram,
      twitter: twitter,
      facebook: facebook,
      member_amount: 1,
      lastMessage: DEFAULT_LAST_MESSAGE_CHAT_GROUP,
      inviting: [],
      members: [],
      joined: new Date(),
    };
    setGroupCreate(createObject, avatarFile, invitedContacts, rewrite, setStep);
  }

  return (
    <div
      className={
        isOpen
          ? "popup-group-create popup-group-create_open"
          : "popup-group-create"
      }
    >
      <form className="popup-group-create__form" onSubmit={handleSubmit}>
        <div className="popup-group-create__stepper">
          <StepperGroupAdd step={step} />
        </div>
        {step === 1 ? (
          <>
            <div className="popup-group-create__title">Main</div>
            <PopupGroupCreateStep1
              name={name}
              about={about}
              setName={setName}
              setAbout={setAbout}
              setStep={setStep}
              avatarFile={avatarFile}
              visibility={visibility}
              setVisibility={setVisibility}
              groupAvatar={groupAvatar}
              handleChangeGroupAvatar={handleChangeGroupAvatar}
            />
          </>
        ) : step === 2 ? (
          <>
            <div className="popup-group-create__title">Contact</div>
            <PopupGroupCreateStep2
              instagram={instagram}
              twitter={twitter}
              facebook={facebook}
              setTwitter={setTwitter}
              setInstagram={setInstagram}
              setFacebook={setFacebook}
              setStep={setStep}
            />
          </>
        ) : step === 3 ? (
          <>
            <div className="popup-group-create__title">Invite friends</div>
            <PopupGroupCreateStep3
              setStep={setStep}
              invitedContacts={invitedContacts}
              setInvitedContacts={setInvitedContacts}
            />
          </>
        ) : null}
      </form>
      <ButtonClosePopup
        handleClose={handleClickClose}
        disabled={groupCreateIsLoaded}
      />
    </div>
  );
};

export default PopupGroupCreate;
