import { IMessage } from "../../../lib/models/IMessage";
import { IUser } from "../../../lib/models/IUser";
import { ChatAction, ChatActionEnum, IChatState } from "./types";

const initialState: IChatState = {
  isChatLoading: false,
  isMessageLoading: false,
  chatError: null,
  selectedChat: {} as IUser,
  myChatList: [] as IUser[],
  myChatSnapList: [] as IUser[],
  messageSnapList: [] as IMessage[],
  messageList: [] as IMessage[],
  chatInputText: "",
};

export default function chatReducer(
  state = initialState,
  action: ChatAction
): IChatState {
  switch (action.type) {
    case ChatActionEnum.SET_SELECTED_CHAT:
      return { ...state, selectedChat: action.payload };
    case ChatActionEnum.SET_IS_CHAT_LOADING:
      return { ...state, isChatLoading: action.payload };
    case ChatActionEnum.SET_IS_MESSAGE_LOADING:
      return { ...state, isMessageLoading: action.payload };
    case ChatActionEnum.SET_CHAT_ERROR:
      return { ...state, chatError: action.payload };
    case ChatActionEnum.SET_MY_CHAT_LIST:
      return { ...state, myChatList: action.payload };
    case ChatActionEnum.SET_MY_CHAT_SNAP_LIST:
      return { ...state, myChatSnapList: action.payload };
    case ChatActionEnum.SET_MESSAGE_LIST:
      return { ...state, messageList: action.payload };
    case ChatActionEnum.SET_MESSAGE_SNAP_LIST:
      return { ...state, messageSnapList: action.payload };
    case ChatActionEnum.SET_CHAT_INPUT_TEXT:
      return { ...state, chatInputText: action.payload };
    default:
      return state;
  }
}
