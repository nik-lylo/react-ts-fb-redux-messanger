import { IUser } from "../../../lib/models/IUser";

export interface IProfileState {
  user: IUser;
  birthdayError: null | string;
  editError: null | string;
  editLoading: boolean;
  popupAvatarUpdateOpen: boolean;
}

export enum ProfileEnum {
  SET_PHOTO_URL = "SET_PHOTO_URL",
  SET_NEW_USER = "SET_NEW_USER",
  SET_BIRTHDAY_ERROR = "SET_BIRTHDAY_ERROR",
  SET_EDIT_ERROR = "SET_EDIT_ERROR",
  SET_EDIT_LOADING = "SET_EDIT_LOADING",
  SET_POPUP_AVATAR_UPDATE_OPEN = "SET_POPUP_AVATAR_UPDATE_OPEN ",
}

export interface SetPhotoUrl {
  type: ProfileEnum.SET_PHOTO_URL;
  payload: string;
}

export interface SetNewUser {
  type: ProfileEnum.SET_NEW_USER;
  payload: IUser;
}

export interface SetBirthdayError {
  type: ProfileEnum.SET_BIRTHDAY_ERROR;
  payload: string | null;
}

export interface SetEditError {
  type: ProfileEnum.SET_EDIT_ERROR;
  payload: string | null;
}

export interface SetEditLoading {
  type: ProfileEnum.SET_EDIT_LOADING;
  payload: boolean;
}

export interface SetAvatarPopupUpdateOpen {
  type: ProfileEnum.SET_POPUP_AVATAR_UPDATE_OPEN;
  payload: boolean;
}

export type ProfileAction =
  | SetPhotoUrl
  | SetNewUser
  | SetBirthdayError
  | SetEditError
  | SetEditLoading
  | SetAvatarPopupUpdateOpen;
