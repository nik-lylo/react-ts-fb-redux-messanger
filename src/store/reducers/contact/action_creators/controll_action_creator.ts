import { AppDispatch } from "../../..";
import { filterContactByString } from "../../../../lib/controlFunc/contact/filterContactByString";
import { IUser } from "../../../../lib/models/IUser";
import { ContactActionCreators } from "./reducer_action_creator";

export const ControllContactActionCreators = {
  setFilteredContact:
    (value: string, myContact: IUser[], globalContact: IUser[]) =>
    (dispatch: AppDispatch) => {
      const filteredMyArray: IUser[] = filterContactByString(value, myContact);
      const filteredGlobalArray: IUser[] = filterContactByString(
        value,
        globalContact
      );
      dispatch(ContactActionCreators.setFilteredMyContact(filteredMyArray));
      dispatch(
        ContactActionCreators.setFilteredGlobalContact(filteredGlobalArray)
      );
    },
};
