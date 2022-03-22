import { IGroup } from "../../../lib/models/IGroup";
import { GroupAction, GroupActionEnum, IGroupState } from "./types";
const initialState: IGroupState = {
  openPopupCreateGroup: false,
  createGroupError: null,
  groupIsLoading: false,
  groupSnapList: [],
  groupCollectionList: {},
  myGroup: [],
  isGroupCollectionListLoaded: false,
  selectedGroup: {} as IGroup,
};

export default function groupReducer(
  state = initialState,
  action: GroupAction
): IGroupState {
  switch (action.type) {
    case GroupActionEnum.SET_OPEN_POPUP_CREATE_GROUP:
      return { ...state, openPopupCreateGroup: action.payload };
    case GroupActionEnum.SET_CREATE_GROUP_ERROR:
      return { ...state, createGroupError: action.payload };
    case GroupActionEnum.SET_GROUP_IS_LOADING:
      return { ...state, groupIsLoading: action.payload };
    case GroupActionEnum.SET_GROUP_SNAP_LIST:
      return { ...state, groupSnapList: action.payload };
    case GroupActionEnum.SET_GROUP_COLLECTION_LIST:
      return { ...state, groupCollectionList: action.payload };
    case GroupActionEnum.SET_IS_GROUP_COLLECTION_LIST_LOADED:
      return { ...state, isGroupCollectionListLoaded: action.payload };
    case GroupActionEnum.SET_MY_GROUP:
      return { ...state, myGroup: action.payload };
    case GroupActionEnum.SET_SELECTED_GROUP:
      return { ...state, selectedGroup: action.payload };
    default:
      return state;
  }
}
