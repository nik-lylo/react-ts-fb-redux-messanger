import { GroupAction, GroupActionEnum, IGroupState } from "./types";

const initialState: IGroupState = {
  openPopupCreateGroup: false,
  groupCreateError: null,
  groupCreateIsLoaded: false,
};

export default function groupReducer(
  state = initialState,
  action: GroupAction
): IGroupState {
  switch (action.type) {
    case GroupActionEnum.SET_OPEN_POPUP_CREATE_GROUP:
      return { ...state, openPopupCreateGroup: action.payload };
    case GroupActionEnum.SET_GROUP_CREATE_ERROR:
      return { ...state, groupCreateError: action.payload };
    case GroupActionEnum.SET_GROUP_CREATE_IS_LOADED:
      return { ...state, groupCreateIsLoaded: action.payload };
    default:
      return state;
  }
}
