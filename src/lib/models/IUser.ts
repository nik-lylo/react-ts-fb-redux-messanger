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
  unread?: number;
}

export interface IUserInfo {
  birthDay: IBirthday | null;
  email: string;
  hobby: string | null;
  instagram: null | string;
  twitter: null | string;
  joined: string;
  location: null | string;
}

export interface IBirthday {
  date: "" | number;
  month: string;
  year: "" | number;
}
