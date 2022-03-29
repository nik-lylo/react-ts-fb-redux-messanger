import { AppAction, AppActionEnum, IAppState } from "./types";

const initialState: IAppState = {
  usersObjectCollectionList: {},
  usersCollectionSnap: [],
  friendsCollectionSnap: [],
  friendsCollectionList: [],
  groupsCollectionSnap: [],
  groupsObjectCollectionList: {},
  myGroupsList: [],
  isUsersControllerLoaded: false,
  isFriendsControllerLoaded: false,
  isGroupsControllerLoaded: false,
  hasUserFriend: { checked: false, hasFriend: false },
};

export default function appReducer(
  state = initialState,
  action: AppAction
): IAppState {
  switch (action.type) {
    case AppActionEnum.SET_USERS_OBJECT_COLLECTION_LIST:
      return { ...state, usersObjectCollectionList: action.payload };
    case AppActionEnum.SET_USERS_COLLECTION_SNAP:
      return { ...state, usersCollectionSnap: action.payload };
    case AppActionEnum.SET_FRIENDS_COLLECTION_SNAP:
      return { ...state, friendsCollectionSnap: action.payload };
    case AppActionEnum.SET_FRIENDS_COLLECTION_LIST:
      return { ...state, friendsCollectionList: action.payload };
    case AppActionEnum.SET_GROUPS_COLLECTION_SNAP:
      return { ...state, groupsCollectionSnap: action.payload };
    case AppActionEnum.SET_GROUPS_OBJECT_COLLECTION_LIST:
      return { ...state, groupsObjectCollectionList: action.payload };
    case AppActionEnum.SET_MY_GROUP_LIST:
      return { ...state, myGroupsList: action.payload };
    case AppActionEnum.SET_IS_USERS_CONTROLLER_LOADED:
      return { ...state, isUsersControllerLoaded: action.payload };
    case AppActionEnum.SET_IS_FRIENDS_CONTROLLER_LOADED:
      return { ...state, isFriendsControllerLoaded: action.payload };
    case AppActionEnum.SET_IS_GROUPS_CONTROLLER_LOADED:
      return { ...state, isGroupsControllerLoaded: action.payload };
    case AppActionEnum.SET_HAS_USER_FRIEND:
      return { ...state, hasUserFriend: action.payload };
    default:
      return state;
  }
}
