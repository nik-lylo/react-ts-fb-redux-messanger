import { IUser } from "../../../lib/models/IUser";

export interface IProfileState {
  user: IUser;
  isUserInstalled: boolean;
}

export enum ProfileActionEnum {
  SET_USER = "SET_USER",
  SET_IS_USER_INSTALLED = "SET_IS_USER_INSTALLED",
}

export interface SetUser {
  type: ProfileActionEnum.SET_USER;
  payload: IUser;
}
export interface SetIsUserInstalled {
  type: ProfileActionEnum.SET_IS_USER_INSTALLED;
  payload: boolean;
}

export type ProfileAction = SetUser | SetIsUserInstalled;
