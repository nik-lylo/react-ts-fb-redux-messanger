import React, { FC } from "react";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import SimpleButton from "../../../buttons/SimpleButton/SimpleButton";
import InputSettings from "../../../input/InputSettings/InputSettings";
import SelectCustom from "../../../select/SelectCustom/SelectCustom";
import AvatarRound from "../../../AvatarCustom/AvatarRound/AvatarRound";
import { useSettingsEdit } from "../../../../main/content/settings/edit/settings_edit_mui";
import { useActions } from "../../../../../lib/hooks/useActions";
import AlertCustom from "../../../alert/Alert/AlertCustom";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";

interface PopupGroupCreateStep1Props {
  name: string;
  setName: any;
  about: string;
  setAbout: any;
  setStep: any;
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
  groupAvatar,
  handleChangeGroupAvatar,
}) => {
  const classes = useSettingsEdit();
  const { setCreateGroupError } = useActions();
  const { createGroupError } = useTypedSelector((s) => s.groupReducer);
  const optionArr: string[] = ["", "Public", "Private"];

  function handleClickStepPlus() {
    if (name !== "" && about !== "" && visibility !== "") {
      setStep(2);
    } else {
      setCreateGroupError("All fields must be filled");
      setTimeout(() => {
        setCreateGroupError(null);
      }, 4000);
    }
  }
  return (
    <>
      <div className="popup-group-create-step1">
        <div className="popup-group-create-step1__avatar">
          <AvatarRound urlAvatar={groupAvatar} width="70px" height="70px" />
          <label
            htmlFor="file-input"
            className="popup-group-create-step1__button-icon"
          >
            <PhotoCameraIcon
              className={classes.settings_edit_icon_photo_group}
            />
          </label>
          <input
            type="file"
            id="file-input"
            onChange={async (e) => {
              await handleChangeGroupAvatar(e);
            }}
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
      {createGroupError && <AlertCustom>{createGroupError}</AlertCustom>}
      <div
        className="popup-group-create-step1__button"
        onClick={handleClickStepPlus}
      >
        <SimpleButton text="Next" isLoading={false} type="button" />
      </div>
    </>
  );
};

export default PopupGroupCreateStep1;
