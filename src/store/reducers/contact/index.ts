import { IUser } from "../../../lib/models/IUser";
import { ContactAction, ContactActionEnum, IContactState } from "./types";

const initialState: IContactState = {
  isContactLoading: false,
  contactError: null,
  globalContact: [] as IUser[],
  myContact: [] as IUser[],
  filteredGlobalContact: [] as IUser[],
  filteredMyContact: [] as IUser[],
  selectedContact: {} as IUser,
};

export default function contactReducer(
  state = initialState,
  action: ContactAction
): IContactState {
  switch (action.type) {
    case ContactActionEnum.SET_IS_CONTACT_LOADING:
      return { ...state, isContactLoading: action.payload };
    case ContactActionEnum.SET_CONTACT_ERROR:
      return { ...state, contactError: action.payload };
    case ContactActionEnum.SET_GLOBAL_CONTACT:
      return { ...state, globalContact: action.payload };
    case ContactActionEnum.SET_FILTERED_GLOBAL_CONTACT:
      return { ...state, filteredGlobalContact: action.payload };
    case ContactActionEnum.SET_MY_CONTACT:
      return { ...state, myContact: action.payload };
    case ContactActionEnum.SET_FILTERED_MY_CONTACT:
      return { ...state, filteredMyContact: action.payload };
    case ContactActionEnum.SET_SELECTED_CONTACT:
      return { ...state, selectedContact: action.payload };
    default:
      return state;
  }
}
