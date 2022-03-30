export interface IGroupState {
  openPopupCreateGroup: boolean;
  groupCreateError: null | string;
  groupCreateIsLoaded: boolean;
  selectedGroupInfo: string | null;
  openPopupEditGroup: boolean;
}

export enum GroupActionEnum {
  SET_OPEN_POPUP_CREATE_GROUP = "SET_OPEN_POPUP_CREATE_GROUP",
  SET_GROUP_CREATE_ERROR = "SET_GROUP_CREATE_ERROR",
  SET_GROUP_CREATE_IS_LOADED = "SET_GROUP_CREATE_IS_LOADED",
  SET_SELECTED_GROUP_INFO = "SET_SELECTED_GROUP_INFO",
  SET_OPEN_POPUP_EDIT_GROUP = "SET_OPEN_POPUP_EDIT_GROUP",
}

export interface SetOpenPopupCreateGroup {
  type: GroupActionEnum.SET_OPEN_POPUP_CREATE_GROUP;
  payload: boolean;
}
export interface SetGroupCreateError {
  type: GroupActionEnum.SET_GROUP_CREATE_ERROR;
  payload: null | string;
}
export interface SetGroupCreateIsLoaded {
  type: GroupActionEnum.SET_GROUP_CREATE_IS_LOADED;
  payload: boolean;
}
export interface SetSelectedGroupInfo {
  type: GroupActionEnum.SET_SELECTED_GROUP_INFO;
  payload: null | string;
}
export interface SetOpenPopupEditGroup {
  type: GroupActionEnum.SET_OPEN_POPUP_EDIT_GROUP;
  payload: boolean;
}

export type GroupAction =
  | SetOpenPopupCreateGroup
  | SetGroupCreateError
  | SetGroupCreateIsLoaded
  | SetSelectedGroupInfo
  | SetOpenPopupEditGroup;
