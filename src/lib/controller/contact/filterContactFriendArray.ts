import { IFriends } from "../../models/IFriends";
import { IUser } from "../../models/IUser";

export function filterContactFriendArray(
  contactArray: IFriends[],
  contactId: string
) {
  const result = contactArray.filter(
    (item: IFriends) => item.userID !== contactId
  );
  return result;
}
