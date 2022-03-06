import { IUser } from "../../../../lib/models/IUser";
import {
  ContactActionEnum,
  SetContactError,
  SetFilteredGlobalContact,
  SetFilteredMyContact,
  SetGlobalContact,
  SetIsContactLoading,
  SetMyContact,
  SetSelectedContact,
} from "../types";

export const ContactActionCreators = {
  setIsContactLoading: (flag: boolean): SetIsContactLoading => ({
    type: ContactActionEnum.SET_IS_CONTACT_LOADING,
    payload: flag,
  }),
  setContactError: (text: boolean | null): SetContactError => ({
    type: ContactActionEnum.SET_CONTACT_ERROR,
    payload: text,
  }),
  setGlobalContact: (arr: IUser[]): SetGlobalContact => ({
    type: ContactActionEnum.SET_GLOBAL_CONTACT,
    payload: arr,
  }),
  setFilteredGlobalContact: (arr: IUser[]): SetFilteredGlobalContact => ({
    type: ContactActionEnum.SET_FILTERED_GLOBAL_CONTACT,
    payload: arr,
  }),
  setMyContact: (arr: IUser[]): SetMyContact => ({
    type: ContactActionEnum.SET_MY_CONTACT,
    payload: arr,
  }),
  setFilteredMyContact: (arr: IUser[]): SetFilteredMyContact => ({
    type: ContactActionEnum.SET_FILTERED_MY_CONTACT,
    payload: arr,
  }),
  setSelectedContact: (obj: IUser): SetSelectedContact => ({
    type: ContactActionEnum.SET_SELECTED_CONTACT,
    payload: obj,
  }),
};
