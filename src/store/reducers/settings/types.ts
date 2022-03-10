export interface ISettingsState {
  selectedSettingsButton: string;
}
export enum SettingsActionEnum {
  SET_SELECTED_SETTINGS_BUTTON = "SET_SELECTED_SETTINGS_BUTTON",
}

export interface SetSelectedSettingsButton {
  type: SettingsActionEnum.SET_SELECTED_SETTINGS_BUTTON;
  payload: string;
}

export type SettingsAction = SetSelectedSettingsButton;
