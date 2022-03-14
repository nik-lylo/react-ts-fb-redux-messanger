import { IUser } from "../../../../lib/models/IUser";
import {
  SetNewUser,
  SetPhotoUrl,
  ProfileEnum,
  SetBirthdayError,
  SetEditError,
  SetEditLoading,
  SetAvatarPopupUpdateOpen,
} from "../types";

export const ProfileActionCreators = {
  setNewUser: (userObj: IUser): SetNewUser => ({
    type: ProfileEnum.SET_NEW_USER,
    payload: userObj,
  }),
  setNewPhotoUrl: (url: string): SetPhotoUrl => ({
    type: ProfileEnum.SET_PHOTO_URL,
    payload: url,
  }),
  setBirthdayError: (err: string | null): SetBirthdayError => ({
    type: ProfileEnum.SET_BIRTHDAY_ERROR,
    payload: err,
  }),
  setEditError: (err: string | null): SetEditError => ({
    type: ProfileEnum.SET_EDIT_ERROR,
    payload: err,
  }),
  setEditLoading: (flag: boolean): SetEditLoading => ({
    type: ProfileEnum.SET_EDIT_LOADING,
    payload: flag,
  }),
  setPopupAvatarUpdateOpen: (flag: boolean): SetAvatarPopupUpdateOpen => ({
    type: ProfileEnum.SET_POPUP_AVATAR_UPDATE_OPEN,
    payload: flag,
  }),
};
