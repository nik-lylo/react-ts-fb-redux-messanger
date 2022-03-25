import { IFriends } from "../../models/IFriends";
import { IUser } from "../../models/IUser";

export function filterContactUserArray(
  contactArray: IUser[],
  contactId: string
) {
  const result = contactArray.filter(
    (item: IUser) => item.userID !== contactId
  );
  return result;
}
