import { IUser } from "../../../lib/models/IUser";

export interface IContactState {
  contactError: boolean | null;
  isContactLoading: boolean;
  globalContact: IUser[];
  filteredGlobalContact: IUser[];
  myContact: IUser[];
  filteredMyContact: IUser[];
  selectedContact: IUser;
}

export enum ContactActionEnum {
  SET_CONTACT_ERROR = "SET_CONTACT_ERROR",
  SET_IS_CONTACT_LOADING = "SET_IS_CONTACT_LOADING",
  SET_GLOBAL_CONTACT = "SET_GLOBAL_CONTACT",
  SET_FILTERED_GLOBAL_CONTACT = "SET_FILTERED_GLOBAL_CONTACT",
  SET_FILTERED_MY_CONTACT = "SET_FILTERED_MY_CONTACT",
  SET_MY_CONTACT = "SET_MY_CONTACT",
  SET_SELECTED_CONTACT = "SET_SELECTED_CONTACT",
}

export interface SetContactError {
  type: ContactActionEnum.SET_CONTACT_ERROR;
  payload: boolean | null;
}

export interface SetIsContactLoading {
  type: ContactActionEnum.SET_IS_CONTACT_LOADING;
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
export type ContactAction =
  | SetContactError
  | SetIsContactLoading
  | SetGlobalContact
  | SetMyContact
  | SetFilteredGlobalContact
  | SetFilteredMyContact
  | SetSelectedContact;
