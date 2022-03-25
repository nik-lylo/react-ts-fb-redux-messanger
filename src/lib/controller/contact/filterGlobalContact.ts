import { IFriends } from "../../models/IFriends";
import { IUser } from "../../models/IUser";

export function filterGlobalContact(
  myId: string,
  globalContact: IUser[],
  myContact: IFriends[]
) {
  const myContactId = myContact.map((it) => it.userID);
  const resultArr = globalContact.filter((item) => {
    if (item.userID === myId) {
      return false;
    }
    if (myContactId.includes(item.userID)) {
      return false;
    } else {
      return true;
    }
  });
  return resultArr;
}
