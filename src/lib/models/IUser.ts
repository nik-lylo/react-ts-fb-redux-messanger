export interface IUser {
  name: string;
  lastname: string;
  fullname: string;
  userID: string;
  urlPhoto: string;
  online: boolean;
  info: IUserInfo;
  invitationToGroup: string[];
  myGroup: string[];
}

export interface IUserInfo {
  birthDay: IBirthday | null;
  email: string;
  hobby: string | null;
  instagram: null | string;
  twitter: null | string;
  joined: Date;
  location: null | string;
}

export interface IBirthday {
  date: "" | number;
  month: string;
  year: "" | number;
}

export interface IUserObject {
  [key: string]: IUser;
}
