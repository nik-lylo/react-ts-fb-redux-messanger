import { GroupAction, GroupActionEnum, IGroupState } from "./types";

const initialState: IGroupState = {
  openPopupCreateGroup: false,
  groupCreateError: null,
  groupCreateIsLoaded: false,
  selectedGroupInfo: null,
  statusSelectedGroup: "Public",
  openPopupEditGroup: false,
  openPopupAddGroup: false,
  roleInGroup: null,
  groupChangeIsLoaded: false,
  groupSnackbarProps: { open: false, text: "", status: "success" },
  groupSearchLoader: false,
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
    case GroupActionEnum.SET_SELECTED_GROUP_INFO:
      return { ...state, selectedGroupInfo: action.payload };
    case GroupActionEnum.SET_OPEN_POPUP_EDIT_GROUP:
      return { ...state, openPopupEditGroup: action.payload };
    case GroupActionEnum.SET_OPEN_POPUP_ADD_GROUP:
      return { ...state, openPopupAddGroup: action.payload };
    case GroupActionEnum.SET_ROLE_IN_GROUP:
      return { ...state, roleInGroup: action.payload };
    case GroupActionEnum.SET_STATUS_SELECTED_GROUP:
      return { ...state, statusSelectedGroup: action.payload };
    case GroupActionEnum.SET_GROUP_CHANGE_IS_LOADED:
      return { ...state, groupChangeIsLoaded: action.payload };
    case GroupActionEnum.SET_GROUP_SNACKBAR_PROPS:
      return { ...state, groupSnackbarProps: action.payload };
    case GroupActionEnum.SET_GROUP_SEARCH_LOADER:
      return { ...state, groupSearchLoader: action.payload };
    default:
      return state;
  }
}
