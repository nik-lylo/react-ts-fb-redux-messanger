import { IUser } from "../../../../lib/models/IUser";
import {
  ChatActionEnum,
  SetChatError,
  SetIsChatLoading,
  SetMyChatList,
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
  setChatError: (err: null | string): SetChatError => ({
    type: ChatActionEnum.SET_CHAT_ERROR,
    payload: err,
  }),
  setMyChatList: (list: IUser[]): SetMyChatList => ({
    type: ChatActionEnum.SET_MY_CHAT_LIST,
    payload: list,
  }),
};
