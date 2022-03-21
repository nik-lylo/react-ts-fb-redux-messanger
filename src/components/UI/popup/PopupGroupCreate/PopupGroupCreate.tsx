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
import { rewriteTime } from "../../../../lib/helper/rewriteTime";
import { IGroup } from "../../../../lib/models/IGroup";
import { IMessage } from "../../../../lib/models/IMessage";

interface PopupGroupCreateProps {
  isOpen: boolean;
}

const PopupGroupCreate: FC<PopupGroupCreateProps> = ({ isOpen }) => {
  const [name, setName] = useState<string>("");
  const [about, setAbout] = useState<string>("");
  const [groupAvatar, setGroupAvatar] = useState<string>(
    DefaultValue.GROUP__IMAGE
  );
  const [avatarFile, setAvatarFile] = useState<any>(null);
  const [instagram, setInstagram] = useState<string>("");
  const [twitter, setTwitter] = useState<string>("");
  const [facebook, setFacebook] = useState<string>("");
  const [visibility, setVisibility] = useState<"Public" | "Private">("Public");
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [invitedContacts, setInvitedContacts] = useState<IUser[]>([]);
  const { user } = useTypedSelector((s) => s.profileReducer);
  const { groupIsLoading } = useTypedSelector((s) => s.groupReducer);
  const { setOpenPopupCreateGroup, setCreateGroup } = useActions();

  function handleClickClose() {
    setOpenPopupCreateGroup(false);
    setStep(1);
  }

  function rewrite() {
    setName("");
    setAbout("");
    setGroupAvatar(DefaultValue.GROUP__IMAGE);
    setAvatarFile(null);
    setTwitter("");
    setInstagram("");
    setFacebook("");
    setVisibility("Public");
    setInvitedContacts([]);
  }

  async function handleChangeGroupAvatar(e: any) {
    setAvatarFile(e.currentTarget.files[0]);
    await uploadPhoto(`groupsPhoto/test.png`, e.currentTarget.files[0]);
    const linkAvatar = await downloadPhoto(`groupsPhoto/test.png`);
    setGroupAvatar(linkAvatar);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    const newDate = new Date();
    const date = `${rewriteTime("date", newDate.getDate())}-${rewriteTime(
      "month",
      newDate.getMonth()
    )}-${rewriteTime("year", newDate.getFullYear())}`;
    const membersArr: string[] = [];
    invitedContacts.map((item: IUser) => {
      membersArr.push(item.userID);
    });

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
      lastMessage: {} as IMessage,
      inviting: membersArr,
      members: [],
      joined: date,
    };
    setCreateGroup(createObject, avatarFile, invitedContacts, rewrite, setStep);
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
              setAvatarFile={setAvatarFile}
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
        disabled={groupIsLoading}
      ></button>
    </div>
  );
};

export default PopupGroupCreate;
