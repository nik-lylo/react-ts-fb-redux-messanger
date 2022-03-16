export interface IGroupState {
  openPopupCreateGroup: boolean;
}
export enum GroupActionEnum {
  SET_OPEN_POPUP_CREATE_GROUP = "SET_OPEN_POPUP_CREATE_GROUP",
}
export interface SetOpenPopupCreateGroup {
  type: GroupActionEnum.SET_OPEN_POPUP_CREATE_GROUP;
  payload: boolean;
}
export type GroupAction = SetOpenPopupCreateGroup;
