import { IMessage } from "./IMessage";
import { IUser } from "./IUser";

export interface IFriends extends IUser {
  lastMessage: IMessage;
}
