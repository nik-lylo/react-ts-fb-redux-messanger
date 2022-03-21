import { GroupAction, GroupActionEnum, IGroupState } from "./types";
const initialState: IGroupState = {
  openPopupCreateGroup: false,
  createGroupError: null,
  groupIsLoading: false,
  groupSnapList: [],
  groupCollectionList: {},
  isGroupCollectionListLoaded: false,
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
    default:
      return state;
  }
}
