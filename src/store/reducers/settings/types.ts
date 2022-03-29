export interface ISettingsState {
  settingsEditError: null | string;
  settingsBirthError: null | string;
  settingsEditLoaded: boolean;
}

export enum SettingsActionEnum {
  SET_SETTINGS_EDIT_ERROR = "SET_SETTINGS_EDIT_ERROR",
  SET_SETTINGS_BIRTH_ERROR = " SET_SETTINGS_BIRTH_ERROR ",
  SET_SETTINGS_EDIT_LOADED = "SET_SETTINGS_EDIT_LOADED",
}

export interface SetSettingsEditError {
  type: SettingsActionEnum.SET_SETTINGS_EDIT_ERROR;
  payload: null | string;
}
export interface SetSettingsBirthError {
  type: SettingsActionEnum.SET_SETTINGS_BIRTH_ERROR;
  payload: null | string;
}
export interface SetSettingsEditLoaded {
  type: SettingsActionEnum.SET_SETTINGS_EDIT_LOADED;
  payload: boolean;
}

export type SettingsAction =
  | SetSettingsBirthError
  | SetSettingsEditError
  | SetSettingsEditLoaded;
