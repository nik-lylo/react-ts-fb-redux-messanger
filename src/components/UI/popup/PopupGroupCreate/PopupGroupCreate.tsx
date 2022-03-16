import React, { ChangeEvent, FC, useState } from "react";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { useTypedSelector } from "../../../../lib/hooks/useTypedSelector";
import { useSettingsEdit } from "../../../main/content/settings/edit/settings_edit_mui";
import AvatarRound from "../../AvatarCustom/AvatarRound/AvatarRound";
import "./popupGroupCreate.scss";
import InputSettings from "../../input/InputSettings/InputSettings";
import SelectCustom from "../../select/SelectCustom/SelectCustom";
import SimpleButton from "../../buttons/SimpleButton/SimpleButton";
import { useActions } from "../../../../lib/hooks/useActions";
import { DefaultValue } from "../../../../lib/models/DefaultValue";
import { ref } from "firebase/storage";
import { storage } from "../../../../lib/firebase";

interface PopupGroupCreateProps {
  isOpen: boolean;
}

const PopupGroupCreate: FC<PopupGroupCreateProps> = ({ isOpen }) => {
  const [name, setName] = useState<string>("");
  const [about, setAbout] = useState<string>("");
  const [groupAvatar, setGroupAvatar] = useState("");
  const [visibility, setVisibility] = useState<string>("");
  const { user } = useTypedSelector((s) => s.profileReducer);
  const { setOpenPopupCreateGroup } = useActions();
  const classes = useSettingsEdit();
  const optionArr: string[] = ["", "Public", "Private"];
  function handleClickClose() {
    setOpenPopupCreateGroup(false);
  }

  async function handleChange(e: any) {
    // const storageRef = ref(storage, "images");
    // await setGroupAvatar(e.currentTarget.files[0]!.name);
    // console.log(e.currentTarget.files[0]!);
  }

  return (
    <div
      className={
        isOpen
          ? "popup-group-create popup-group-create_open"
          : "popup-group-create"
      }
    >
      <form className="popup-group-create__form">
        <div className="popup-group-create__title">New Group</div>
        <div className="popup-group-create__avatar">
          <AvatarRound
            urlAvatar={DefaultValue.GROUP__IMAGE}
            width="96px"
            height="96px"
          />
          <label
            htmlFor="file-input"
            className="popup-group-create__button-icon"
          >
            <PhotoCameraIcon className={classes.settings_edit__icon_photo} />
          </label>
          <input type="file" id="file-input" onChange={handleChange} />
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
        <div className="popup-group-create__button">
          <SimpleButton text="Next" isLoading={false} />
        </div>
        <button
          onClick={handleClickClose}
          type="reset"
          className="popup-group-create__close icon-cross"
        ></button>
      </form>
    </div>
  );
};

export default PopupGroupCreate;
