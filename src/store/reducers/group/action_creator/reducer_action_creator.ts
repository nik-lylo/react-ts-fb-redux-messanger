import {
  GroupActionEnum,
  SetGroupCreateError,
  SetGroupCreateIsLoaded,
  SetOpenPopupCreateGroup,
  SetOpenPopupEditGroup,
  SetSelectedGroupInfo,
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
  setSelectedGroupInfo: (id: string | null): SetSelectedGroupInfo => ({
    type: GroupActionEnum.SET_SELECTED_GROUP_INFO,
    payload: id,
  }),
  setOpenPopupEditGroup: (flag: boolean): SetOpenPopupEditGroup => ({
    type: GroupActionEnum.SET_OPEN_POPUP_EDIT_GROUP,
    payload: flag,
  }),
};
