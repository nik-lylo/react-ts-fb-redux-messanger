import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import AlertCustom from "../../../../UI/alert/Alert/AlertCustom";
import AvatarRound from "../../../../UI/avatar/AvatarRound/AvatarRound";
import SimpleButton from "../../../../UI/buttons/SimpleButton/SimpleButton";
import InputSettings from "../../../../UI/input/InputSettings/InputSettings";
import { IGenericObject } from "../../../../../lib/models/DefaultValue";
import SelectCustom from "../../../../UI/select/SelectCustom/SelectCustom";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";

const MainContentSettingsEdit: FC = () => {
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

  const { user } = useTypedSelector((s) => s.profileReducer);

  const monthOptions: string[] = [
    "",
    "January",
    "February",
    "March",
    "April",
    "May",
    "July",
    "June",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
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
    //     setPopupAvatarUpdateOpen(true);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    //     e.preventDefault();
    //     const mainObject: IGenericObject = { name, lastname };
    //     const infoObject: IGenericObject = {
    //       location,
    //       instagram,
    //       hobby,
    //       twitter,
    //     };
    //     const birthDayObject: IGenericObject = {
    //       date: date,
    //       month: month,
    //       year: year,
    //     };
    //     const checkNum = filterBirthdayObject(birthDayObject);
    //     if (checkNum === 1 || checkNum === 2) {
    //       setBirthdayError(
    //         "If you want to change your date of birth then you need to fill in all the fields related to the date"
    //       );
    //       setTimeout(() => setBirthdayError(null), 4000);
    //       return;
    //     }
    //     if (checkNum === 3) {
    //       infoObject.birthDay = birthDayObject;
    //     }
    //     setEditUser(user.userID, infoObject, mainObject, user, rewrite);
  }

  //   useEffect(() => {
  //     return () => {
  //       rewrite();
  //       setBirthdayError(null);
  //       setEditError(null);
  //     };
  //   }, []);

  return (
    <div className="main-content-settings-edit">
      <div className="main-content-settings-edit__title main-24-title">
        Edit Profile
      </div>
      <div className="main-content-settings-edit__subtitle main-17-title">
        Info
      </div>
      <div className="main-content-settings-edit__flex">
        <form
          className="main-content-settings-edit__content settinds-edit-content"
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
          <div className="main-17-title">Birthday</div>
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
              <SelectCustom
                value={month}
                setValue={setMonth}
                name="Month"
                optValue={monthOptions}
              />
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
          {/* {birthdayError && <AlertCustom>{birthdayError}</AlertCustom>} */}
          <div className="main-17-title">Contact</div>
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

          <div className="main-17-title">Hobby</div>
          <div className="settinds-edit-content__textarea settings-edit-textarea">
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
          {/* {editError && <AlertCustom>{editError}</AlertCustom>} */}
          <div className="settinds-edit-content__submit">
            <SimpleButton text="Save changes" isLoading={false} />
          </div>
        </form>
        <div className="main-content-settings-edit__avatar">
          <AvatarRound urlAvatar={user.urlPhoto} width="96px" height="96px" />
          <button
            className="main-content-settings-edit__button-icon"
            onClick={handleClickOpen}
          >
            {/* <PhotoCameraIcon className={classes.settings_edit__icon_photo} /> */}
          </button>
        </div>
      </div>
      {/* <PopupAvatarUpdate isOpen={popupAvatarUpdateOpen} />
      <Loader isOpen={editLoading} /> */}
    </div>
  );
};

export default MainContentSettingsEdit;
