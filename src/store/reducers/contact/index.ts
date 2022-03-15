import { IUsersObject } from "../../../lib/models/ICommon";
import { IUser } from "../../../lib/models/IUser";
import { ContactAction, ContactActionEnum, IContactState } from "./types";

const initialState: IContactState = {
  isContactLoading: false,
  contactError: null,
  contactSnapList: [] as IUser[],
  globalContact: [] as IUser[],
  myContact: [] as IUser[],
  filteredGlobalContact: [] as IUser[],
  filteredMyContact: [] as IUser[],
  selectedContact: {} as IUser,
  usersCollectionList: {} as IUsersObject,
  isUsersCollectionListLoaded: false,
};

export default function contactReducer(
  state = initialState,
  action: ContactAction
): IContactState {
  switch (action.type) {
    case ContactActionEnum.SET_IS_CONTACT_LOADING:
      return { ...state, isContactLoading: action.payload };
    case ContactActionEnum.SET_IS_USERS_COLLECTION_LIST_LOADED:
      return { ...state, isUsersCollectionListLoaded: action.payload };
    case ContactActionEnum.SET_CONTACT_ERROR:
      return { ...state, contactError: action.payload };
    case ContactActionEnum.SET_GLOBAL_CONTACT:
      return { ...state, globalContact: action.payload };
    case ContactActionEnum.SET_FILTERED_GLOBAL_CONTACT:
      return { ...state, filteredGlobalContact: action.payload };
    case ContactActionEnum.SET_CONTACT_SNAP_LIST:
      return { ...state, contactSnapList: action.payload };
    case ContactActionEnum.SET_MY_CONTACT:
      return { ...state, myContact: action.payload };
    case ContactActionEnum.SET_FILTERED_MY_CONTACT:
      return { ...state, filteredMyContact: action.payload };
    case ContactActionEnum.SET_SELECTED_CONTACT:
      return { ...state, selectedContact: action.payload };
    case ContactActionEnum.SET_USERS_COLLECTION_LIST:
      return { ...state, usersCollectionList: action.payload };
    default:
      return state;
  }
}
