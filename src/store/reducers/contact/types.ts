export interface IContactState {
  selectedContact: string | null;
}

export enum ContactActionEnum {
  SET_SELECTED_CONTACT = "SET_SELECTED_CONTACT",
}

export interface SetSelectedContact {
  type: ContactActionEnum.SET_SELECTED_CONTACT;
  payload: string | null;
}

export type ContactAction = SetSelectedContact;
