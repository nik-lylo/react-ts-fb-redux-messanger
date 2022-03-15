import { IUsersObject } from "../../../lib/models/ICommon";
import { IUser } from "../../../lib/models/IUser";

export interface IContactState {
  contactError: boolean | null;
  isContactLoading: boolean;
  globalContact: IUser[];
  filteredGlobalContact: IUser[];
  myContact: IUser[];
  filteredMyContact: IUser[];
  selectedContact: IUser;
  contactSnapList: IUser[];
  usersCollectionList: IUsersObject;
  isUsersCollectionListLoaded: boolean;
}

export enum ContactActionEnum {
  SET_CONTACT_ERROR = "SET_CONTACT_ERROR",
  SET_IS_CONTACT_LOADING = "SET_IS_CONTACT_LOADING",
  SET_GLOBAL_CONTACT = "SET_GLOBAL_CONTACT",
  SET_FILTERED_GLOBAL_CONTACT = "SET_FILTERED_GLOBAL_CONTACT",
  SET_FILTERED_MY_CONTACT = "SET_FILTERED_MY_CONTACT",
  SET_MY_CONTACT = "SET_MY_CONTACT",
  SET_SELECTED_CONTACT = "SET_SELECTED_CONTACT",
  SET_CONTACT_SNAP_LIST = "SET_CONTACT_SNAP_LIST",
  SET_USERS_COLLECTION_LIST = "SET_USERS_COLLECTION_LIST",
  SET_IS_USERS_COLLECTION_LIST_LOADED = "SET_IS_USERS_COLLECTION_LIST_LOADED",
}

export interface SetContactError {
  type: ContactActionEnum.SET_CONTACT_ERROR;
  payload: boolean | null;
}

export interface SetIsContactLoading {
  type: ContactActionEnum.SET_IS_CONTACT_LOADING;
  payload: boolean;
}

export interface SetIsUsersCollectionListLoaded {
  type: ContactActionEnum.SET_IS_USERS_COLLECTION_LIST_LOADED;
  payload: boolean;
}
export interface SetGlobalContact {
  type: ContactActionEnum.SET_GLOBAL_CONTACT;
  payload: IUser[];
}
export interface SetFilteredGlobalContact {
  type: ContactActionEnum.SET_FILTERED_GLOBAL_CONTACT;
  payload: IUser[];
}

export interface SetMyContact {
  type: ContactActionEnum.SET_MY_CONTACT;
  payload: IUser[];
}

export interface SetFilteredMyContact {
  type: ContactActionEnum.SET_FILTERED_MY_CONTACT;
  payload: IUser[];
}

export interface SetSelectedContact {
  type: ContactActionEnum.SET_SELECTED_CONTACT;
  payload: IUser;
}

export interface SetContactSnapList {
  type: ContactActionEnum.SET_CONTACT_SNAP_LIST;
  payload: IUser[];
}

export interface SetUsersCollectionList {
  type: ContactActionEnum.SET_USERS_COLLECTION_LIST;
  payload: IUsersObject;
}

export type ContactAction =
  | SetContactError
  | SetIsContactLoading
  | SetGlobalContact
  | SetMyContact
  | SetFilteredGlobalContact
  | SetFilteredMyContact
  | SetSelectedContact
  | SetContactSnapList
  | SetUsersCollectionList
  | SetIsUsersCollectionListLoaded;
