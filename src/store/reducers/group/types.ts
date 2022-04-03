import { IMuiSnackBarProps } from "../../../lib/models/DefaultValue";
import { GroupRoleType } from "../../../lib/type/role";

export interface IGroupState {
  openPopupCreateGroup: boolean;
  openPopupEditGroup: boolean;
  openPopupAddGroup: boolean;
  groupCreateError: null | string;
  groupCreateIsLoaded: boolean;
  selectedGroupInfo: string | null;
  statusSelectedGroup: "Private" | "Public";
  roleInGroup: GroupRoleType;
  groupChangeIsLoaded: boolean;
  groupSnackbarProps: IMuiSnackBarProps;
}

export enum GroupActionEnum {
  SET_OPEN_POPUP_CREATE_GROUP = "SET_OPEN_POPUP_CREATE_GROUP",
  SET_GROUP_CREATE_ERROR = "SET_GROUP_CREATE_ERROR",
  SET_GROUP_CREATE_IS_LOADED = "SET_GROUP_CREATE_IS_LOADED",
  SET_SELECTED_GROUP_INFO = "SET_SELECTED_GROUP_INFO",
  SET_OPEN_POPUP_EDIT_GROUP = "SET_OPEN_POPUP_EDIT_GROUP",
  SET_OPEN_POPUP_ADD_GROUP = "SET_OPEN_POPUP_ADD_GROUP",
  SET_ROLE_IN_GROUP = "SET_ROLE_IN_GROUP",
  SET_STATUS_SELECTED_GROUP = "SET_STATUS_SELECTED_GROUP",
  SET_GROUP_CHANGE_IS_LOADED = "SET_GROUP_CHANGE_IS_LOADED",
  SET_GROUP_SNACKBAR_PROPS = "SET_GROUP_SNACKBAR_PROPS",
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
export interface SetOpenPopupAddGroup {
  type: GroupActionEnum.SET_OPEN_POPUP_ADD_GROUP;
  payload: boolean;
}
export interface SetRoleInGroup {
  type: GroupActionEnum.SET_ROLE_IN_GROUP;
  payload: GroupRoleType;
}
export interface SetStatusSelectedGroup {
  type: GroupActionEnum.SET_STATUS_SELECTED_GROUP;
  payload: "Private" | "Public";
}
export interface SetGroupChangeIsLoaded {
  type: GroupActionEnum.SET_GROUP_CHANGE_IS_LOADED;
  payload: boolean;
}
export interface SetGroupSnackbarProps {
  type: GroupActionEnum.SET_GROUP_SNACKBAR_PROPS;
  payload: IMuiSnackBarProps;
}

export type GroupAction =
  | SetOpenPopupCreateGroup
  | SetGroupCreateError
  | SetGroupCreateIsLoaded
  | SetSelectedGroupInfo
  | SetOpenPopupEditGroup
  | SetOpenPopupAddGroup
  | SetRoleInGroup
  | SetStatusSelectedGroup
  | SetGroupChangeIsLoaded
  | SetGroupSnackbarProps;
