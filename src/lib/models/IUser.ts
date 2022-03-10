import { IMessage } from "./IMessage";

export interface IUser {
  name: string;
  lastname: string;
  fullname: string;
  userID: string;
  urlPhoto: string;
  online: boolean;
  info: IUserInfo;
  lastMessage: IMessage;
}

export interface IUserInfo {
  birthDay: string | null;
  email: string;
  hobby: string | null;
  instagram: null | string;
  twitter: null | string;
  joined: string;
  location: null | string;
}
