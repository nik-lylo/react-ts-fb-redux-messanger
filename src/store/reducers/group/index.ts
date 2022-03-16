import { GroupAction, GroupActionEnum, IGroupState } from "./types";

const initialState: IGroupState = {
  openPopupCreateGroup: false,
};

export default function groupReducer(
  state = initialState,
  action: GroupAction
): IGroupState {
  switch (action.type) {
    case GroupActionEnum.SET_OPEN_POPUP_CREATE_GROUP:
      return { ...state, openPopupCreateGroup: action.payload };
    default:
      return state;
  }
}
