import { SetSelectedSettingsButton, SettingsActionEnum } from "../types";

export const SettingsActionCreators = {
  setSelectedSettingsButton: (button: string): SetSelectedSettingsButton => ({
    type: SettingsActionEnum.SET_SELECTED_SETTINGS_BUTTON,
    payload: button,
  }),
};
