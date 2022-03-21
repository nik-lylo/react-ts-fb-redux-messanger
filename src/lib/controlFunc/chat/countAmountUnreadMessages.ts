import { IUser } from "../../models/IUser";

export function countAmountUnreadMessages(messageSnapList: IUser[]) {
  let count = 0;
  messageSnapList.map((it: IUser) => {
    count = count + it.unread;
  });

  return count;
}
