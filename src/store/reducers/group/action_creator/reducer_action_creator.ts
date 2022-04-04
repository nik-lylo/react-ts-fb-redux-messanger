import { IMuiSnackBarProps } from "../../../../lib/models/DefaultValue";
import { GroupRoleType } from "../../../../lib/type/role";
import {
  GroupActionEnum,
  SetGroupChangeIsLoaded,
  SetGroupCreateError,
  SetGroupCreateIsLoaded,
  SetGroupSearchLoader,
  SetGroupSnackbarProps,
  SetOpenPopupAddGroup,
  SetOpenPopupCreateGroup,
  SetOpenPopupEditGroup,
  SetRoleInGroup,
  SetSelectedGroupInfo,
  SetStatusSelectedGroup,
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
  setOpenPopupAddGroup: (flag: boolean): SetOpenPopupAddGroup => ({
    type: GroupActionEnum.SET_OPEN_POPUP_ADD_GROUP,
    payload: flag,
  }),
  setRoleInGroup: (state: GroupRoleType): SetRoleInGroup => ({
    type: GroupActionEnum.SET_ROLE_IN_GROUP,
    payload: state,
  }),
  setStatusSelectedGroup: (
    state: "Private" | "Public"
  ): SetStatusSelectedGroup => ({
    type: GroupActionEnum.SET_STATUS_SELECTED_GROUP,
    payload: state,
  }),
  setGroupChangeIsLoaded: (load: boolean): SetGroupChangeIsLoaded => ({
    type: GroupActionEnum.SET_GROUP_CHANGE_IS_LOADED,
    payload: load,
  }),
  setGroupSnackbarProps: (props: IMuiSnackBarProps): SetGroupSnackbarProps => ({
    type: GroupActionEnum.SET_GROUP_SNACKBAR_PROPS,
    payload: props,
  }),
  setGroupSearchLoader: (flag: boolean): SetGroupSearchLoader => ({
    type: GroupActionEnum.SET_GROUP_SEARCH_LOADER,
    payload: flag,
  }),
};
