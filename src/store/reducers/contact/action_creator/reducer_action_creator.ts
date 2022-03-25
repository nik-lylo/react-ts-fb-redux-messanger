import { ContactActionEnum, SetSelectedContact } from "../types";

export const ContactReducerActionCreators = {
  setSelectedContact: (id: string | null): SetSelectedContact => ({
    type: ContactActionEnum.SET_SELECTED_CONTACT,
    payload: id,
  }),
};
