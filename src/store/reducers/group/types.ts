import { IGroupObject } from "../../../lib/models/ICommon";
import { IGroup } from "../../../lib/models/IGroup";

export interface IGroupState {
  openPopupCreateGroup: boolean;
  createGroupError: string | null;
  groupIsLoading: boolean;
  groupSnapList: IGroup[];
  groupCollectionList: IGroupObject;
  isGroupCollectionListLoaded: boolean;
}
export enum GroupActionEnum {
  SET_GROUP_IS_LOADING = "SET_GROUP_IS_LOADING",
  SET_OPEN_POPUP_CREATE_GROUP = "SET_OPEN_POPUP_CREATE_GROUP",
  SET_CREATE_GROUP_ERROR = "SET_CREATE_GROUP_ERROR",
  SET_GROUP_SNAP_LIST = "SET_GROUP_SNAP_LIST",
  SET_IS_GROUP_COLLECTION_LIST_LOADED = "SET_GROUP_COLLECTION_LIST_LOADED",
  SET_GROUP_COLLECTION_LIST = "SET_GROUP_COLLECTION_LIST",
}
export interface SetOpenPopupCreateGroup {
  type: GroupActionEnum.SET_OPEN_POPUP_CREATE_GROUP;
  payload: boolean;
}
export interface SetCreateGroupError {
  type: GroupActionEnum.SET_CREATE_GROUP_ERROR;
  payload: string | null;
}
export interface SetGroupIsLoading {
  type: GroupActionEnum.SET_GROUP_IS_LOADING;
  payload: boolean;
}
export interface SetIsGroupCollectionListLoaded {
  type: GroupActionEnum.SET_IS_GROUP_COLLECTION_LIST_LOADED;
  payload: boolean;
}
export interface SetGroupSnapList {
  type: GroupActionEnum.SET_GROUP_SNAP_LIST;
  payload: IGroup[];
}
export interface SetGroupCollectionList {
  type: GroupActionEnum.SET_GROUP_COLLECTION_LIST;
  payload: IGroupObject;
}
export type GroupAction =
  | SetOpenPopupCreateGroup
  | SetCreateGroupError
  | SetGroupIsLoading
  | SetGroupSnapList
  | SetGroupCollectionList
  | SetIsGroupCollectionListLoaded;
