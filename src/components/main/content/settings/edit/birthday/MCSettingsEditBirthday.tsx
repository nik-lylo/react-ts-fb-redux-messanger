import React, { FC } from "react";
import "../mainContentSettingsEdit.scss";
import InputSettings from "../../../../../UI/input/InputSettings/InputSettings";
import SelectCustom from "../../../../../UI/select/SelectCustom/SelectCustom";
import { DefaultSelectMonth } from "../../../../../../lib/models/DefaultValue";
import { useTypedSelector } from "../../../../../../lib/hooks/useTypedSelector";
import AlertCustom from "../../../../../UI/alert/Alert/AlertCustom";

interface MCSettingsEditBirthdayProps {
  date: string;
  setDate: any;
  month: string;
  setMonth: any;
  year: string;
  setYear: any;
}

const MCSettingsEditBirthday: FC<MCSettingsEditBirthdayProps> = ({
  date,
  setDate,
  month,
  setMonth,
  year,
  setYear,
}) => {
  const { settingsBirthError } = useTypedSelector((s) => s.settingsReducer);
  return (
    <>
      <div className="main-content-settings-edit__subtitle main-17-title">
        Birthday
      </div>
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
            optValue={DefaultSelectMonth}
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
      {settingsBirthError && <AlertCustom>{settingsBirthError}</AlertCustom>}
    </>
  );
};

export default MCSettingsEditBirthday;
