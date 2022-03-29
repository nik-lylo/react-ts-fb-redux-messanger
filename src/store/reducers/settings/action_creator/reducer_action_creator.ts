import {
  SetSettingsBirthError,
  SetSettingsEditError,
  SetSettingsEditLoaded,
  SettingsActionEnum,
} from "../types";

export const SettingsReducerActionCreators = {
  setSettingsEditError: (err: null | string): SetSettingsEditError => ({
    type: SettingsActionEnum.SET_SETTINGS_EDIT_ERROR,
    payload: err,
  }),
  setSettingsBirthError: (err: null | string): SetSettingsBirthError => ({
    type: SettingsActionEnum.SET_SETTINGS_BIRTH_ERROR,
    payload: err,
  }),
  setSettingsEditLoaded: (flag: boolean): SetSettingsEditLoaded => ({
    type: SettingsActionEnum.SET_SETTINGS_EDIT_LOADED,
    payload: flag,
  }),
};
