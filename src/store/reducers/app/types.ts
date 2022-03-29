import {
  IFriends,
  IFriendsUser,
  IHasFriendController,
} from "../../../lib/models/IFriends";
import { IGroup, IGroupObject } from "../../../lib/models/IGroup";
import { IUser, IUserObject } from "../../../lib/models/IUser";

export interface IAppState {
  usersObjectCollectionList: IUserObject;
  usersCollectionSnap: IUser[];
  friendsCollectionSnap: IFriends[];
  friendsCollectionList: IFriendsUser[];
  groupsCollectionSnap: IGroup[];
  groupsObjectCollectionList: IGroupObject;
  myGroupsList: IGroup[];
  isUsersControllerLoaded: boolean;
  isFriendsControllerLoaded: boolean;
  isGroupsControllerLoaded: boolean;
  hasUserFriend: IHasFriendController;
}

export enum AppActionEnum {
  SET_USERS_OBJECT_COLLECTION_LIST = "SET_USERS_OBJECT_COLLECTION_LIST",
  SET_USERS_COLLECTION_SNAP = "SET_USERS_COLLECTION_SNAP",
  SET_FRIENDS_COLLECTION_SNAP = "SET_FRIENDS_COLLECTION_SNAP",
  SET_FRIENDS_COLLECTION_LIST = "SET_FRIENDS_COLLECTION_LIST",
  SET_GROUPS_COLLECTION_SNAP = "SET_GROUPS_COLLECTION_SNAP",
  SET_GROUPS_OBJECT_COLLECTION_LIST = "SET_GROUPS_OBJECT_COLLECTION_LIST",
  SET_MY_GROUP_LIST = "SET_MY_GROUP_LIST",
  SET_IS_USERS_CONTROLLER_LOADED = "SET_IS_USERS_CONTROLLER_LOADED",
  SET_IS_FRIENDS_CONTROLLER_LOADED = "SET_IS_FRIENDS_CONTROLLER_LOADED",
  SET_IS_GROUPS_CONTROLLER_LOADED = "SET_IS_GROUPS_CONTROLLER_LOADED",
  SET_HAS_USER_FRIEND = "SET_HAS_USER_FRIEND",
}

export interface SetUsersObjectCollectionList {
  type: AppActionEnum.SET_USERS_OBJECT_COLLECTION_LIST;
  payload: IUserObject;
}
export interface SetUsersCollectionSnap {
  type: AppActionEnum.SET_USERS_COLLECTION_SNAP;
  payload: IUser[];
}
export interface SetFriendsCollectionSnap {
  type: AppActionEnum.SET_FRIENDS_COLLECTION_SNAP;
  payload: IFriends[];
}
export interface SetFriendsCollectionList {
  type: AppActionEnum.SET_FRIENDS_COLLECTION_LIST;
  payload: IFriendsUser[];
}
export interface SetGroupsCollectionSnap {
  type: AppActionEnum.SET_GROUPS_COLLECTION_SNAP;
  payload: IGroup[];
}
export interface SetGroupsObjectCollectionList {
  type: AppActionEnum.SET_GROUPS_OBJECT_COLLECTION_LIST;
  payload: IGroupObject;
}
export interface SetMyGroupList {
  type: AppActionEnum.SET_MY_GROUP_LIST;
  payload: IGroup[];
}
export interface SetIsFriendsControllerLoaded {
  type: AppActionEnum.SET_IS_FRIENDS_CONTROLLER_LOADED;
  payload: boolean;
}
export interface SetIsUsersControllerLoaded {
  type: AppActionEnum.SET_IS_USERS_CONTROLLER_LOADED;
  payload: boolean;
}
export interface SetHasUserFriend {
  type: AppActionEnum.SET_HAS_USER_FRIEND;
  payload: IHasFriendController;
}
export interface SetIsGroupsControllerLoaded {
  type: AppActionEnum.SET_IS_GROUPS_CONTROLLER_LOADED;
  payload: boolean;
}

export type AppAction =
  | SetUsersObjectCollectionList
  | SetUsersCollectionSnap
  | SetFriendsCollectionSnap
  | SetFriendsCollectionList
  | SetGroupsCollectionSnap
  | SetGroupsObjectCollectionList
  | SetMyGroupList
  | SetIsFriendsControllerLoaded
  | SetIsUsersControllerLoaded
  | SetIsGroupsControllerLoaded
  | SetHasUserFriend;
