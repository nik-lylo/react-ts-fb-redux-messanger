import { GroupActionEnum, SetOpenPopupCreateGroup } from "../types";

export const GroupActionCreators = {
  setOpenPopupCreateGroup: (flag: boolean): SetOpenPopupCreateGroup => ({
    type: GroupActionEnum.SET_OPEN_POPUP_CREATE_GROUP,
    payload: flag,
  }),
};
