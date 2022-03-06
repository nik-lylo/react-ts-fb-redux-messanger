import { IUser } from "../../../lib/models/IUser";

export enum ProfileEnum {
  SET_PHOTO_URL = "SET_PHOTO_URL",
  SET_NEW_USER = "SET_NEW_USER",
}

export interface SetPhotoUrl {
  type: ProfileEnum.SET_PHOTO_URL;
  payload: string;
}
export interface SetNewUser {
  type: ProfileEnum.SET_NEW_USER;
  payload: IUser;
}

export type ProfileAction = SetPhotoUrl | SetNewUser;
