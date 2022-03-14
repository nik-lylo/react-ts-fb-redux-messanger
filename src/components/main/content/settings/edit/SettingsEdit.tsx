import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import AvatarRound from "../../../../UI/AvatarCustom/AvatarRound/AvatarRound";
import SimpleButton from "../../../../UI/buttons/SimpleButton/SimpleButton";
import InputSettings from "../../../../UI/input/InputSettings/InputSettings";
import SelectMonth from "../../../../UI/select/SelectMonth/SelectMonth";
import { useSettingsEdit } from "./settings_edit_mui";
import { useActions } from "../../../../../lib/hooks/useActions";
import { filterBirthdayObject } from "../../../../../lib/controlFunc/profile/filterBirthdayObject";
import { IGenericObject } from "../../../../../lib/models/ICommon";
import AlertCustom from "../../../../UI/alert/Alert/AlertCustom";
import Loader from "../../../../UI/loader/Loader/Loader";
import PopupAvatarUpdate from "../../../../UI/popup/PopupAvatarUpdate/PopupAvatarUpdate";

const SettingsEdit: FC = () => {
  const [textareaFocus, setTextareaFocus] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [instagram, setInstagram] = useState<string>("");
  const [twitter, setTwitter] = useState<string>("");
  const [hobby, setHobby] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const {
    setEditUser,
    setBirthdayError,
    setEditError,
    setPopupAvatarUpdateOpen,
  } = useActions();
  const { user, birthdayError, editError, editLoading, popupAvatarUpdateOpen } =
    useTypedSelector((s) => s.profileReducer);
  const classes = useSettingsEdit();
  function rewrite() {
    setName("");
    setLastname("");
    setLocation("");
    setInstagram("");
    setTwitter("");
    setHobby("");
    setDate("");
    setYear("");
    setMonth("");
  }

  function handleChangeHobby(e: ChangeEvent<HTMLTextAreaElement>) {
    setHobby(e.target.value);
  }

  function handleClickOpen() {
    setPopupAvatarUpdateOpen(true);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const mainObject: IGenericObject = { name, lastname };
    const infoObject: IGenericObject = {
      location,
      instagram,
      hobby,
      twitter,
    };
    const birthDayObject: IGenericObject = {
      date: date,
      month: month,
      year: year,
    };
    const checkNum = filterBirthdayObject(birthDayObject);
    if (checkNum === 1 || checkNum === 2) {
      setBirthdayError(
        "If you want to change your date of birth then you need to fill in all the fields related to the date"
      );
      setTimeout(() => setBirthdayError(null), 4000);
      return;
    }
    if (checkNum === 3) {
      infoObject.birthDay = birthDayObject;
    }
    setEditUser(user.userID, infoObject, mainObject, user, rewrite);
  }

  useEffect(() => {
    return () => {
      rewrite();
      setBirthdayError(null);
      setEditError(null);
    };
  }, []);

  return (
    <div className="settings-edit">
      <div className="settings-title">Edit Profile</div>
      <div className="settings-subtitle">Info</div>
      <div className="settings-edit__flex">
        <form
          className="settings-edit__content settinds-edit-content"
          onSubmit={handleSubmit}
        >
          <InputSettings
            text="First name"
            type={"text"}
            value={name}
            setValue={setName}
          />
          <InputSettings
            text="Last name"
            type="text"
            value={lastname}
            setValue={setLastname}
          />
          <InputSettings
            text="Location"
            type="text"
            value={location}
            setValue={setLocation}
          />
          <div className="settings-subtitle">Birthday</div>
          <div className="settinds-edit-content__birthday settings-edit-birthday">
            <div className="settings-edit-birthday__date">
              <InputSettings
                inputType="date"
                text="Date"
                type="number"
                value={date}
                setValue={setDate}
              />
            </div>
            <div className="settings-edit-birthday__month">
              <SelectMonth value={month} setValue={setMonth} />
            </div>
            <div className="settings-edit-birthday__year">
              <InputSettings
                inputType="year"
                text="Year"
                type="number"
                value={year}
                setValue={setYear}
              />
            </div>
          </div>
          {birthdayError && <AlertCustom>{birthdayError}</AlertCustom>}
          <div className="settings-subtitle">Contact</div>
          <InputSettings
            text="Instagram"
            type="text"
            value={instagram}
            setValue={setInstagram}
          />
          <InputSettings
            text="Twitter"
            type="text"
            value={twitter}
            setValue={setTwitter}
          />

          <div className="settings-subtitle">Hobby</div>
          <div className="settings-edit__textarea settings-edit-textarea">
            <div
              className={
                textareaFocus || hobby !== ""
                  ? "settings-edit-textarea__placeholder_focused"
                  : "settings-edit-textarea__placeholder"
              }
            >
              Hobby
            </div>
            <textarea
              value={hobby}
              onChange={(e) => handleChangeHobby(e)}
              onFocus={() => setTextareaFocus(true)}
              onBlur={() => setTextareaFocus(false)}
            ></textarea>
          </div>
          {editError && <AlertCustom>{editError}</AlertCustom>}
          <div className="settings-edit__submit">
            <SimpleButton text="Save changes" isLoading={false} />
          </div>
        </form>
        <div className="settings-edit__avatar">
          <AvatarRound urlAvatar={user.urlPhoto} width="96px" height="96px" />
          <button
            className="settings-edit__button-icon"
            onClick={handleClickOpen}
          >
            <PhotoCameraIcon className={classes.settings_edit__icon_photo} />
          </button>
        </div>
      </div>
      <PopupAvatarUpdate isOpen={popupAvatarUpdateOpen} />
      <Loader isOpen={editLoading} />
    </div>
  );
};

export default SettingsEdit;
