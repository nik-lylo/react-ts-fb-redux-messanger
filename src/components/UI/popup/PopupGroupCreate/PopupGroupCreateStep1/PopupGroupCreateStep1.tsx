import React, { FC } from "react";
import SimpleButton from "../../../buttons/SimpleButton/SimpleButton";
import InputSettings from "../../../input/InputSettings/InputSettings";
import SelectCustom from "../../../select/SelectCustom/SelectCustom";
import { useActions } from "../../../../../lib/hooks/useActions";
import AlertCustom from "../../../alert/Alert/AlertCustom";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import AvatarInput from "../../../input/AvatarInput/AvatarInput";

interface PopupGroupCreateStep1Props {
  name: string;
  setName: any;
  about: string;
  setAbout: any;
  setStep: any;
  avatarFile: any;
  visibility: string;
  setVisibility: any;
  groupAvatar: string;
  handleChangeGroupAvatar: any;
}

const PopupGroupCreateStep1: FC<PopupGroupCreateStep1Props> = ({
  name,
  setName,
  about,
  setAbout,
  setStep,
  visibility,
  setVisibility,
  avatarFile,
  groupAvatar,
  handleChangeGroupAvatar,
}) => {
  const { setGroupCreateError } = useActions();
  const { groupCreateError, groupCreateIsLoaded } = useTypedSelector(
    (s) => s.groupReducer
  );
  const optionArr: string[] = ["", "Public", "Private"];

  function handleClickStepPlus() {
    if (name !== "" && about !== "" && visibility !== "") {
      setStep(2);
    } else {
      setGroupCreateError("All fields must be filled");
      setTimeout(() => {
        setGroupCreateError(null);
      }, 4000);
    }
  }
  return (
    <>
      <div className="popup-group-create-step1">
        <div className="popup-group-create-step1__avatar">
          <AvatarInput
            avatarLink={groupAvatar}
            handleChangeAvatar={handleChangeGroupAvatar}
            avatarFile={avatarFile}
            size="70px"
          />
        </div>

        <InputSettings
          text="Name"
          type="text"
          value={name}
          setValue={setName}
        />

        <InputSettings
          text="About"
          type="text"
          value={about}
          setValue={setAbout}
        />
        <SelectCustom
          name="Visibility"
          value={visibility}
          setValue={setVisibility}
          optValue={optionArr}
        />
      </div>
      {groupCreateError && <AlertCustom>{groupCreateError}</AlertCustom>}
      <div
        className="popup-group-create-step1__button"
        onClick={handleClickStepPlus}
      >
        <SimpleButton
          text="Next"
          isLoading={groupCreateIsLoaded}
          type="button"
        />
      </div>
    </>
  );
};

export default PopupGroupCreateStep1;
