import {
  IMessageChat,
  IMessageGroupChat,
} from "../../../../lib/models/IMessage";
import {
  ChatActionEnum,
  SetAmountUnreadMessage,
  SetChatGroupMessageList,
  SetChatGroupMessageSnap,
  SetChatMessageList,
  SetChatMessageSnap,
  SetIsMessageListLoaded,
  SetIsMessageLoaded,
  SetSelectedChat,
  SetSelectedChatGroup,
} from "../types";

export const ChatReducerActionCreators = {
  setSelectedChat: (chat: null | string): SetSelectedChat => ({
    type: ChatActionEnum.SET_SELECTED_CHAT,
    payload: chat,
  }),
  setSelectedChatGroup: (chat: null | string): SetSelectedChatGroup => ({
    type: ChatActionEnum.SET_SELECTED_CHAT_GROUP,
    payload: chat,
  }),
  setChatMessageSnap: (list: IMessageChat[]): SetChatMessageSnap => ({
    type: ChatActionEnum.SET_CHAT_MESSAGE_SNAP,
    payload: list,
  }),
  setChatMessageList: (list: IMessageChat[]): SetChatMessageList => ({
    type: ChatActionEnum.SET_CHAT_MESSAGE_LIST,
    payload: list,
  }),
  setChatGroupMessageSnap: (
    list: IMessageGroupChat[]
  ): SetChatGroupMessageSnap => ({
    type: ChatActionEnum.SET_CHAT_GROUP_MESSAGE_SNAP,
    payload: list,
  }),
  setChatGroupMessageList: (
    list: IMessageGroupChat[]
  ): SetChatGroupMessageList => ({
    type: ChatActionEnum.SET_CHAT_GROUP_MESSAGE_LIST,
    payload: list,
  }),
  setIsMessageLoaded: (flag: boolean): SetIsMessageLoaded => ({
    type: ChatActionEnum.SET_IS_MESSAGE_LOADED,
    payload: flag,
  }),
  setIsMessageListLoaded: (flag: boolean): SetIsMessageListLoaded => ({
    type: ChatActionEnum.SET_IS_MESSAGE_LIST_LOADED,
    payload: flag,
  }),
  setAmountUnreadMessage: (count: number): SetAmountUnreadMessage => ({
    type: ChatActionEnum.SET_AMOUNT_UNREAD_MESSAGE,
    payload: count,
  }),
};
