import { uploadContactToFriends } from "../../../../api/contact/uploadToMyContact";
import { DEFAULT_LAST_MESSAGE } from "../../../../lib/models/DefaultValue";
import { IFriends } from "../../../../lib/models/IFriends";
import { IUser } from "../../../../lib/models/IUser";

export const ContactAsyncActionCreators = {
  setAddContact: (user: IUser, selectedContact: IUser) => async () => {
    try {
      const newFriends: IFriends = {
        userID: selectedContact.userID,
        unread: 0,
        lastMessage: DEFAULT_LAST_MESSAGE,
      };
      await uploadContactToFriends(
        user.userID,
        selectedContact.userID,
        newFriends
      );
    } catch (e: any) {
      console.log(e.message);
    }
  },
};
