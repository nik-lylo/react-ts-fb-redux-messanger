import { IMessage } from "../../../lib/models/IMessage";
import { IUser } from "../../../lib/models/IUser";

export interface IChatState {
  isChatLoading: boolean;
  isMessageLoading: boolean;
  selectedChat: IUser;
  chatError: string | null;
  myChatList: IUser[];
  myChatSnapList: IUser[];
  chatInputText: string;
  messageSnapList: IMessage[];
  messageList: IMessage[];
  amountUnreadMessages: number;
}

export enum ChatActionEnum {
  SET_SELECTED_CHAT = "SET_SELECTED_CHAT",
  SET_IS_CHAT_LOADING = "SET_IS_CHAT_LOADING",
  SET_IS_MESSAGE_LOADING = "SET_IS_MESSAGE_LOADING",
  SET_CHAT_ERROR = "SET_CHAT_ERROR",
  SET_MY_CHAT_LIST = "SET_MY_CHAT_LIST",
  SET_MY_CHAT_SNAP_LIST = "SET_MY_CHAT_SNAP_LIST",
  SET_MESSAGE_SNAP_LIST = "SET_MESSAGE_SNAP_LIST",
  SET_CHAT_INPUT_TEXT = "SET_CHAT_INPUT_TEXT",
  SET_MESSAGE_LIST = "SET_MESSAGE_LIST",
  SET_AMOUNT_UNREAD_MESSAGES = "SET_AMOUNT_UNREAD_MESSAGES",
}

export interface SetSelectedChat {
  type: ChatActionEnum.SET_SELECTED_CHAT;
  payload: IUser;
}
export interface SetChatInputText {
  type: ChatActionEnum.SET_CHAT_INPUT_TEXT;
  payload: string;
}
export interface SetChatError {
  type: ChatActionEnum.SET_CHAT_ERROR;
  payload: null | string;
}
export interface SetIsChatLoading {
  type: ChatActionEnum.SET_IS_CHAT_LOADING;
  payload: boolean;
}
export interface SetIsMessageLoading {
  type: ChatActionEnum.SET_IS_MESSAGE_LOADING;
  payload: boolean;
}
export interface SetMyChatList {
  type: ChatActionEnum.SET_MY_CHAT_LIST;
  payload: IUser[];
}
export interface SetMyChatSnapList {
  type: ChatActionEnum.SET_MY_CHAT_SNAP_LIST;
  payload: IUser[];
}
export interface SetMessageSnapList {
  type: ChatActionEnum.SET_MESSAGE_SNAP_LIST;
  payload: IMessage[];
}
export interface SetMessageList {
  type: ChatActionEnum.SET_MESSAGE_LIST;
  payload: IMessage[];
}
export interface SetAmountUnreadMessages {
  type: ChatActionEnum.SET_AMOUNT_UNREAD_MESSAGES;
  payload: number;
}

export type ChatAction =
  | SetSelectedChat
  | SetChatError
  | SetIsChatLoading
  | SetIsMessageLoading
  | SetMyChatList
  | SetMessageSnapList
  | SetMessageList
  | SetMyChatSnapList
  | SetChatInputText
  | SetAmountUnreadMessages;
