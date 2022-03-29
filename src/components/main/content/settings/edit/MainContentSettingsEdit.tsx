import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import SimpleButton from "../../../../UI/buttons/SimpleButton/SimpleButton";
import { IGenericObject } from "../../../../../lib/models/DefaultValue";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import MCSettingsEditInfo from "./info/MCSettingsEditInfo";
import MCSettingsEditBirthday from "./birthday/MCSettingsEditBirthday";
import MCSettingsEditContact from "./contact/MCSettingsEditContact";
import MCSettingsEditHobby from "./hobby/MCSettingsEditHobby";
import MCSettingsEditAvatar from "./avatar/MCSettingsEditAvatar";
import { onChangeAvatar } from "../../../../../api/profile/onChangeAvatar";
import { filterBirthdayObject } from "../../../../../lib/controller/profile/filterBirthdayObject";
import { useActions } from "../../../../../lib/hooks/useActions";
import Loader from "../../../../UI/loader/Loader/Loader";
import AlertCustom from "../../../../UI/alert/Alert/AlertCustom";

const MainContentSettingsEdit: FC = () => {
  const { user } = useTypedSelector((s) => s.profileReducer);
  const [name, setName] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [instagram, setInstagram] = useState<string>("");
  const [twitter, setTwitter] = useState<string>("");
  const [hobby, setHobby] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [avatarFile, setAvatarFile] = useState<any>(null);
  const [avatarLink, setAvatarLink] = useState<string>(user.urlPhoto);

  async function handleChangeAvatar(e: any) {
    setAvatarFile(e.currentTarget.files[0]);
    const linkAvatar: any = await onChangeAvatar(
      `changeUserAvatar/${user.userID}`,
      e.currentTarget.files[0]
    );
    setAvatarLink(linkAvatar);
  }

  const { setSettingsBirthError, setSettingsEditError, setSettingsEditUser } =
    useActions();
  const { settingsBirthError, settingsEditError, settingsEditLoaded } =
    useTypedSelector((s) => s.settingsReducer);

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
    setAvatarFile(null);
  }
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    console.log("wha");

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
      setSettingsBirthError(
        "If you want to change your date of birth then you need to fill in all the fields related to the date"
      );
      setTimeout(() => setSettingsBirthError(null), 4000);
      return;
    }
    if (checkNum === 3) {
      infoObject.birthDay = birthDayObject;
    }
    setSettingsEditUser(user, infoObject, mainObject, avatarFile, rewrite);
  }

  useEffect(() => {
    return () => {
      rewrite();
      setSettingsBirthError(null);
      setSettingsEditError(null);
    };
  }, []);

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
          <MCSettingsEditInfo
            name={name}
            setName={setName}
            lastname={lastname}
            setLastname={setLastname}
            location={location}
            setLocation={setLocation}
          />
          <MCSettingsEditBirthday
            date={date}
            setDate={setDate}
            month={month}
            setMonth={setMonth}
            year={year}
            setYear={setYear}
          />
          <MCSettingsEditContact
            instagram={instagram}
            setInstagram={setInstagram}
            twitter={twitter}
            setTwitter={setTwitter}
          />
          <MCSettingsEditHobby hobby={hobby} setHobby={setHobby} />
          {settingsEditError && (
            <div className="edit-alert">
              <AlertCustom>{settingsEditError}</AlertCustom>
            </div>
          )}
          <div className="settinds-edit-content__submit">
            <div className="settinds-edit-content__button-cont">
              <SimpleButton text="Save" isLoading={settingsEditLoaded} />
            </div>
          </div>
        </form>
        <MCSettingsEditAvatar
          avatarLink={avatarLink}
          avatarFile={avatarFile}
          handleChangeAvatar={handleChangeAvatar}
        />
      </div>
      <Loader isOpen={settingsEditLoaded} />
    </div>
  );
};

export default MainContentSettingsEdit;
