import { IMessage } from "./IMessage";
import { IUser } from "./IUser";

export interface IFriends {
  userID: string;
  unread: number;
  lastMessage: IMessage;
}
export interface IFriendsUser extends IUser {
  unread: number;
  lastMessage: IMessage;
}
