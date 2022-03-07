import { IUser } from "../../../lib/models/IUser";
import { ChatAction, ChatActionEnum, IChatState } from "./types";

const initialState: IChatState = {
  isChatLoading: false,
  chatError: null,
  selectedChat: {} as IUser,
  myChatList: [] as IUser[],
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
    case ChatActionEnum.SET_CHAT_ERROR:
      return { ...state, chatError: action.payload };
    case ChatActionEnum.SET_MY_CHAT_LIST:
      return { ...state, myChatList: action.payload };
    default:
      return state;
  }
}
