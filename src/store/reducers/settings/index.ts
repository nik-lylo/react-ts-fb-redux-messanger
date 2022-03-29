import { ISettingsState, SettingsAction, SettingsActionEnum } from "./types";

const initialState: ISettingsState = {
  settingsEditError: null,
  settingsBirthError: null,
  settingsEditLoaded: false,
};

export default function settingsReducer(
  state = initialState,
  action: SettingsAction
): ISettingsState {
  switch (action.type) {
    case SettingsActionEnum.SET_SETTINGS_EDIT_ERROR:
      return { ...state, settingsEditError: action.payload };
    case SettingsActionEnum.SET_SETTINGS_BIRTH_ERROR:
      return { ...state, settingsBirthError: action.payload };
    case SettingsActionEnum.SET_SETTINGS_EDIT_LOADED:
      return { ...state, settingsEditLoaded: action.payload };
    default:
      return state;
  }
}
