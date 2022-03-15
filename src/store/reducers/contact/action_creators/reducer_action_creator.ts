import { IUsersObject } from "../../../../lib/models/ICommon";
import { IUser } from "../../../../lib/models/IUser";
import {
  ContactActionEnum,
  SetContactError,
  SetContactSnapList,
  SetFilteredGlobalContact,
  SetFilteredMyContact,
  SetGlobalContact,
  SetIsContactLoading,
  SetIsUsersCollectionListLoaded,
  SetMyContact,
  SetSelectedContact,
  SetUsersCollectionList,
} from "../types";

export const ContactActionCreators = {
  setIsContactLoading: (flag: boolean): SetIsContactLoading => ({
    type: ContactActionEnum.SET_IS_CONTACT_LOADING,
    payload: flag,
  }),
  setIsUsersCollectioListLoaded: (
    flag: boolean
  ): SetIsUsersCollectionListLoaded => ({
    type: ContactActionEnum.SET_IS_USERS_COLLECTION_LIST_LOADED,
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
  setContactSnapList: (arr: IUser[]): SetContactSnapList => ({
    type: ContactActionEnum.SET_CONTACT_SNAP_LIST,
    payload: arr,
  }),
  setUsersCollectionList: (obj: IUsersObject): SetUsersCollectionList => ({
    type: ContactActionEnum.SET_USERS_COLLECTION_LIST,
    payload: obj,
  }),
};
