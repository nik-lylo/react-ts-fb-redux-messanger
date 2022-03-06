import { IUser } from "../../models/IUser";

export function filterContactArray(contactArray: IUser[], contactId: string) {
  const result = contactArray.filter((item) => item.userID !== contactId);
  return result;
}
