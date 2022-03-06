import { IUser } from "../../../lib/models/IUser";

export interface IChangeUserState {
  openAddPhoto: boolean;
  changeError: string | null;
  isChangeLoading: boolean;
}

export enum ChangeUserEnum {
  SET_ADDPHOTO_MODAL = "SET_ADDPHOTO_MODAL",
  SET_CHANGE_LOADING = "SET_CHANGE_LOADING",
  SET_CHANGE_ERROR = "SET_CHANGE_ERROR",
}

export interface SetAddPhotoModal {
  type: ChangeUserEnum.SET_ADDPHOTO_MODAL;
  payload: boolean;
}

export interface SetChangeIsLoading {
  type: ChangeUserEnum.SET_CHANGE_LOADING;
  payload: boolean;
}

export interface SetChangeError {
  type: ChangeUserEnum.SET_CHANGE_ERROR;
  payload: string | null;
}

export type ChangeUserAction =
  | SetAddPhotoModal
  | SetChangeIsLoading
  | SetChangeError;
