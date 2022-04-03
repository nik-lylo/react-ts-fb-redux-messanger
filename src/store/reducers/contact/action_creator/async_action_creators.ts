import { AppDispatch } from "../../..";
import { uploadDeleteContact } from "../../../../api/contact/uploadDeleteContact";
import { uploadContactToFriends } from "../../../../api/contact/uploadToMyContact";
import { DEFAULT_LAST_MESSAGE_CHAT } from "../../../../lib/models/DefaultValue";
import { IFriends } from "../../../../lib/models/IFriends";
import { IUser } from "../../../../lib/models/IUser";
import { ContactReducerActionCreators } from "./reducer_action_creator";

export const ContactAsyncActionCreators = {
  setAddContact:
    (user: IUser, selectedContact: IUser, flagSetNull: boolean) =>
    async (dispatch: AppDispatch) => {
      try {
        const newFriends: IFriends = {
          userID: selectedContact.userID,
          unread: 0,
          lastMessage: DEFAULT_LAST_MESSAGE_CHAT,
        };
        await uploadContactToFriends(
          user.userID,
          selectedContact.userID,
          newFriends
        );
        if (flagSetNull) {
          dispatch(ContactReducerActionCreators.setSelectedContact(null));
        }
      } catch (e: any) {
        console.log(e.message);
      }
    },
  setDeleteContact:
    (myId: string, selectedContact: string) =>
    async (dispatch: AppDispatch) => {
      try {
        await uploadDeleteContact(myId, selectedContact);
        dispatch(ContactReducerActionCreators.setSelectedContact(null));
      } catch (e: any) {
        console.log(e.message);
      }
    },
};
