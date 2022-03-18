import React, { FC, useState } from "react";
import { useTypedSelector } from "../../../../lib/hooks/useTypedSelector";
import "./popupGroupCreate.scss";
import { useActions } from "../../../../lib/hooks/useActions";
import { DefaultValue } from "../../../../lib/models/DefaultValue";
import PopupGroupCreateStep1 from "./PopupGroupCreateStep1/PopupGroupCreateStep1";
import PopupGroupCreateStep2 from "./PopupGroupCreateStep2/PopupGroupCreateStep2";
import PopupGroupCreateStep3 from "./PopupGroupCreateStep3/PopupGroupCreateStep3";
import StepperGroupAdd from "../../stepper/StepperGroupAdd";
import { uploadPhoto } from "../../../../api/profile/uploadPhoto";
import { downloadPhoto } from "../../../../api/profile/downloadPhoto";
import { IUser } from "../../../../lib/models/IUser";
import { Timestamp } from "firebase/firestore";

interface PopupGroupCreateProps {
  isOpen: boolean;
}

const PopupGroupCreate: FC<PopupGroupCreateProps> = ({ isOpen }) => {
  const [name, setName] = useState<string>("");
  const [about, setAbout] = useState<string>("");
  const [groupAvatar, setGroupAvatar] = useState<string>(
    DefaultValue.GROUP__IMAGE
  );
  const [instagram, setInstagram] = useState<string>("");
  const [twitter, setTwitter] = useState<string>("");
  const [facebook, setFacebook] = useState<string>("");
  const [visibility, setVisibility] = useState<string>("");
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [invitedContacts, setInvitedContacts] = useState<IUser[]>([]);
  const { user } = useTypedSelector((s) => s.profileReducer);
  const { setOpenPopupCreateGroup, setCreateGroup } = useActions();

  function handleClickClose() {
    setOpenPopupCreateGroup(false);
    setStep(1);
  }

  async function handleChangeGroupAvatar(e: any) {
    await uploadPhoto(`groupsPhoto/test.png`, e.currentTarget.files[0]);
    const linkAvatar = await downloadPhoto(`groupsPhoto/test.png`);
    setGroupAvatar(linkAvatar);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    const createObject = {
      role: "admin",
      admin: user.userID,
      private: visibility,
      name: name,
      about: about,
      instagram: instagram,
      twitter: twitter,
      facebook: facebook,
      member_amount: 1,
      lastMessage: {},
      createdAt: Timestamp,
      groupAvatar: groupAvatar,
    };
    setCreateGroup(createObject);
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

      <button
        type="reset"
        onClick={handleClickClose}
        className="popup-group-create__close icon-cross"
      ></button>
    </div>
  );
};

export default PopupGroupCreate;
