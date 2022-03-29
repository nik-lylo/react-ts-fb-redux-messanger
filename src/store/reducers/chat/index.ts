import { ChatAction, ChatActionEnum, IChatState } from "./types";

const initialState: IChatState = {
  selectedChat: null,
  selectedChatGroup: null,
  chatMessageSnap: [],
  chatMessageList: [],
  chatGroupMessageSnap: [],
  chatGroupMessageList: [],
  isMessageLoaded: false,
  isMessageListLoaded: false,
  amountUnreadMessage: 0,
};

export default function chatReducer(
  state = initialState,
  action: ChatAction
): IChatState {
  switch (action.type) {
    case ChatActionEnum.SET_SELECTED_CHAT:
      return { ...state, selectedChat: action.payload };
    case ChatActionEnum.SET_SELECTED_CHAT_GROUP:
      return { ...state, selectedChatGroup: action.payload };
    case ChatActionEnum.SET_CHAT_MESSAGE_SNAP:
      return { ...state, chatMessageSnap: action.payload };
    case ChatActionEnum.SET_CHAT_MESSAGE_LIST:
      return { ...state, chatMessageList: action.payload };
    case ChatActionEnum.SET_CHAT_GROUP_MESSAGE_SNAP:
      return { ...state, chatGroupMessageSnap: action.payload };
    case ChatActionEnum.SET_CHAT_GROUP_MESSAGE_LIST:
      return { ...state, chatGroupMessageList: action.payload };
    case ChatActionEnum.SET_IS_MESSAGE_LOADED:
      return { ...state, isMessageLoaded: action.payload };
    case ChatActionEnum.SET_IS_MESSAGE_LIST_LOADED:
      return { ...state, isMessageListLoaded: action.payload };
    case ChatActionEnum.SET_AMOUNT_UNREAD_MESSAGE:
      return { ...state, amountUnreadMessage: action.payload };
    default:
      return state;
  }
}
