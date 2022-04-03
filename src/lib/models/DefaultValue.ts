import { IGroup } from "./IGroup";
import { IMessageChat, IMessageGroupChat } from "./IMessage";

export enum DefaultAvatar {
  AVATAR_PHOTO = "https://firebasestorage.googleapis.com/v0/b/messanger-react-type-redux.appspot.com/o/defaultPhoto%2FdefaultAvatar.jpg?alt=media&token=67a0b87e-83e5-4730-a4a3-935b482bc41f",
  GROUP__IMAGE = "https://firebasestorage.googleapis.com/v0/b/messanger-react-type-redux.appspot.com/o/defaultPhoto%2FdefaultGroup.png?alt=media&token=ac62faff-d98a-4d78-b274-e130b8481497",
}

export interface IGenericObject {
  [key: string]: any;
}

export const DEFAULT_LAST_MESSAGE_CHAT: IMessageChat = {
  text: "__No message",
  urlPhoto: "",
  fromID: "",
  createdAt: new Date(),
  fullname: "",
};
export const DEFAULT_LAST_MESSAGE_CHAT_GROUP: IMessageGroupChat = {
  text: "__No message",
  urlPhoto: "",
  fromID: "",
  fromGroupID: "",
  createdAt: new Date(),
  fullname: "",
};
export const DEFAULT_DELETED_GROUP: IGroup = {
  groupId: "",
  groupAvatar: DefaultAvatar.GROUP__IMAGE,
  admin: "",
  private: "Private",
  name: "Deleted Group",
  about: null,
  instagram: null,
  twitter: null,
  facebook: null,
  member_amount: 0,
  joined: new Date(),
  lastMessage: DEFAULT_LAST_MESSAGE_CHAT_GROUP,
  members: [],
  inviting: [],
};

export const DefaultSelectMonth = [
  "",
  "January",
  "February",
  "March",
  "April",
  "May",
  "July",
  "June",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export interface IMuiSnackBarProps {
  open: boolean;
  text: string;
  status: "success" | "error" | "info" | "warning";
}
