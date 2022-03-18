export interface IGroupState {
  openPopupCreateGroup: boolean;
  createGroupError: string | null;
}
export enum GroupActionEnum {
  SET_OPEN_POPUP_CREATE_GROUP = "SET_OPEN_POPUP_CREATE_GROUP",
  SET_CREATE_GROUP_ERROR = "SET_CREATE_GROUP_ERROR",
}
export interface SetOpenPopupCreateGroup {
  type: GroupActionEnum.SET_OPEN_POPUP_CREATE_GROUP;
  payload: boolean;
}
export interface SetCreateGroupError {
  type: GroupActionEnum.SET_CREATE_GROUP_ERROR;
  payload: string | null;
}
export type GroupAction = SetOpenPopupCreateGroup | SetCreateGroupError;
