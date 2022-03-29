import { IMessageChat, IMessageGroupChat } from "../../../lib/models/IMessage";

export interface IChatState {
  selectedChat: string | null;
  selectedChatGroup: string | null;
  chatMessageSnap: IMessageChat[];
  chatMessageList: IMessageChat[];
  chatGroupMessageSnap: IMessageGroupChat[];
  chatGroupMessageList: IMessageGroupChat[];
  isMessageLoaded: boolean;
  isMessageListLoaded: boolean;
  amountUnreadMessage: number;
}

export enum ChatActionEnum {
  SET_SELECTED_CHAT = "SET_SELECTED_CHAT",
  SET_SELECTED_CHAT_GROUP = "SET_SELECTED_CHAT_GROUP",
  SET_CHAT_MESSAGE_SNAP = "SET_CHAT_MESSAGE_SNAP",
  SET_CHAT_MESSAGE_LIST = "SET_CHAT_MESSAGE_LIST",
  SET_CHAT_GROUP_MESSAGE_SNAP = "SET_CHAT_GROUP_MESSAGE_SNAP",
  SET_CHAT_GROUP_MESSAGE_LIST = "SET_CHAT_GROUP_MESSAGE_LIST",
  SET_IS_MESSAGE_LOADED = "SET_IS_MESSAGE_LOADED",
  SET_IS_MESSAGE_LIST_LOADED = "SET_IS_MESSAGE_LIST_LOADED",
  SET_AMOUNT_UNREAD_MESSAGE = "SET_AMOUNT_UNREAD_MESSAGE",
}

export interface SetSelectedChat {
  type: ChatActionEnum.SET_SELECTED_CHAT;
  payload: string | null;
}
export interface SetSelectedChatGroup {
  type: ChatActionEnum.SET_SELECTED_CHAT_GROUP;
  payload: string | null;
}
export interface SetChatMessageSnap {
  type: ChatActionEnum.SET_CHAT_MESSAGE_SNAP;
  payload: IMessageChat[];
}
export interface SetChatMessageList {
  type: ChatActionEnum.SET_CHAT_MESSAGE_LIST;
  payload: IMessageChat[];
}
export interface SetChatGroupMessageSnap {
  type: ChatActionEnum.SET_CHAT_GROUP_MESSAGE_SNAP;
  payload: IMessageGroupChat[];
}
export interface SetChatGroupMessageList {
  type: ChatActionEnum.SET_CHAT_GROUP_MESSAGE_LIST;
  payload: IMessageGroupChat[];
}
export interface SetIsMessageLoaded {
  type: ChatActionEnum.SET_IS_MESSAGE_LOADED;
  payload: boolean;
}
export interface SetIsMessageListLoaded {
  type: ChatActionEnum.SET_IS_MESSAGE_LIST_LOADED;
  payload: boolean;
}
export interface SetAmountUnreadMessage {
  type: ChatActionEnum.SET_AMOUNT_UNREAD_MESSAGE;
  payload: number;
}

export type ChatAction =
  | SetSelectedChat
  | SetSelectedChatGroup
  | SetChatMessageSnap
  | SetChatMessageList
  | SetChatGroupMessageSnap
  | SetChatGroupMessageList
  | SetIsMessageLoaded
  | SetAmountUnreadMessage
  | SetIsMessageListLoaded;
