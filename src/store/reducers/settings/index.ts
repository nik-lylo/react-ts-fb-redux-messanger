import { ISettingsState, SettingsAction, SettingsActionEnum } from "./types";

const initialState: ISettingsState = {
  selectedSettingsButton: "",
};

export default function settingsReducer(
  state = initialState,
  action: SettingsAction
): ISettingsState {
  switch (action.type) {
    case SettingsActionEnum.SET_SELECTED_SETTINGS_BUTTON:
      return { ...state, selectedSettingsButton: action.payload };
    default:
      return state;
  }
}
