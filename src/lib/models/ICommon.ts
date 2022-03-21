import { IGroup } from "./IGroup";
import { IUser } from "./IUser";

export interface IGenericObject {
  [key: string]: any;
}

export interface IUsersObject {
  [key: string]: IUser;
}

export interface IGroupObject {
  [key: string]: IGroup;
}
