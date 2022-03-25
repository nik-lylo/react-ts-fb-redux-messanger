import { IUser } from "../../../lib/models/IUser";

export interface IProfileState {
  user: IUser;
}

export enum ProfileActionEnum {
  SET_USER = "SET_USER",
}

export interface SetUser {
  type: ProfileActionEnum.SET_USER;
  payload: IUser;
}

export type ProfileAction = SetUser;
