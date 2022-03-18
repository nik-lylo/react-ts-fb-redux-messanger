import {
  GroupActionEnum,
  SetCreateGroupError,
  SetOpenPopupCreateGroup,
} from "../types";

export const GroupActionCreators = {
  setOpenPopupCreateGroup: (flag: boolean): SetOpenPopupCreateGroup => ({
    type: GroupActionEnum.SET_OPEN_POPUP_CREATE_GROUP,
    payload: flag,
  }),
  setCreateGroupError: (err: string | null): SetCreateGroupError => ({
    type: GroupActionEnum.SET_CREATE_GROUP_ERROR,
    payload: err,
  }),
};
