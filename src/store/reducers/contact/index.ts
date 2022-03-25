import { ContactAction, ContactActionEnum, IContactState } from "./types";

const initialState: IContactState = {
  selectedContact: null,
};

export default function contactReducer(
  state = initialState,
  action: ContactAction
): IContactState {
  switch (action.type) {
    case ContactActionEnum.SET_SELECTED_CONTACT:
      return { ...state, selectedContact: action.payload };
    default:
      return state;
  }
}
