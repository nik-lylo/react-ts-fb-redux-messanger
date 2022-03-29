import { IMessageChat } from "./IMessage";
import { IUser } from "./IUser";

export interface IFriends {
  userID: string;
  unread: number;
  lastMessage: IMessageChat;
}
export interface IFriendsUser extends IUser {
  unread: number;
  lastMessage: IMessageChat;
}

export interface IHasFriendController {
  checked: boolean;
  hasFriend: boolean;
}
