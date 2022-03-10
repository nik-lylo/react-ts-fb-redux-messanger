import { IMessage } from "../../../../lib/models/IMessage";
import { IUser } from "../../../../lib/models/IUser";
import {
  ChatActionEnum,
  SetChatError,
  SetChatInputText,
  SetIsChatLoading,
  SetIsMessageLoading,
  SetMessageList,
  SetMessageSnapList,
  SetMyChatList,
  SetMyChatSnapList,
  SetSelectedChat,
} from "../types";

export const ChatActionCreators = {
  setSelectedChat: (chat: IUser): SetSelectedChat => ({
    type: ChatActionEnum.SET_SELECTED_CHAT,
    payload: chat,
  }),
  setIsChatLoading: (flag: boolean): SetIsChatLoading => ({
    type: ChatActionEnum.SET_IS_CHAT_LOADING,
    payload: flag,
  }),
  setIsMessageLoading: (flag: boolean): SetIsMessageLoading => ({
    type: ChatActionEnum.SET_IS_MESSAGE_LOADING,
    payload: flag,
  }),
  setChatError: (err: null | string): SetChatError => ({
    type: ChatActionEnum.SET_CHAT_ERROR,
    payload: err,
  }),
  setMyChatList: (list: IUser[]): SetMyChatList => ({
    type: ChatActionEnum.SET_MY_CHAT_LIST,
    payload: list,
  }),
  setMyChatSnapList: (list: IUser[]): SetMyChatSnapList => ({
    type: ChatActionEnum.SET_MY_CHAT_SNAP_LIST,
    payload: list,
  }),
  setMessageSnapList: (list: IMessage[]): SetMessageSnapList => ({
    type: ChatActionEnum.SET_MESSAGE_SNAP_LIST,
    payload: list,
  }),
  setMessageList: (list: IMessage[]): SetMessageList => ({
    type: ChatActionEnum.SET_MESSAGE_LIST,
    payload: list,
  }),
  setChatInputText: (str: string): SetChatInputText => ({
    type: ChatActionEnum.SET_CHAT_INPUT_TEXT,
    payload: str,
  }),
};
