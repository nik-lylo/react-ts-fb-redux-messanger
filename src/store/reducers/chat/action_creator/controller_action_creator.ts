import { AppDispatch } from "../../..";
import {
  IMessageChat,
  IMessageGroupChat,
} from "../../../../lib/models/IMessage";
import { ChatReducerActionCreators } from "./reducer_action_creator";

export const ChatControllerActionCreators = {
  setChatControllerChatMessage:
    (
      chatMessageSnap: IMessageChat[],
      profileID: string,
      selectedChat: string
    ) =>
    (dispatch: AppDispatch) => {
      try {
        if (chatMessageSnap.length === 0) {
          dispatch(ChatReducerActionCreators.setChatMessageList([]));
          return;
        }
        if (
          chatMessageSnap[chatMessageSnap.length - 1].fromID !== profileID &&
          chatMessageSnap[chatMessageSnap.length - 1].fromID !== selectedChat
        ) {
          return;
        }
        dispatch(ChatReducerActionCreators.setChatMessageList(chatMessageSnap));
      } catch (e: any) {
        console.log(e.message);
      } finally {
        setTimeout(() => {
          dispatch(ChatReducerActionCreators.setIsMessageListLoaded(false));
        }, 300);
      }
    },
  setChatControllerChatGroupMessage:
    (chatGroupMessageSnap: IMessageGroupChat[]) => (dispatch: AppDispatch) => {
      try {
        if (chatGroupMessageSnap.length === 0) {
          return;
        }
        dispatch(
          ChatReducerActionCreators.setChatGroupMessageList(
            chatGroupMessageSnap
          )
        );
      } catch (e: any) {
        console.log(e.message);
      } finally {
        setTimeout(() => {
          dispatch(ChatReducerActionCreators.setIsMessageListLoaded(false));
        }, 300);
      }
    },
};
