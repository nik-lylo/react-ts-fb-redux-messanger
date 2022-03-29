import {
  GroupActionEnum,
  SetGroupCreateError,
  SetGroupCreateIsLoaded,
  SetOpenPopupCreateGroup,
} from "../types";

export const GroupReducerActionCreators = {
  setOpenPopupCreateGroup: (flag: boolean): SetOpenPopupCreateGroup => ({
    type: GroupActionEnum.SET_OPEN_POPUP_CREATE_GROUP,
    payload: flag,
  }),
  setGroupCreateIsLoaded: (flag: boolean): SetGroupCreateIsLoaded => ({
    type: GroupActionEnum.SET_GROUP_CREATE_IS_LOADED,
    payload: flag,
  }),
  setGroupCreateError: (err: null | string): SetGroupCreateError => ({
    type: GroupActionEnum.SET_GROUP_CREATE_ERROR,
    payload: err,
  }),
};
