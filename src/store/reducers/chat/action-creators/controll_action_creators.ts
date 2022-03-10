import { AppDispatch } from "../../..";
import { isEmptyObj } from "../../../../lib/helper/isEmptyObj";
import { IMessage } from "../../../../lib/models/IMessage";
import { IUser } from "../../../../lib/models/IUser";
import { ChatActionCreators } from "./reducer_action_creators";

export const ControllChatActionCreators = {
  setControllMyChatList:
    (myChatList: IUser[], myChatSnapList: IUser[]) =>
    async (dispatch: AppDispatch) => {
      if (myChatSnapList.length === 0) return;
      if (myChatList.length > myChatSnapList.length) return;
      if (myChatList.length < myChatSnapList.length) {
        myChatSnapList.sort(
          (a, b) => b.lastMessage.createdAt - a.lastMessage.createdAt
        );
        dispatch(ChatActionCreators.setMyChatList(myChatSnapList));
        return;
      }
      if (myChatList.length === myChatSnapList.length) {
        const mapped = myChatList.map((it: IUser) => {
          let filtered = myChatSnapList.filter(
            (snap: IUser) => it.userID === snap.userID
          );
          if (isEmptyObj(it.lastMessage)) {
            it.lastMessage = filtered[0].lastMessage;
            return it;
          }
          if (
            filtered[0].lastMessage.createdAt.seconds !==
            it.lastMessage.createdAt.seconds
          ) {
            it.lastMessage = filtered[0].lastMessage;
            return it;
          }
          return it;
        });
        mapped.sort(
          (a, b) =>
            b.lastMessage.createdAt.seconds - a.lastMessage.createdAt.seconds
        );
        dispatch(ChatActionCreators.setMyChatList(mapped));
      }
    },
  setControllMyMessageList:
    (messageSnapList: IMessage[], selectedChat: IUser, myId: string) =>
    (dispatch: AppDispatch) => {
      if (
        messageSnapList.length === 0 &&
        selectedChat.lastMessage.createdAt.seconds === 0
      ) {
        dispatch(ChatActionCreators.setMessageList(messageSnapList));
        return;
      }
      if (messageSnapList.length === 0) return;
      if (
        messageSnapList[messageSnapList.length - 1].fromID !== myId &&
        messageSnapList[messageSnapList.length - 1].fromID !==
          selectedChat.userID
      ) {
        return;
      }
      dispatch(ChatActionCreators.setMessageList(messageSnapList));
    },
};
