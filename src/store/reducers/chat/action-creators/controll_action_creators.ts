import { AppDispatch } from "../../..";
import { IUser } from "../../../../lib/models/IUser";
import { ChatActionCreators } from "./reducer_action_creators";

export const ControllChatActionCreators = {
  setControllMyChatList:
    (myChatList: IUser[], myChatSnapList: IUser[]) =>
    async (dispatch: AppDispatch) => {
      if (myChatSnapList.length === 0) return;
      if (myChatList.length > myChatSnapList.length) return;
      if (myChatList.length < myChatSnapList.length) {
        console.log("get");
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
};
