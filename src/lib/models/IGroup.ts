import { IMessageGroupChat } from "./IMessage";

export interface IGroup {
  groupId: string;
  groupAvatar: string;
  admin: string;
  private: "Public" | "Private";
  name: string;
  about: string | null;
  instagram: string | null;
  twitter: string | null;
  facebook: string | null;
  member_amount: number;
  joined: Date;
  lastMessage: IMessageGroupChat;
  members: IGroupMember[];
  inviting: string[];
}

export interface IGroupMember {
  userId: string;
  joined: any;
}

export interface IGroupObject {
  [key: string]: IGroup;
}
